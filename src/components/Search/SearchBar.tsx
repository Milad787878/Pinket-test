import React, { FC } from 'react';
import './SearchBar.css';

interface customers {
	name: string;
	discription: string;
}

interface props {
	search: string;
	setSearch: Function;
	customers: customers[];
	setFilteredCustomers: Function;
}

const SearchBar: FC<props> = ({search, setSearch, customers, setFilteredCustomers}) => {
	const handleSearchBar = (event: React.FormEvent<HTMLInputElement>) => {
		setSearch(event.currentTarget.value)
	}
	const handleSearch = () => {
		const updatedCustomer = customers.filter(item => item.name.includes(search));
		setFilteredCustomers(updatedCustomer);
	}
	return (
		<div className="container-fluid col-md-8 col-sm-11 searchbar">
			<div className="row Searchbar__content">
				<div>
					<input
						type="text"
						placeholder="عنوان"
						width="5%"
						value={search}
						onChange={event => handleSearchBar(event)}
					/>
				</div>
				<div className="searchbar__content__buttons">
					<button className="searchbar_content_buttons__close" onClick={() => setSearch('')} >&times;</button>
					<button onClick={handleSearch}>search</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
