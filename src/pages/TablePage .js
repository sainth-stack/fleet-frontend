import React from "react";
import CustomTable from "../components/CustomTable";
import { headers, tableData } from "../data/TableData";
import "../styles/Table.css";
import Layout from "../components/Layout/Layout";

const TablePage = () => {
  return (
    <Layout>
      <div className="">
        <h1 className="text-2xl font-bold text-center ">Table Data</h1>

        <CustomTable headers={headers} data={tableData} />
      </div>
    </Layout>
  );
};

export default TablePage;
