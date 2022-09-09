import React from "react";
import Login from "@/components/authentication/Login";
import FirebaseCrud from "lib/firebase/crud";
import CollectionNames from "lib/firebase/colNames";

const AdminCrud = FirebaseCrud(CollectionNames.ADMIN);

async function login(email: string, password: string): Promise<Boolean> {
  try {
    const data1 = await AdminCrud.readAll();

    for (let i in data1) {
      if (data1[i].password === password && data1[i].email === email) {
        return true;
      }
    }

    return false;
    // console.log(data1);
    // alert(JSON.stringify(data));
  } catch (error) {
    alert(error);
    throw error;
  }
}

export default function LoginPage() {
  return <Login />;
}
