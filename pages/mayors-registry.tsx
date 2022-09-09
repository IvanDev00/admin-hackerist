import Layout from "@/components/layout/Layout";
import { Button, Table } from "@mantine/core";
import React from "react";
import mayorRegistry from "Data/mayorRegistry.json";

type Props = {};

const MayorsRegistryPage = (props: Props) => {
  const rows = mayorRegistry.map((element) => (
    <tr key={element.id}>
      <td>{element.ownerName}</td>
      <td>{element.businessName}</td>
      <td>
        {" "}
        <Button color="indigo.6" size="xs">
          View File
        </Button>
      </td>
      <td>
        <Button color="indigo.6" size="xs">
          View File
        </Button>
      </td>
      <td>
        <Button color="indigo.6" size="xs">
          View File
        </Button>
      </td>
      <td>
        <Button color="indigo.6" size="xs">
          View File
        </Button>
      </td>
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
            <th>Owner Name</th>
            <th>Business Name</th>
            <th>Two Valid ID</th>
            <th>Proof of Address</th>
            <th>COR from DTI</th>
            <th>Barangay Clearance</th>
            <th>Application Form</th>
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

export default MayorsRegistryPage;
