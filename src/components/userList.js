import React, {useState} from "react";
import User from './user'

function Users(props) {
    const [list, setList] = useState({})
    const getUsers = () => {
        props.getUsers().then(
            (u) => {
                console.log("users.js", u);
                setList(u);
            })
    }
    let renderedUsers = [];
    for (let login in list) {
        renderedUsers.push(<User
            key={login}
            login={login}
            count={list[login].count}
            clickHandler= { () => {props.userChange(login)}}
            />);
    }
    console.log('list', list.keys);
    //let keys = list.keys();
    //console.log(keys);
    //let renderedList = list.values().map( (user) => (<div>{user.login}</div>))
    return (

        <div>
            <button onClick={getUsers}>get some users with gists</button>
            { renderedUsers}

        </div>);
}

export {Users};
