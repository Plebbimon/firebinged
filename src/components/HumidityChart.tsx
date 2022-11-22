import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import {
  filterAverageHumidity,
  filterAverageTemp,
  filterHighestHumidity,
  filterHighestTemp,
  filterLowestHumidity,
  filterLowestTemp,
} from "../utils/filters";
import { ForestFire, HumidityChartProps } from "../types";
import { Stack, Title as Heading } from "@mantine/core";
import { months } from "../consts";

const labels = months;
const frequencyChartData = (docData: ForestFire[]) => {
  const datasets = [
    {
      label: "Min",
      data: labels.map((month) => filterLowestHumidity(docData, month)),
      backgroundColor: "rgba(255,202,70,0.58)",
    },
    {
      label: "Avg",
      data: labels.map((month) => filterAverageHumidity(docData, month)),
      backgroundColor: "rgba(255,109,70, 0.5)",
    },
    {
      label: "Max",
      data: labels.map((month) => filterHighestHumidity(docData, month)),

      backgroundColor: "rgba(180,0,0,0.5)",
    },
  ];
  return { labels, datasets };
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

function HumidityChart({ data }: HumidityChartProps) {
  return (
    <Stack>
      <Heading order={3}>Humidity by Month</Heading>
      <Bar data={frequencyChartData(data)} width={400} height={400} />
    </Stack>
  );
}

export default HumidityChart;
