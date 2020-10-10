import React, { FC } from 'react';
import './TableCustomer.css';

interface customers {
	name: string;
	discription: string;
}
interface IProps {
	clickeOnCustomer: Function;
	customers: customers[];
	setRoleFlag: Function;
	setCreateRoleFlag: Function;
	setEditFlag: Function;
	roleFlag: boolean;
	setName: Function;
	setDiscription: Function;
	filteredCustomers: customers[];
	setShouldBeEdite: Function;
	setShouldBeEditName: Function;
	setShouldBeEditDiscription: Function
}

const TableCustomer: FC<IProps> = ({customers, setRoleFlag, setEditFlag, setName, setDiscription, filteredCustomers, setShouldBeEdite, setShouldBeEditName, setShouldBeEditDiscription}) => {
	const newCustomers = (filteredCustomers.length !== 0) ? filteredCustomers : customers;
	const handleTableRowCLick = (customer: customers) => {
		console.log(customers);
		setShouldBeEdite(true);
		setShouldBeEditName(customer.name);
		setShouldBeEditDiscription(customer.discription);
		setName(customer.name);
		setDiscription(customer.discription);
		setRoleFlag();
		setEditFlag();
	}

	return (
		<div className="container-fluid col-md-8 col-sm-11 table-body">
			<table className="container tableContent">
				<tr>
					<td>نام</td>
					<td>توضیحات</td>
				</tr>
				{newCustomers.map((customer, index) => (
					<tr key={index.toString()} onClick={() => handleTableRowCLick(customer)}>
						<td>{customer.name}</td>
						<td>{customer.discription}</td>
					</tr>
				))}
			</table>
		</div>
	);
};

export default TableCustomer;
