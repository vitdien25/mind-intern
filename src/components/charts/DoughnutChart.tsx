import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart: ChartJS) {
    const { ctx, width, height } = chart;
    ctx.save();
    ctx.font = "bold 32px Inter";
    ctx.fillStyle = "#facc15";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("500", width / 2, height / 2);
    ctx.restore();
  },
};

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        data: [40, 21, 19, 13, 7],
        backgroundColor: [
          "#1e90ff",
          "#17c3c3",
          "#34c759",
          "#facc15",
          "#f43f5e",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "65%",
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold" as const,
          size: 16,
        },
        formatter: (value: number) => `${value}%`,
      },
    },
  };

  return (
    <div style={{ width: "80%", height: "80%" }}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default DoughnutChart;
