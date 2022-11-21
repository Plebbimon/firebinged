import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {queryDocuments} from "../utils/queries";

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => Math.floor(Math.random() * 101)),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => Math.floor(Math.random() * 101)),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
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
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

function BarChart() {
    const [docData, loading, error] = useCollectionData(queryDocuments())

    if (error || !docData) {
        return <span>Error: {JSON.stringify(error)}</span>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    console.table(docData)

    return (
            <Bar
                data={data}
                 width={400}
                 height={400}/>
    )
}

export default BarChart