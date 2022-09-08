import React from "react";
import FirebaseCrud from "lib/firebase/crud";
import CollectionNames from "lib/firebase/colNames";
import useFirebaseUploader from "hooks/useFirebaseUploader";

export default function Test() {
  const TestCrud = FirebaseCrud(CollectionNames.TEST);
  const [companyUploader, isUploading] = useFirebaseUploader("copy");

  function isFileImage(file: File) {
    return file && file["type"].split("/")[0] === "image";
  }

  const handleUploadProfile = async (e: Event) => {
    if (e.target != null) {
      const target = e.target as HTMLInputElement;
      const fileName = target.files ? target.files[0] : undefined;

      if (fileName) {
        // check if file is image
        if (!isFileImage(fileName)) {
          alert("File is not an Image");
          return;
        }

        try {
          const data: any = await companyUploader(fileName);
          console.log(data);
          alert("uploaded");
          target.value = "";
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  async function create() {
    try {
      await TestCrud.create({ test: "test" });
      alert("created");
    } catch (error) {
      alert(error);
    }
  }
  async function update(id: any) {
    try {
      await TestCrud.update(id, { test: "update" });
      alert("updated");
    } catch (error) {
      alert(error);
    }
  }
  async function del(id: any) {
    try {
      await TestCrud.delete(id);
      alert("deleted");
    } catch (error) {
      alert(error);
    }
  }
  async function read(id: any) {
    try {
      const data = await TestCrud.read(id);
      console.log(data);
      alert(JSON.stringify(data));
    } catch (error) {
      alert(error);
    }
  }
  async function readAll() {
    try {
      const data = await TestCrud.readAll();
      console.log(data);
      alert(JSON.stringify(data));
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <button onClick={create}>create</button>
      <button onClick={() => update("mFItPWhdLlLuzBe2ZDFj")}>update</button>
      <button onClick={() => del("mFItPWhdLlLuzBe2ZDFj")}>delete</button>
      <button onClick={() => read("mFItPWhdLlLuzBe2ZDFj")}>read</button>
      <button onClick={() => readAll()}>readAll</button>
      <div>
        <input type="file" accept="image/*" onChange={handleUploadProfile} />
      </div>
    </div>
  );
}
