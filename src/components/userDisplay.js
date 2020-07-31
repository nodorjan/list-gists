import React from 'react';

function UserDisplay(props) {
    if (!props.name) {
        return null;
    }
    return (
        <div className="panel">
            <span className="titleSize">Gists for {props.name}</span>
            <button onClick={props.resetUser}>Select another user</button>
        </div>)
}

export default UserDisplay;