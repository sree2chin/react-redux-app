import React from 'react';
// import React,{ Component} form 'react'      //es6
/*Two type of components
 functional: these doesn't what's happending with the rest of components.
             It just takes some arguments and return something. (stateless, no state here)
 Class: These have the ability to know what's happening with the rest of the application.            
*/

//Functional component.
// const Header = () => {
// 	return <div> Header </div>
// }

// this class is from es6, to bind this to react use extends.
//class Header extends Component{           //ea6
class Header extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			keywords: ""
		}
	}

	handleInputChange(event) {
		this.setState({keywords: event.target.value});
		this.props.handleFilterNews(event.target.value)
		console.log(this.state);
	}

	render() {
		return (
			<header> 
				<div className = "logo" 
				     onClick={()=>{console.log("Clicked")}}> 
					Logo
				</div>
				<input type = "text" onChange={this.handleInputChange.bind(this)}/>
			</header>
		)
	}
}

export default Header;