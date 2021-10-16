import React from 'react'
import image from '../images/bts.jpg'
import comment from '../images/comment.png'
import retweet from '../images/retweet.png'
import like from '../images/heart.png'
import './Post.css'

function Post() {
    return <div className="post">
        <p><strong>Eric</strong> @ericyangg</p>
        <p>i got bts tickets!!</p>
        <img
            className='image' 
            src={image}
            alt='bts tickets'
        />
        <div className="reaction-bar">
            <img 
                className='reaction'
                src={comment} 
                alt="comment"
            />
            <img 
                className='reaction'
                src={retweet} 
                alt="comment"
            />
            <img 
                className='reaction'
                src={like} 
                alt="like"
            />
        </div>
    </div>
    
}

export default Post;