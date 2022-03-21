import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";
import MUIDataTable from "mui-datatables";
import React from "react";

const darkTheme = createTheme({
	palette: {
		mode: dark
	}
});

export class DataTableBasicApp extends React.Component {
	render() {
		const columns = ["Nombre", "Empresa", "Ciudad", "Estado"];
		const data = [
			["Joe James", "Test Corp", "Yonkers", "NY"],
			["John Walsh", "Test Corp", "Hartford", "CT"],
			["Bob Herm", "Test Corp", "Tampa", "FL"],
			["James Houston", "Test Corp", "Dallas", "TX"]
		];

		const options = { filterType: "checkbox" };
		return (
			<ThemeProvider theme={darkTheme}>
				<MUIDataTable
					title={"Lista de Empleados"}
					data={data}
					columns={columns}
					options={options}
				/>
			</ThemeProvider>
		);
	}
}
