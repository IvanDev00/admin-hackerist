import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import CollectionNames from "./colNames";
import { db } from "./firebaseInit";

export default function FirebaseCrud(collectionName: CollectionNames) {
  const collectionRef = collection(db, collectionName);

  return {
    create: (data: any) => {
      return addDoc(collectionRef, data);
    },
    update: (id: string, data: any) => {
      const docRef = doc(db, collectionName, id);
      return updateDoc(docRef, data);
    },
    delete: (id: string) => {
      return deleteDoc(doc(db, collectionName, id));
    },
    read: (id: string) => {
      const docRef = doc(db, collectionName, id);
      const promise: any = new Promise((resolve, rejects) => {
        getDoc(docRef).then((docSnap) => {
          if (docSnap.exists()) {
            const data: any = {
              ...docSnap.data(),
              id: docSnap.id,
            };
            resolve(data);
          } else {
            rejects(new Error("not-found"));
          }
        });
      });
      return promise;
    },
    readAll: () => {
      const promise: any = new Promise((resolve) => {
        getDocs(collection(db, collectionName)).then((querySnapshot) => {
          const data: any = [];
          querySnapshot.forEach((doc) => {
            data.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          resolve(data);
        });
      });
      return promise;
    },
  };
}
