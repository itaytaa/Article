import React, { Component } from 'react';
import './Comment.css'

export default class Comment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="comment">
                <div className="comment-head"><span><img src={this.props.avatar} /><span className="name">{this.props.author} </span></span><span>{this.props.date}</span></div>
                <p>{this.props.content}</p>
            </div>
        );
    }
}
