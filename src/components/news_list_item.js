import React from 'react';

const NewsListItem = (props) => {
	
	return (
		<div className = "news-list-item">
			<h3>
				{props.item.title}
			</h3>
			<div>
				{props.item.feed}
			</div>
		</div>
	)
}

export default NewsListItem;