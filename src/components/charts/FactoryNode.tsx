import { Handle, Position, type NodeProps, type Node } from "@xyflow/react";
import clsx from "clsx";
import styles from "./Chart.module.scss";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {
  MdOutlineWarningAmber,
  MdOutlineHomeWork,
  MdOutlineAdfScanner,
} from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { FcMoneyTransfer } from "react-icons/fc";

export type Metric = {
  energy: string;
  money: string;
};

export type FactoryNodeData = {
  title: string;
  status?: "normal" | "warning";
  type: "factory" | "device";
  today: Metric;
  month: Metric;
  year: Metric;
};

export type FactoryNodeType = Node<FactoryNodeData, "factory" | "device">;

const FactoryNode = ({ data }: NodeProps<FactoryNodeType>) => {
  return (
    <div
      className={clsx(styles["factory-node"], {
        [styles.warning]: data.status === "warning",
      })}
    >
      <div className={styles["node-title"]}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {data.type === "factory" ? (
            <MdOutlineHomeWork />
          ) : (
            <MdOutlineAdfScanner />
          )}
          {data.title}
        </span>
        <span className={styles.icon}>
          {data.status === "warning" ? (
            <MdOutlineWarningAmber />
          ) : (
            <IoMdInformationCircleOutline />
          )}
        </span>
      </div>

      <div className={styles["node-table"]}>
        <div className={styles["row"] + " " + styles["header"]}>
          <div />
          <div>Hôm nay</div>
          <div>Tháng 11</div>
          <div>Năm 2025</div>
          <div />
        </div>

        <div className={styles.row} style={{ color: "#FADB14" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiFillThunderbolt style={{ color: "#FFC107", fontSize: "14px" }} />
          </div>
          <div>{data.today.energy}</div>
          <div>{data.month.energy}</div>
          <div>{data.year.energy}</div>
          <div>Wh</div>
        </div>

        <div className={styles.row}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FcMoneyTransfer style={{ fontSize: "14px" }} />
          </div>
          <div>{data.today.money}</div>
          <div>{data.month.money}</div>
          <div>{data.year.money}</div>
          <div>VND</div>
        </div>
      </div>

      <Handle
        id="in-left"
        type="target"
        position={Position.Left}
        style={{ opacity: 0 }}
      />
      <Handle
        id="out-right"
        type="source"
        position={Position.Right}
        style={{ opacity: 0 }}
      />
      <Handle
        id="out-top"
        type="source"
        position={Position.Top}
        style={{ opacity: 0 }}
      />
      <Handle
        id="out-bottom"
        type="source"
        position={Position.Bottom}
        style={{ opacity: 0 }}
      />

      <Handle
        id="out-left"
        type="source"
        position={Position.Left}
        style={{ opacity: 0 }}
      />
    </div>
  );
};

export default FactoryNode;
