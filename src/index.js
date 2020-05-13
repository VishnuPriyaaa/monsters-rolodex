import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import Monster from './Components/Monsters';
import Display from './Components/display';


const testTweet = {
    message: "Something about cats",
    gravatar: 'xyz',
    author:{
        name: "IAMA cat person",
        handle: "catperson"
        
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
}


function Tweet({tweet}){
    return(
        <div>
            <Monster />
        </div>
        // <div className="tweet">
        //     <Avatar hash={tweet.gravatar}/>
        //     <div className="content">
        //         <Author author={tweet.author}/><Time time={tweet.timestamp} />
        //         <Message message={tweet.message}/>
        //     </div>
        //     <div className="buttons">
        //     <ReplyButton/> <br/><br />
        //     <RetweetButton count={tweet.retweets}/> <br /><br />
        //     <LikeButton count={tweet.likes}/> <br /><br />
        //     <MoreOptionsButton/> <br />
        //     </div>
        //     Tweetttttt !!!
        // </div>
    );
}

function Avatar({hash}){
    const url=`http://www.gravatar.com/avatar/${hash}`;
   return(
       <img src= {url}
        className="avatar"
        alt ="avatar"/>
   );
}


function Message({message}){
    return(
        <div className="message">
            {message}
        </div>
    );
}

Message.propTypes = {
    message: PropTypes.string
};


function Author({author}){
    const {name, handle} = author;
    return(
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
}

Author.propTypes = {
    author: PropTypes.shape({
     name: PropTypes.string.isRequired,
     handle: PropTypes.string.isRequired
    }).isRequired
}

const Time = ({time}) =>{
    const timeString = moment(time).fromNow();
    return(
         <span className="time">{timeString}</span>
    );
}


Time.propTypes = {
    time: PropTypes.string
}

const ReplyButton = () =>(
    
    <button className="reply">Reply</button>
);

function getRetweetCount(count){
    if(count>0){
        return(
            <span className="retweet-count">
                {count}
            </span>
        )
    } else {
        return null;
    }
}

const RetweetButton = ({count}) =>{
    return(
    <span className="retweet-button">
        <button className="retweet" >Retweet</button>
        {getRetweetCount(count)}
    </span>   
    );
    
}

const LikeButton = ({count}) => {
    return(
    <span className="like-button">
       <button className="like">Like</button>
       {count>0 && 
         <span className="like-count">
             {count}
         </span>}
    </span>
    );
    
}

LikeButton.propTypes = {
    count: PropTypes.number
};

const MoreOptionsButton = () =>(
    <button className="moreOptions">MoreOptions</button>
);

ReactDOM.render(<Monster/>, document.querySelector('#root'));