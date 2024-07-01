import { Button, Paper, TextField, Typography, Grid, Box } from "@mui/material";
import AdminLayout from "../../components/layout/AdminLayout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { DoughnutChart, LineChart } from "../../components/shared/Charts";
import { ChartData } from "chart.js";
const Dashboard = () => {
	const data: ChartData<"line"> = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [
			{
				label: "Messages",
				data: [123, 234, 345, 256, 267, 178, 289, 190, 201, 201, 212, 223],
				fill: false,
				borderColor: "rgba(75,192,192,1)",
				tension: 0.1,
			},
		],
	};
	const doughnutData: ChartData<"doughnut"> = {
		labels: ["Group", "Direct"],
		datasets: [
			{
				data: [50, 100],
				backgroundColor: ["#FF6384", "#36A2EB"],
				hoverBackgroundColor: ["#FF6384", "#36A2EB"],
			},
		],
	};

	return (
		<AdminLayout>
			<Paper
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					m: 2,
					p: 2,
				}}
			>
				<AdminPanelSettingsIcon />
				<TextField
					// label="Search"
					placeholder="Search..."
					variant="outlined"
					sx={{
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								border: "none",
							},
						},
						"& .MuiInputBase-root": {
							border: "none",
							outline: "none",
						},
					}}
					size="small"
				/>
				<Button variant="contained" sx={{ bgcolor: "black", color: "white", borderRadius: 50 }}>
					Search
				</Button>
			</Paper>
			<Paper sx={{ p: 2, m: 2 }}>
				<Typography variant="h4">Last Messages</Typography>
			</Paper>
			<Grid container>
				<Grid item xs={12} lg={8}>
					<Paper sx={{ p: 2, m: 2 }}>
						<Typography variant="h4">Users</Typography>
						<LineChart data={data} />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<Paper sx={{ p: 2, m: 2 }}>
						<Typography variant="h4">Personal Chat vs Group Chat</Typography>
						<DoughnutChart data={doughnutData} />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<Paper sx={styles.circleContainer}>
						<Typography variant="h4">Users</Typography>
						<Box sx={styles.circleChart}>200</Box>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<Paper sx={styles.circleContainer}>
						<Typography variant="h4">Groups</Typography>
						<Box sx={styles.circleChart}>15</Box>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<Paper sx={styles.circleContainer}>
						<Typography variant="h4">Messages</Typography>
						<Box sx={styles.circleChart}>3000</Box>
					</Paper>
				</Grid>
			</Grid>
		</AdminLayout>
	);
};

export default Dashboard;

const styles = {
	circleContainer: { p: 2, m: 2, display: "flex", flexDirection: "column" },
	circleChart: {
		width: 200,
		height: 200,
		borderRadius: 200,
		border: "2px solid black",
		display: "flex",
		alignItems: "center",
		margin: 1,
		justifyContent: "center",
		alignSelf: "center",
	},
};
