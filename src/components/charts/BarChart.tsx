import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

import { Bar } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

const labels: string[] = [
  "1/2025",
  "2/2025",
  "3/2025",
  "4/2025",
  "5/2025",
  "6/2025",
];

const data: ChartData<"bar", number[], string> = {
  labels,
  datasets: [
    {
      data: [80, 42, 22, 45, 18, 100],
      backgroundColor: "#39b54a",
      barThickness: 64,
      datalabels: {
        display: false,
      },
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.raw} MWh`,
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 120,
      ticks: {
        stepSize: 20,
        callback: (value) => `${value} MWh`,
        color: "#fff",
        padding: 20,
      },
      grid: {
        display: true,
        color: (context) => {
          if (context.tick.value === 120) {
            return "transparent";
          }
          return "#fff";
        },
        lineWidth: 1,
      },
    },
    x: {
      ticks: {
        color: "#fff",
      },
      grid: {
        display: true,
        color: "#fff",
        lineWidth: 1,
      },
    },
  },
};

const BarChart = () => {
  return (
    <div style={{ width: "100%", height: "80%", padding: "0px 14px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
