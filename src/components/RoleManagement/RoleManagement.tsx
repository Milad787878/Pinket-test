import React, { FC } from 'react';

import './RoleManagement.css';

interface IProps {
	name: string;
	discription: string;
	setName: Function;
	setDiscription: Function;
	inputFlag: boolean;
	setInputFlag: Function;
}
const RoleManagement: FC<IProps> = ({ name, discription, setName, setDiscription, inputFlag }) => {
	let handleNameInputChange = (event:React.FormEvent<HTMLInputElement>): void => {
		let Name = event.currentTarget.value;
		setName(Name);
		console.log(name);

	}
	let handleDiscriptionInputChange = (evetn: React.FormEvent<HTMLTextAreaElement>): void => {
		let Discription = evetn.currentTarget.value;
		setDiscription(Discription);
		console.log(discription);
	}
	return (
		<div className="container-fluid role-management col-md-3 col-sm-12">
			<div className="row role-management__title">
				<h6>مدیریت نقش</h6>
			</div>
			<div className="row mt-4 role-management__options">
				<h6>عنوان: </h6>
				{inputFlag ? (
					<input type="text" value={name} required className="role-management__options__input" onChange={(event) => handleNameInputChange(event)}/>
				) : (
					<h6 className="role-management__options__button">{name}</h6>
				)}
			</div>
			<div className="row mt-4 mb-4 role-management__options">
				<h6>توضیحات: </h6>
				{inputFlag ? (
					<textarea value={discription} onChange={(event) => handleDiscriptionInputChange(event)}/>
				) : (
					<h6>{discription}</h6>
				)}
			</div>
		</div>
	);
};

export default RoleManagement;
