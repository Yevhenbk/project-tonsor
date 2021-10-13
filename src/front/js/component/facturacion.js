import React from "react";
import "../../styles/facturacion.scss";
import Table from "react-bootstrap/Table";

export const Facturacion = () => {
	return (
		<Table className="table-invoice" striped bordered hover>
			<thead>
				<tr>
					<th>Nº de factura</th>
					<th>Cliente</th>
					<th>Servicios</th>
					<th>€</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>0001</td>
					<td>Mark</td>
					<td>Otto</td>
					<td>20€</td>
				</tr>
				<tr>
					<td>0002</td>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>12€</td>
				</tr>
				<tr>
					<td>0003</td>
					<td>Larry</td>
					<td>Bird</td>
					<td> 50€</td>
				</tr>
				<tr>
					<td />
					<td />
					<td> total</td>
					<td> 82€</td>
				</tr>
			</tbody>
		</Table>
	);
};
