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

	//set initial state.
	constructor(props) {
		super(props);
		this.state = {
			keywords: ""
		}
	}

	//Before rendering
	componentWillMount(){
		console.log("in componentWillMount")
	}

	componentWillUpdate() {
		console.log("Before updating the state");
	}

	componentDidUpdate() {
		console.log("After updating the state");
	}
	//gets called when this component gets new props
	componentWillReceiveProps() {
		console.log("BEFORE RECEIVING PROPS");
	}

	// we can decide whether to update state or not, by default this returns true.
	// we can access this.state here 
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	handleInputChange(event) {
		this.setState({keywords: event.target.value});
		this.props.handleFilterNews(event.target.value)
		console.log(this.state);
	}

	//RENDER JSX
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

	//AFTER COMPONENT IS RENDERED
	componentDidMount() {
		console.log("in didMount");
	}

	componentWillUnMount(){
		console.log("in componentWillUnMount")
	}

}

export default Header;


