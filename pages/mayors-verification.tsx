import Layout from "@/components/layout/Layout";
import { Button, Table } from "@mantine/core";
import React from "react";
import mayorVerificationData from "Data/mayorVerificationData.json";

type Props = {};

const MayorsVerificationPage = (props: Props) => {
  const rows = mayorVerificationData.map((element) => (
    <tr key={element.id}>
      <td>{element.ownerName}</td>
      <td>
        {" "}
        <Button color="indigo.6" size="xs">
          View Certificate
        </Button>
      </td>
      <td>{element.businessName}</td>
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
            <th>Owner Name</th>
            <th>Certificate</th>
            <th>Business Name</th>
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

export default MayorsVerificationPage;
