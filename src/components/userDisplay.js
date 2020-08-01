import React from 'react';

function UserDisplay(props) {
    if (props.hidden) {
        return null;
    }
    const avatar = props.avatar ?
        <img src={props.avatar} className="userDisplayImage"/>
        : null;
    return (
        <div className="panel">
            {avatar}
            <span className="titleSize">Gists for {props.user}</span>
            <button onClick={props.resetUser}>Select another user</button>
        </div>)
}

export default UserDisplay;