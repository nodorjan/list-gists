import React from "react";
import './user.css';

function ListedUser(props) {
    return <div className="user" onClick={props.clickHandler}>
        <div className="username actionLink">{props.login}</div>
        <img src={props.userProperties.avatar_url} alt={props.login}/>
    </div>
}

export default ListedUser