import React, { FC } from 'react';
import './Header.css';

interface customers {
	name: string;
	discription: string;
}

interface IProps {
	roleFlag: boolean;
	setRoleFlag: Function;
	createRoleFlag: boolean;
	setCreateRoleFlag: Function;
	setInputFlag: Function;
	editFlag: boolean;
	backFlag: boolean;
	setBackFlag: Function;
	storeFlag: boolean;
	setStoreFlag: Function;
	setEditFlag: Function;
	inputFlag: boolean;
	name: string;
	discription: string;
	setNameplus: Function;
	setDiscriptionplus: Function;
	customers: customers[];
	addData: Function;
	setName: Function;
	setDiscription: Function;
	shouldBeEdit: boolean;
	setShouldBeEdite: Function;
	shouldBeEditName: string;
	shouldBeEditDiscription: string;
	setCustomer: Function;
}

const Header: FC<IProps> = ({setRoleFlag,
							roleFlag,
							createRoleFlag,
							setCreateRoleFlag,
							setInputFlag,
							editFlag,
							backFlag,
							setBackFlag,
							storeFlag,
							setStoreFlag,
							setEditFlag,
							name,
							customers,
							setCustomer,
							discription,
							addData,
							setName,
							setDiscription,
							shouldBeEdit,
							setShouldBeEdite,
							shouldBeEditName,
							shouldBeEditDiscription})=> {
	const handleEditFlag = () => {
		setInputFlag();
		setBackFlag(true);
		setStoreFlag(true);
		setEditFlag()
	}
	const handleBackButton = () => {
		setRoleFlag(true);
		setCreateRoleFlag(true);
		setBackFlag(!backFlag);
		setStoreFlag(!storeFlag);
		setEditFlag(!editFlag);
		setInputFlag();
		setName('');
		setDiscription('')
	}
	const handleCreateRole = () => {
		setName('');
		setDiscription('');
		setRoleFlag(false);
		setCreateRoleFlag(false);
		setRoleFlag(!roleFlag);
		setInputFlag();
		setBackFlag(true);
		setStoreFlag();
		setShouldBeEdite(false);
	}
	const handleStoreData = (newName: string, newDiscription: string) => {
		if (shouldBeEdit) {
			let found = customers.find(customer => (customer.name === shouldBeEditName && customer.discription === shouldBeEditDiscription));
			customers.map((customer: customers) => {
				if (customer === found) {
					customer.name = newName;
					customer.discription = newDiscription;
					setCustomer(customers)
					console.log(customers);
				}
			})
		} else {
			const newObj = {name: newName, discription: newDiscription};
			addData(newObj);
			console.log(newObj)
		}
		setName('');
		setDiscription('');
	}
	return (
		<div className="container-fluid">
			<div className="row Navbar">
				<div>
					<h5>مدیریت نقش‌ها</h5>
				</div>
				<div className="Navbar__group-buttons">
					{storeFlag ? <button className="Navbar__group-buttons__data-store" onClick={()=>handleStoreData(name, discription)} >ذخیره</button> : null}
					{editFlag ? <button className="Navbar__group-buttons__data-edit" onClick={() => handleEditFlag()}>ویرایش</button> : undefined}
					{backFlag ? <button onClick={() => handleBackButton()}>بازگشت</button> : undefined}
					{createRoleFlag ? <button className="Navbar__group-buttons__create-role" onClick={() => handleCreateRole()} >ایجاد نقش</button> : null}
				</div>
			</div>
		</div>
	);
};

export default Header;
