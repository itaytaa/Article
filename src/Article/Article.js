import React, { Component } from 'react';
import './Article.css';
import CommentList from './CommentList/CommentList';


export default class Article extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="article-frame">
                <h1>{this.props.title}  </h1>
                <img src={this.props.url} />
                <p>{this.props.content}</p>
              <CommentList/>
            </div>
        );
    }
}





