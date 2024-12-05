import React from "react";
import CustomTable from "../components/CustomTable";
import { headers, tableData } from "../data/TableData";
import "../styles/Table.css";
import Layout from "../components/Layout/Layout";
import ExportToExcel from "../components/Export/ExportXl";

const TablePage = () => {
  return (
    <Layout>
      <div className="-z-20">

        <div className=" container   ">
           {/* <ExportToExcel />  */}
          <CustomTable headers={headers} data={tableData} />
        </div>
      </div>
    </Layout>
  );
};

export default TablePage;
