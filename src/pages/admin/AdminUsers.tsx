import AdminLayout from "../../components/layout/AdminLayout";
import { dummyUserData } from "../../constant/sampleData";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Avatar, Box } from "@mui/material";

const AdminUsers = () => {
	const columns: GridColDef[] = [
		{ field: "userId", headerName: "User ID", width: 200 },
		{ field: "name", headerName: "Name", width: 200 },
		{
			field: "image",
			headerName: "Image",
			width: 200,
			renderCell: (params) => <Avatar alt={params.row.name} src={params.row.image} />,
		},
		{ field: "email", headerName: "Email", width: 200 },
	];

	return (
		<AdminLayout>
			<Box sx={{ p: 2 }}>
				<DataGrid
					sx={{ "& .MuiDataGrid-columnHeaders": { backgroundColor: "#fff" } }}
					rows={dummyUserData}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 10,
							},
						},
					}}
					getRowId={(row) => row.userId}
					pageSizeOptions={[10]}
					disableRowSelectionOnClick
				/>
			</Box>
		</AdminLayout>
	);
};

export default AdminUsers;
