import Layout from "@/components/layout/Layout";
import { Button, Table } from "@mantine/core";
import React from "react";
import birVerfication from "Data/birVerification.json";
type Props = {};

const BIRVerification = (props: Props) => {
  const rows = birVerfication.map((element) => (
    <tr key={element.id}>
      <td>{element.ownerName}</td>
      <td>{element.businessName}</td>
      <td>
        <Button color="indigo.6" size="xs">
          View File
        </Button>
      </td>
      <td>{element.dateSubmitted}</td>
      <td>
        <Button color="green.6">Approve</Button>
      </td>
      <td>
        <Button color="red.6">Reject</Button>
      </td>
    </tr>
  ));

  return (
    <Layout>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>Name of Owner</th>
            <th>Business Name</th>
            <th>Mayors Permit</th>
            <th>Date Submitted</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Layout>
  );
};

export default BIRVerification;
