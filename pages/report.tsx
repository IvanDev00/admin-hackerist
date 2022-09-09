import Layout from "@/components/layout/Layout";

import FirebaseCrud from "lib/firebase/crud";
import CollectionNames from "lib/firebase/colNames";

const Report = FirebaseCrud(CollectionNames.REPORT);

async function getAllReport() {
  try {
    const data = await Report.readAll();
    return data;
    console.log(data);
    alert(JSON.stringify(data));
  } catch (error) {
    alert(error);
  }
}

export default function ReportPage() {
  return (
    <Layout>
      <h1>Reports</h1>
    </Layout>
  );
}

