import React from "react";

function User(props) {
    console.log('user props', props)
    return <div onClick={props.clickHandler}>
       ** {props.login} {props.count}
    </div>
}

export default User