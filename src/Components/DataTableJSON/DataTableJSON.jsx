import MUIDataTable from "mui-datatables";
import users from "../DataTableJSON/users.json";

const columnas = [
	{
		name: "id",
		label: "ID",
		options: { filter: true, sort: true }
	},
	{
		name: "name",
		label: "NAME",
		options: { filter: true, sort: true }
	},
	{
		name: "email",
		label: "EMAIL",
		options: { filter: true, sort: true }
	}
];

export const DataTableJSONApp = () => {
	return (
		<MUIDataTable
			title={"Lista de Empleados"}
			data={users}
			columns={columnas}
		/>
	);
};
