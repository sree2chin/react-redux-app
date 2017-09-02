//import React,{ Component } from 'react';
import React from 'react';

// class PostsItem extends Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         console.log(this.props)
//         return <div>post item: {this.props.match.params.id}</div>
//     }
// }

const PostsItem = ({match}) => {
    return <div>Post item:{match.params.id} </div>
}

export default PostsItem;