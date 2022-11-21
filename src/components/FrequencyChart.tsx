import {Line} from "react-chartjs-2";
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
} from 'chart.js';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {queryDocuments} from "../utils/queries";
import {filterByMonth, filterLowestTemp} from "../utils/filters";
import {ForestFire} from "../types";
import {Stack, Title as Heading} from '@mantine/core';
import {months} from "../consts";

const labels = months

const frequencyChartData = (docData: ForestFire[]) => {
    const datasets = [
        {
            fill: true,
            label: 'Fire Count',
            data: labels.map((month) => filterByMonth(docData, month).length),
            borderColor: 'rgb(255,109,70)',
            backgroundColor: 'rgba(255,109,70, 0.5)',
        }
    ]
    return {labels, datasets}
}


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
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

function FrequencyChart() {

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
                Fire Frequency by Month
            </Heading>
            <Line
                data={frequencyChartData(newData)}
                width={400}
                height={400}/>
        </Stack>
    )
}

export default FrequencyChart