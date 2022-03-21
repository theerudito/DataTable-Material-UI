import axios from "axios";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";

const columnas = [
	{
		name: "id",
		label: "ID",
		options: { filter: true, sort: true }
	},
	{
		name: "title",
		label: "PRODUCT",
		options: { filter: true, sort: true }
	},
	{
		name: "price",
		label: "PRICE",
		options: { filter: true, sort: true }
	}
];

export const DatatablesAxios = () => {
	const [product, setProduct] = useState([]);

	const ObtenerDatos = async () => {
		const url = "https://fakestoreapi.com/products";
		const res = await axios.get(url);
		const data = res.data;
		//console.log(data);
		setProduct(data);
	};

	useEffect(() => {
		ObtenerDatos();
	}, []);

	return (
		<div>
			<MUIDataTable
				title={"Lista de Productos"}
				data={product}
				columns={columnas}
			/>
		</div>
	);
};
