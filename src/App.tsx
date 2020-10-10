import React, { useState } from 'react';
import './App.css';
import Data from './Data.json';

import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';
import TableCustomer from './components/Table/TableCustomer';
import RoleManagement from './components/RoleManagement/RoleManagement';

interface customers {
	name: string;
	discription: string
}

function App() {
	const [roleFlag, setRoleFlag] = useState<boolean>(false); // flag for show and hide RoleManagement component
	const [inputFlag, setInputFlag] = useState<boolean>(false); // flag for show and hide inputs of inputs in RoleManagement component
	const [createRoleFlag, setCreateRoleFlag] = useState<boolean>(true); // flag for show and hide create Role button
	const [editFlag, setEditFlag] = useState<boolean>(false); // for show and hide edit button
	const [backFlag, setBackFlag] = useState<boolean>(false);
	const [storeFlag, setStoreFlag] = useState<boolean>(false);
	const [name, setName] = useState<string>('');// for name that has to be saved
	const [discription, setDiscription] = useState<string>(''); // for discription field that has to be saved
	const [customers, setCustomer] = useState<customers[]>(Data) // type ????
	const [search, setSearch] = useState('');
	const [filteredCustomers, setFilterCustomers] = useState([]);
	const [shouldBeEdit, setShouldBeEdite] = useState<boolean>(false);
	const [shouldBeEditName, setShouldBeEditName] = useState<string>('');
	const [shouldBeEditDiscription, setShouldBeEditDiscription] = useState<string>('');
	const handleCustomer = (name:string, discription:string) => {
		setName(name);
		setDiscription(discription)
	}
	const handleName = (newName:string) => {
		setName(newName)
	}
	const handleDiscription = (newDiscription:string) => {
		setDiscription(newDiscription)
	}
	const addData = (data: customers) => {
		customers.push(data)
		setName('');
		setDiscription('')
	}
	return (
		<div>
			<Header
				customers={customers}
				setCustomer={(updatedCustomers: customers[]) => setCustomer(updatedCustomers)}
				name={name}
				addData={(data: any) => addData(data)}
				discription={discription}
				setNameplus={(name: string) => setName(name)}
				setDiscriptionplus={(discription: string) => setDiscription(discription)}
				setRoleFlag={() => setRoleFlag(!roleFlag)}
				roleFlag={roleFlag}
				createRoleFlag={createRoleFlag}
				setCreateRoleFlag={setCreateRoleFlag}
				setInputFlag={() => setInputFlag(!inputFlag)}
				editFlag={editFlag}
				backFlag={backFlag}
				setBackFlag={() => setBackFlag(!backFlag)}
				storeFlag={storeFlag}
				setStoreFlag={() => setStoreFlag(!storeFlag)}
				setEditFlag={() => setEditFlag(!editFlag)}
				inputFlag={inputFlag}
				setName={() => setName('')}
				setDiscription={() => setDiscription('')}
				shouldBeEdit={shouldBeEdit}
				setShouldBeEdite={(flag: boolean) => setShouldBeEdite(flag)}
				shouldBeEditName={shouldBeEditName}
				shouldBeEditDiscription={shouldBeEditDiscription}
			/>
			<SearchBar
				search={search}
				setSearch={(search: string) => setSearch(search)}
				customers={customers}
				setFilteredCustomers={(filteredCustomers: any) => setFilterCustomers(filteredCustomers)}
			/>
			<TableCustomer
				clickeOnCustomer={handleCustomer}
				customers={customers}
				setRoleFlag={() => setRoleFlag(!false)}
				setCreateRoleFlag={() => setCreateRoleFlag(true)}
				setEditFlag={() => setEditFlag(true)}
				roleFlag={roleFlag}
				setName={(name: string) => setName(name)}
				setDiscription={(name: string) => setDiscription(name)}
				filteredCustomers={filteredCustomers}
				setShouldBeEdite={(flag: boolean) => setShouldBeEdite(flag)}
				setShouldBeEditName={(name: string) => setShouldBeEditName(name)}
				setShouldBeEditDiscription={(discription: string) => setShouldBeEditDiscription(discription)}
			/>
			{(roleFlag || inputFlag) ? <RoleManagement
				name={name}
				discription={discription}
				setName={handleName}
				setDiscription={handleDiscription}
				inputFlag={inputFlag}
				setInputFlag={() => setInputFlag(!inputFlag)}
			/> : null}
		</div>
	);
}

export default App;
