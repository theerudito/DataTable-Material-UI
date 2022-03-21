import { DatatablesAxios } from "./Components/DataTable-Axios/DataTableAxios";
import { DataTableBasicApp } from "./Components/DataTable-Basica/DataTableBasic";
import { DataTableJSONApp } from "./Components/DataTableJSON/DataTableJSON";
import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<h1>Data Table material UI</h1>
			{/* <DataTableBasicApp /> */}
			{/* <DataTableJSONApp /> */}
			<DatatablesAxios />
		</div>
	);
}
