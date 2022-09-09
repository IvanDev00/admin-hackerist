import Layout from "@/components/layout/Layout";
import { Table } from "@mantine/core";
import React from "react";

type Props = {};

const DTIRegistry = (props: Props) => {
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
      </Table>
    </Layout>
  );
};

export default DTIRegistry;
