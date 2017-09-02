import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const fadeAnimation = {
	transitionName: "basic",
	 transitionAppear: true,
	 transitionAppearTimeout: 300,
	 transitionEnter: true,
	 transitionEnterTimeout: 1000,
	 transitionLeave: true,
	 transitionLeaveTimeout: 1000,
}

class Posts extends React.Component{
	//set initial state.
	constructor(props) {
		super(props);
		this.state = {
			dummyDivs: 2
		}
	}

	handleAddingDivs(){
		var newCount = this.state.dummyDivs + 1;
		this.setState({dummyDivs: newCount});	
	}

	handleRemovingDivs(){
		var newCount = this.state.dummyDivs - 1 < 0 ? 0 : this.state.dummyDivs - 1;
		this.setState({dummyDivs: newCount});	
	}

	render() {
		// const items = this.state.dummyDivs.forEach((item, i) => {
		// 	return (
		// 		<div className = "iteratorDiv" key = {item.id} item = {item}>
		// 			{i}
		// 		</div>
		// 	)
		// })
		const items = [];
		for(let i = 0; i < this.state.dummyDivs; i++) {
			items.push(
					<div className = "iteratorDiv" key = {i}>
						{i + 1}
					</div>
			)
		}
	
		// Animaions can be done like this also
		// <CSSTransitionGroup
		// 			 transitionName = "basic"
		// 			 transitionAppear = {true}
		// 			 transitionAppearTimeout = {300}
		// 			 transitionEnter = {true}
		// 			 transitionEnterTimeout = {1000}
		// 			 transitionLeave = {true}
		// 			 transitionLeaveTimeout = {1000}
		// 			>
		// 				{items}
		// 			</CSSTransitionGroup>
		return (
			<div> 
				<h1>Posts</h1>
				<div># of divs: {this.state.dummyDivs}</div>
				<button onClick = {this.handleAddingDivs.bind(this)}>click to add divs</button>
				<button onClick = {this.handleRemovingDivs.bind(this)}>click to remove divs</button>
				<div>
					<CSSTransitionGroup{...fadeAnimation}>
						{items}
					</CSSTransitionGroup>
				</div>
				
			</div>
		)
	}
	componentWillUnmount() {
		console.log("in componentWillUnMount")
	}
}

export default Posts;