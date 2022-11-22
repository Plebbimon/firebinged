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
  filterAverageTemp,
  filterHighestTemp,
  filterLowestTemp,
} from "../utils/filters";
import { ForestFire, LowestTempChartProps } from "../types";
import { Stack, Title as Heading } from "@mantine/core";
import { months } from "../consts";

const labels = months;
const frequencyChartData = (docData: ForestFire[]) => {
  const datasets = [
    {
      label: "Min",
      data: labels.map((month) => filterLowestTemp(docData, month)),
      backgroundColor: "rgba(255,202,70,0.58)",
    },
    {
      label: "Avg",
      data: labels.map((month) => filterAverageTemp(docData, month)),
      backgroundColor: "rgba(255,109,70, 0.5)",
    },
    {
      label: "Max",
      data: labels.map((month) => filterHighestTemp(docData, month)),

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

function LowestTempChart({ data }: LowestTempChartProps) {
  return (
    <Stack>
      <Heading order={3} transform="uppercase" color={"gray"} weight="bold">
        Temperatures per Month
      </Heading>
      <Bar data={frequencyChartData(data)} width={400} height={400} />
    </Stack>
  );
}

export default LowestTempChart;
