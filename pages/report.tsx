import Layout from "@/components/layout/Layout";

import FirebaseCrud from "lib/firebase/crud";
import CollectionNames from "lib/firebase/colNames";
import ReportData from "Data/reportData.json";
import { Table } from "@mantine/core";
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
  const rows = ReportData.map((element) => (
    <tr key={element.id}>
      <td>{element.userID}</td>
      <td>{element.reportDescription}</td>
      <td>{element.dateCreated}</td>
    </tr>
  ));

  return (
    <Layout>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>UserID</th>
            <th>Report Description</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Layout>
  );
}
