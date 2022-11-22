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

const windChartData = (docData: ForestFire[]) => {
  const datasets = [
    {
      label: "Wind average km/h",
      data: months.map((month) =>
        filterAverageVariable(docData, "wind", month)
      ),
      backgroundColor: "rgba(110,224,255,0.58)",
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

function WindChart({ data }: FireChartProps) {
  return (
    <Stack>
      <Heading order={3} transform="uppercase" color={"gray"} weight="bold">
        Windforce
      </Heading>
      <Line data={windChartData(data)} width={400} height={400} />
    </Stack>
  );
}

export default WindChart;
