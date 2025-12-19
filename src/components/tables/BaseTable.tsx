import { Table } from "antd";
import type { TableProps } from "antd";
import styles from "./table.module.scss";
import type { PowerTableRow } from "./mock";

interface BaseTableProps {
  columns: TableProps<PowerTableRow>["columns"];
  dataSource: TableProps<PowerTableRow>["dataSource"];
}

const BaseTable = ({ columns, dataSource }: BaseTableProps) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      className={styles["dark-table"]}
    />
  );
};

export default BaseTable;
