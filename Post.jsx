import React from 'react'
import "./post.css"
export default function Post({post}) {
    console.log(post)
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Safa kogalu</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">

                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! it's my first post</span>
                <img className='postImg' src="/assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className="likeIcon" />
                    <img src="assets/heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>

        </div>
    </div>
  )
}
