import React from 'react';
import CompanyInfoBox from './CompanyInfoBox'; 

class LandingPageContainer extends React.Component{
	render(){
		const popular_companies = [
			{
				id: 1,
				company_name: "Kohl's",
				rating: 4,
				number_of_reviews: 16390,
				image_url: "some image url",	
			},
			{
				id: 2,
				company_name: "US Marine Corps",
				rating: 4,
				number_of_reviews: 16390,
				image_url: "some image url",	
			},
			{
				id: 1,
				company_name: "Kohl's",
				rating: 4,
				number_of_reviews: 16390,
				image_url: "some image url",	
			},{
				id: 1,
				company_name: "Kohl's",
				rating: 4,
				number_of_reviews: 16390,
				image_url: "some image url",	
			},{
				id: 1,
				company_name: "Kohl's",
				rating: 4,
				number_of_reviews: 16390,
				image_url: "some image url",	
			},{
				id: 1,
				company_name: "Kohl's",
				rating: 4,
				number_of_reviews: 16390,
				image_url: "some image url",	
			},{
				id: 1,
				company_name: "Kohl's",
				rating: 4,
				number_of_reviews: 16390,
				image_url: "some image url",	
			},{
				id: 1,
				company_name: "Kohl's",
				rating: 4,
				number_of_reviews: 16390,
				image_url: "some image url",	
			},{
				id: 1,
				company_name: "Kohl's",
				rating: 4,
				number_of_reviews: 16390,
				image_url: "some image url",	
			},
		]
		let popular_companies_display = popular_companies.map(company => {
			return (
				<CompanyInfoBox 
					name={company.company_name}
					image_url={company.image_url}
					rating={company.rating}
					number_of_reviews={company.number_of_reviews}
				/>
			)
		})
		return (
			<div>
				{popular_companies_display}
			</div>
		)
	}
}

export default LandingPageContainer;