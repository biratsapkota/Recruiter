import React from 'react';
import PopularCompanies from './PopularCompanies'; 

class LandingPageContainer extends React.Component{
	render(){
		return (
			<div>
				<div class="searchwrapper">
					<div class="forsearch">
						<div class="searchinfo">
							Get access to millions of company reviews
						</div>

						<div class="searchhead">
							Find great places to work
						</div>

						<div class = "searchbars">
							<div class = "searchbar">
								<div>Company name or job title</div>
								<input type="Text"/>
							</div>

							<div class = "searchbar">
								<div>City,state,or zip(optional)</div>
								<input type="Text"/>
							</div>
							<div class = "searchbuts">
								<div class="searchbut">Find Companies</div>
								<div class="searchbutinfo">Do you want to search for salaries?</div>
							</div>
						</div>
					</div>		
				</div> 			 
	    		<PopularCompanies />
			</div>
		)
	}
}

export default LandingPageContainer;