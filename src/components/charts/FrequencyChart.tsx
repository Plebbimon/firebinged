import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { filterByMonth } from "../../utils/filters";
import { FireChartProps, ForestFire } from "../../types";
import { Stack, Title as Heading } from "@mantine/core";
import { months } from "../../consts";

const labels = months;

const frequencyChartData = (docData: ForestFire[]) => {
  const datasets = [
    {
      fill: true,
      label: "Fire Count",
      data: labels.map((month) => filterByMonth(docData, month).length),
      borderColor: "rgb(255,109,70)",
      backgroundColor: "rgba(255,109,70, 0.5)",
    },
  ];
  return { labels, datasets };
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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

function FrequencyChart({ data }: FireChartProps) {
  return (
    <Stack>
      <Heading order={3} transform="uppercase" color={"gray"} weight="bold">
        Fire Frequency by Month
      </Heading>
      <Line data={frequencyChartData(data)} width={400} height={400} />
    </Stack>
  );
}

export default FrequencyChart;
