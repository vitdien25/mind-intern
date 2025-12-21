import FactoryNode from "./FactoryNode";
import {
  type Edge,
  MarkerType,
  ReactFlow,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

const nodeTypes = {
  factory: FactoryNode,
  device: FactoryNode,
};
const initNodes = [
  {
    id: "factory-1",
    type: "factory",
    position: { x: 0, y: 0 },
    data: {
      title: "Nhà máy 1",
      type: "factory",
      today: { energy: "21 k", money: "200.000" },
      month: { energy: "990.21 k", money: "100.000 k" },
      year: { energy: "36 M", money: "100 B" },
    },
  },
  {
    id: "factory-2",
    type: "factory",
    position: { x: 450, y: 0 },
    data: {
      title: "Nhà máy 2",
      type: "factory",
      today: { energy: "21 k", money: "200.000" },
      month: { energy: "990.21 k", money: "100.000 k" },
      year: { energy: "36 M", money: "100 B" },
    },
  },
  {
    id: "factory-warning",
    type: "factory",
    position: { x: 450, y: 200 },
    data: {
      title: "Nhà máy 1",
      type: "factory",
      status: "warning",
      today: { energy: "21 k", money: "200.000" },
      month: { energy: "990.21 k", money: "100.000 k" },
      year: { energy: "36 M", money: "100 B" },
    },
  },
  {
    id: "device-1",
    type: "device",
    position: { x: 900, y: 200 },
    data: {
      title: "Thiết bị 1",
      type: "device",
      today: { energy: "21 k", money: "200.000" },
      month: { energy: "990.21 k", money: "100.000 k" },
      year: { energy: "36 M", money: "100 B" },
    },
  },
  {
    id: "device-2",
    type: "device",
    position: { x: 750, y: 400 },
    data: {
      title: "Thiết bị 2",
      type: "device",
      today: { energy: "21 k", money: "200.000" },
      month: { energy: "990.21 k", money: "100.000 k" },
      year: { energy: "36 M", money: "100 B" },
    },
  },
];
const initEdges: Edge[] = [
  {
    id: "e1",
    source: "factory-1",
    sourceHandle: "out-right",
    target: "factory-2",
    targetHandle: "in-left",
    type: "step",
    style: {
      stroke: "#fff",
      strokeDasharray: "6 6",
      strokeWidth: 3,
    },
    markerEnd: {
      type: MarkerType.Arrow,
      color: "#fff",
    },
  },
  {
    id: "e2",
    source: "factory-1",
    sourceHandle: "out-right",
    target: "factory-warning",
    targetHandle: "in-left",
    type: "step",
    style: {
      stroke: "#fff",
      strokeDasharray: "6 6",
      strokeWidth: 3,
    },
    markerEnd: {
      type: MarkerType.Arrow,
      color: "#fff",
    },
  },
  {
    id: "e3",
    source: "factory-warning",
    sourceHandle: "out-right",
    target: "device-1",
    targetHandle: "in-left",
    type: "step",
    style: {
      stroke: "#fff",
      strokeDasharray: "6 6",
      strokeWidth: 3,
    },
    markerEnd: {
      type: MarkerType.Arrow,
      color: "#fff",
    },
  },
  {
    id: "e4",
    source: "factory-warning",
    sourceHandle: "out-bottom",
    target: "device-2",
    targetHandle: "in-left",
    type: "step",
    style: {
      stroke: "#fff",
      strokeDasharray: "6 6",
      strokeWidth: 3,
    },
    markerEnd: {
      type: MarkerType.Arrow,
      color: "#fff",
    },
  },
];

const FlowChart = () => {
  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, , onEdgesChange] = useEdgesState(initEdges);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        elementsSelectable={true}
        nodesDraggable={true}
        panOnDrag={true}
        zoomOnScroll={true}
      />
    </div>
  );
};

export default FlowChart;
