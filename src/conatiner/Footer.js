import React from "react";
import FilterButton from "../components/FilterButton";
import { AVAILABLE_FILTERS } from "../actions/todo.action";

const Footer = () => {
	return (
		<div>
			<FilterButton filter={AVAILABLE_FILTERS.SHOW_ALL}>ALL</FilterButton>
			<FilterButton filter={AVAILABLE_FILTERS.SHOW_ACTIVE}>
				Active
			</FilterButton>
			<FilterButton filter={AVAILABLE_FILTERS.SHOW_COMPLETE}>
				Complete
			</FilterButton>
		</div>
	);
};

export default Footer;
