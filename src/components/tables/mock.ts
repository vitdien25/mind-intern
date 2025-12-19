import type { TableProps } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface PowerTableRow {
  key: number;
  stt: number;
  name: string;
  kwh: number;
  temp: number;
  humidity: string;
  current: string;
}
export const columns: ColumnsType<PowerTableRow> = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    width: 60,
    align: "center",
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "kWh",
    dataIndex: "kwh",
    key: "kwh",
    align: "center",
  },
  {
    title: "t°",
    dataIndex: "temp",
    key: "temp",
    align: "center",
  },
  {
    title: "Độ ẩm",
    dataIndex: "humidity",
    key: "humidity",
    align: "center",
  },
  {
    title: "Dòng TB",
    dataIndex: "current",
    key: "current",
    align: "right",
  },
];

export const dataSource: TableProps<PowerTableRow>["dataSource"] = [
  {
    key: 1,
    stt: 1,
    name: "Kim Long Motor/Nhà máy xe BUS/Xưởng Hàn BUS/Tủ MBS 2",
    kwh: 339,
    temp: 37,
    humidity: "50%",
    current: "12 A",
  },
  {
    key: 2,
    stt: 2,
    name: "Kim Long Motor",
    kwh: 334,
    temp: 42,
    humidity: "80%",
    current: "12 A",
  },
  {
    key: 3,
    stt: 3,
    name: "Nhà máy xe BUS",
    kwh: 339,
    temp: 37,
    humidity: "50%",
    current: "12 A",
  },
  // thêm row nếu cần
  {
    key: 4,
    stt: 4,
    name: "Xưởng Hàn BUS",
    kwh: 339,
    temp: 37,
    humidity: "50%",
    current: "12 A",
  },
  {
    key: 5,
    stt: 5,
    name: "Tủ MBS 2",
    kwh: 339,
    temp: 37,
    humidity: "50%",
    current: "12 A",
  },
  {
    key: 6,
    stt: 6,
    name: "Tủ MBS 3",
    kwh: 339,
    temp: 37,
    humidity: "50%",
    current: "12 A",
  },
  {
    key: 7,
    stt: 7,
    name: "Tủ MBS 4",
    kwh: 339,
    temp: 37,
    humidity: "50%",
    current: "12 A",
  },
  {
    key: 8,
    stt: 8,
    name: "Tủ MBS 5",
    kwh: 339,
    temp: 37,
    humidity: "50%",
    current: "12 A",
  },
  {
    key: 9,
    stt: 9,
    name: "Tủ MBS 6",
    kwh: 339,
    temp: 37,
    humidity: "50%",
    current: "12 A",
  },
];
