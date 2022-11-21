import {Bar} from "react-chartjs-2";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {queryDocuments} from "../utils/queries";
import {filterByMonth, filterLowestTemp} from "../utils/filters";
import {ForestFire} from "../types";
import {Stack, Title as Heading} from '@mantine/core';
import IncidentTable from "./IncidentTable";

//create a list called labels with the months
const labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const frequencyChartData = (docData: ForestFire[]) => {
    const datasets = [
        {
            fill: true,
            label: 'Lowest Temp',
            data: labels.map((month) => filterLowestTemp(docData, month)),
            borderColor: 'rgb(255,109,70)',
            backgroundColor: 'rgba(255,109,70, 0.5)',
        }
    ]
    return {labels, datasets}
}


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
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

function LowestTempChart() {
    const [docData, loading, error] = useCollectionData(queryDocuments())

    if (error) {
        return <span>Error: {JSON.stringify(error)}</span>
    }

    if (loading  || !docData) {
        return <div>Loading...</div>
    }

    const newData = docData as ForestFire[]
    return (
        <Stack>
            <Heading order={3}>
                Lowest Temperature per Month
            </Heading>
            <Bar
                data={frequencyChartData(newData)}
                width={400}
                height={400}/>
        </Stack>
    )
}

export default LowestTempChart