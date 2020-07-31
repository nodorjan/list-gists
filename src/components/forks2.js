import React from 'react';
import './user.css'

function Fork(props) {
    let owner = props.fork.owner;
    let imgSrc = props.fork.owner.avatar_url;
    return (
    <div className="user inGist" >
        <div className="username actionLink">
         {owner.login}
        </div>
        <a href={props.fork.html_url} target={'fork' + props.fork.id}>
            <img src={props.fork.owner.avatar_url}/>
        </a>
    </div>);
}

function Forks(props) {
    let renderedForks = props.forks.map( (f, index) => {
        console.log('f', f);
        return(
            <Fork key={index} fork={f}/>)
        }

    )

    console.log(renderedForks);
    return <div>{renderedForks}</div>
}

export default Forks;