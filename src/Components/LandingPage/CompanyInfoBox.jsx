import React from "react";

const CompanyInfoBox = (props) => (
	<div style ={{border: '1px solid red', padding: 10, width: '300px', margin: 'auto'}}>
		{props.name} <br />
		{props.image_url} <br />
		{props.rating} <br />
		{props.number_of_reviews} <br />
	</div>
)

export default CompanyInfoBox;