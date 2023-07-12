import React from "react";
import { connect } from "react-redux";

const FilterButton = ({ children, onClick, active }) => {
	return (
		<button onClick={onClick} disabled={active}>
			{children}
		</button>
	);
};

const mapStateToProps = (state, ownProps) => ({
	active: state.filter === ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (filter) => dispatch({
        type: "FILTER_TODO",
        filter: ownProps.filter
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
