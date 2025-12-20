import type { TableProps } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface PowerTableRow {
  key: number;
  stt?: number;
  name?: string;
  kwh?: number;
  temp?: number;
  humidity?: string;
  current?: string;
  factory?: number;
  cabinetList?: string;
  openingReading?: number;
  currentReading?: number;
  consumption?: string;
}
export const columns: ColumnsType<PowerTableRow> = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    width: 106,
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
    width: 120,
    align: "center",
  },
  {
    title: "t°",
    dataIndex: "temp",
    key: "temp",
    width: 120,
    align: "center",
  },
  {
    title: "Độ ẩm",
    dataIndex: "humidity",
    key: "humidity",
    width: 120,
    align: "center",
  },
  {
    title: "Dòng TB",
    dataIndex: "current",
    key: "current",
    width: 120,
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

export const columns2: ColumnsType<PowerTableRow> = [
  {
    title: "Xưởng",
    dataIndex: "factory",
    key: "factory",
    width: 132,
    align: "left",
  },
  {
    title: "Danh sách tủ",
    dataIndex: "cabinetList",
    key: "cabinetList",
    align: "left",
  },
  {
    title: "Số điện đầu tháng",
    dataIndex: "openingReading",
    key: "openingReading",
    width: 212,
    align: "left",
    className: "yellow-cell",
  },
  {
    title: "Số điện hiện tại",
    dataIndex: "currentReading",
    key: "currentReading",
    width: 212,
    align: "left",
    className: "yellow-cell",
  },
  {
    title: "Điện năng tiêu thụ",
    dataIndex: "consumption",
    key: "consumption",
    width: 212,
    align: "left",
    className: "yellow-cell",
  },
];

export const dataSource2: TableProps<PowerTableRow>["dataSource"] = [
  {
    key: 1,
    factory: 1,
    cabinetList: "TĐ - 001, TĐ - 002, TĐ - 003",
    openingReading: 5134,
    currentReading: 5200,
    consumption: "66 kW",
  },
  {
    key: 2,
    factory: 2,
    cabinetList: "TĐ - 001, TĐ - 002, TĐ - 003",
    openingReading: 5134,
    currentReading: 5200,
    consumption: "66 kW",
  },
  {
    key: 3,
    factory: 3,
    cabinetList: "TĐ - 001, TĐ - 002, TĐ - 003",
    openingReading: 5134,
    currentReading: 5200,
    consumption: "66 kW",
  },
  {
    key: 4,
    factory: 4,
    cabinetList: "TĐ - 001, TĐ - 002, TĐ - 003",
    openingReading: 5134,
    currentReading: 5200,
    consumption: "66 kW",
  },
  {
    key: 5,
    factory: 5,
    cabinetList: "TĐ - 001, TĐ - 002, TĐ - 003",
    openingReading: 5134,
    currentReading: 5200,
    consumption: "66 kW",
  },
  {
    key: 6,
    factory: 6,
    cabinetList: "TĐ - 001, TĐ - 002, TĐ - 003",
    openingReading: 5134,
    currentReading: 5200,
    consumption: "66 kW",
  },
  {
    key: 7,
    factory: 7,
    cabinetList: "TĐ - 001, TĐ - 002, TĐ - 003",
    openingReading: 5134,
    currentReading: 5200,
    consumption: "66 kW",
  },
  {
    key: 8,
    factory: 8,
    cabinetList: "TĐ - 001, TĐ - 002, TĐ - 003",
    openingReading: 5134,
    currentReading: 5200,
    consumption: "66 kW",
  },
  {
    key: 9,
    factory: 9,
    cabinetList: "TĐ - 001, TĐ - 002, TĐ - 003",
    openingReading: 5134,
    currentReading: 5200,
    consumption: "66 kW",
  },
];
