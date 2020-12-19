import React, { Component } from 'react';
import Comment from './Comment/Comment';
import './CommentList.css';



export default class CommentList extends Component {
    render() {
        return (
            <div className="comments-list">

                <Comment avatar="https://www.w3schools.com/howto/img_avatar.png" author="Yoram Gaon" date="19.12.20" content="Great article!, I agree with most of what was said in it." />
                <Comment avatar="https://www.w3schools.com/howto/img_avatar.png"author="Shulamit Aloni" date="10.12.20" content="I didnt understand a thing :(" />
                <Comment avatar="https://www.w3schools.com/howto/img_avatar.png"author="Yuval Hamebulbal" date="4.12.20" content="I like the picture in the article, and that's about it ..." />



            </div>
        );
    }
}
