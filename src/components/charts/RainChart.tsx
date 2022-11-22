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
  filterAverageVariable,
  filterHighestVariable,
  filterLowestVariable,
} from "../../utils/filters";
import { FireChartProps, ForestFire } from "../../types";
import { Stack, Title as Heading } from "@mantine/core";
import { months } from "../../consts";

const labels = months;
const frequencyChartData = (docData: ForestFire[]) => {
  const datasets = [
    {
      label: "Min",
      data: labels.map((month) => filterLowestVariable(docData, "rain", month)),
      backgroundColor: "rgba(119,194,255,0.58)",
    },
    {
      label: "Avg",
      data: labels.map((month) =>
        filterAverageVariable(docData, "rain", month)
      ),
      backgroundColor: "rgba(56,127,255,0.5)",
    },
    {
      label: "Max",
      data: labels.map((month) =>
        filterHighestVariable(docData, "rain", month)
      ),

      backgroundColor: "rgba(0,73,159,0.5)",
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

function RainChart({ data }: FireChartProps) {
  return (
    <Stack>
      <Heading order={3} transform="uppercase" color={"gray"} weight="bold">
        Rainfall
      </Heading>
      <Bar data={frequencyChartData(data)} width={400} height={400} />
    </Stack>
  );
}

export default RainChart;
