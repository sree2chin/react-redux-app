import React from 'react';
import ReactDOM from 'react-dom';
import dbjson from './db.json';

//Components                           
import Header from './components/header' // no need to put .js here, React already knows.
import NewsList from './components/news_list'

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
ReactDOM.render(<App/>, document.querySelector("#root"));