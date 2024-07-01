import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ChartData,
	ChartOptions,
	ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
);
import { Line, Doughnut } from "react-chartjs-2";

const lineOptions: ChartOptions<"line"> = {
	responsive: true,

	plugins: {
		legend: {
			display: true,
			position: "top",
		},
	},
	scales: {
		x: {
			title: {
				display: true,
				text: "Months",
			},
		},
		y: {
			title: {
				display: true,
				text: "Messages",
			},
		},
	},
};

const doughnutOptions: ChartOptions<"doughnut"> = {
	responsive: true,

	plugins: {
		legend: {
			display: true,
			position: "top",
		},
	},
};
const LineChart = ({ data }: { data: ChartData<"line"> }) => (
	<Line data={data} options={lineOptions} />
);

const DoughnutChart = ({ data }: { data: ChartData<"doughnut"> }) => (
	<Doughnut data={data} options={doughnutOptions} />
);

export { LineChart, DoughnutChart };
