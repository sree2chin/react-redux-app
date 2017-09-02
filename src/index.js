import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import dbjson from './db.json';
import { CSSTransitionGroup } from 'react-transition-group';

//Components                           
import Header from './components/header' // no need to put .js here, React already knows.
import NewsList from './components/news_list'
import Posts from './components/posts'
import PostsItem from './components/posts_item'
import Profile from './components/profile'
import NotFound from './components/NotFound'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news: dbjson,
			filtered: dbjson
		}
	}

	handleFilterNews(keywords) {
	  let filtered = this.state.news.filter(function(item){
        return item.title.indexOf(keywords) > -1;
      })

      console.log(filtered)
      //{filtered} also works.
      this.setState({filtered:filtered})
	}

	render() {
		return(
			<div>
				<Header handleFilterNews = {keywords => this.handleFilterNews(keywords)}/>
				<NewsList news = {this.state.filtered }/>
			</div>
		)
	}
}

// this takes two arguments one is component and the other is dom element
              //. what we want to render and where to render.
ReactDOM.render(<BrowserRouter> 
	 				<div>
	 					<header>
				            <Link to="/">Home</Link> <br/>
				            <Link to="/posts">Posts</Link><br/>
				            <Link to="/profile">Profile</Link><br/>
				            <hr/>
				        </header>
				        <Switch>
					        <Route path="/posts/:id" component={PostsItem}></Route>
					        <Route path="/profile" component={Profile}></Route>
					        <Route path="/posts" component={Posts}></Route>
		 					<Route exact path = "/" component={App}></Route>
		 					<Route path = "*" component={NotFound}></Route>
						</Switch>
					</div>
	            </BrowserRouter>, document.querySelector("#root"));



