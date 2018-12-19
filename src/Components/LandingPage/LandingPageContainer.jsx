import React from 'react';
import PopularCompanies from './PopularCompanies'; 

class LandingPageContainer extends React.Component{
  componentWillMount(){
    
  }
	render(){
		return (
			<div>
  			 Hero Part <br/>
         <PopularCompanies />

			</div>
		)
	}
}

export default LandingPageContainer;