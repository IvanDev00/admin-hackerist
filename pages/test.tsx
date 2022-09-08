import React from "react";
import FirebaseCrud from "lib/firebase/crud";
import CollectionNames from "lib/firebase/colNames";

export default function Test() {
  const TestCrud = FirebaseCrud(CollectionNames.TEST);

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
    </div>
  );
}
