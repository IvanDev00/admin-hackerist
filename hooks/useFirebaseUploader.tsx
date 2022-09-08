import { ref, getDownloadURL } from "firebase/storage";
import { useUploadFile } from "react-firebase-hooks/storage";
import { v4 as uuidv4 } from "uuid";

import { storage } from "lib/firebase/firebaseInit";

function getFileExtention(filename: string) {
  return (
    filename.substring(filename.lastIndexOf(".") + 1, filename.length) ||
    filename
  );
}

export default function useFirebaseUploader(path = "random") {
  const [uploadFile, uploading, error] = useUploadFile();

  const upload = (selectedFile: File) => {
    const uploadPromise = new Promise((resolve, reject) => {
      // get file extention
      const ext = getFileExtention(selectedFile.name);

      // check if file is valid
      if (selectedFile) {
        // create upload referrence
        const uploadRef = ref(storage, `${uuidv4()}.${ext}`);

        // upload file
        uploadFile(uploadRef, selectedFile, {
          contentType: selectedFile.type,
        })
          .then((result) => {
            // create download ref
            const starsRef = ref(storage, result?.metadata.fullPath);

            // get download url
            getDownloadURL(starsRef)
              .then((url) => {
                // resolve
                resolve({
                  filename: selectedFile.name,
                  uploadedFilename: result?.metadata.name,
                  url,
                });
              })
              .catch((error) => reject(error));
          })
          .catch((error) => reject(error));
      } else {
        reject("file-invalid");
      }
    });

    return uploadPromise;
  };

  return [upload, uploading, error] as const;
}
