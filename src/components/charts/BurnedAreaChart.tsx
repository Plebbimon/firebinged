import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { filterAverageVariable } from "../../utils/filters";
import { FireChartProps, ForestFire } from "../../types";
import { Stack, Title as Heading } from "@mantine/core";
import { months } from "../../consts";

const burnedAreaChartData = (docData: ForestFire[]) => {
  const datasets = [
    {
      fill: true,
      label: "Area",
      data: months.map((month) =>
        filterAverageVariable(docData, "area", month)
      ),
      backgroundColor: "rgba(255,213,128,0.49)",
      borderColor: "rgba(255,213,128,0.49)",
    },
  ];
  const labels = months;
  return { labels, datasets };
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

function BurnedAreaChart({ data }: FireChartProps) {
  return (
    <Stack>
      <Heading order={3} transform="uppercase" color={"gray"} weight="bold">
        Area burned
      </Heading>
      <Line data={burnedAreaChartData(data)} width={400} height={400} />
    </Stack>
  );
}

export default BurnedAreaChart;
