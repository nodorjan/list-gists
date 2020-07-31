import React, {useState} from "react";
import ListedUser from './listedUser'

function UserList(props) {
    const [list, setList] = useState({})
    const [error, setError] = useState(null)
    const [listLoading, setListLoading] = useState(false);
    const [listLoaded, setListLoaded] = useState(false);

    if (props.hidden) {
        return null;
    }
    if (listLoading) {
        return <div className="panel">Please, wait</div>
    }


    const getUsers = () => {
        setListLoading(true);
        props.getUsers().then(
            (u) => {
                setList(u);
                setListLoading(false);
                setListLoaded(true);
            },
            (e) => {
                setError(e);
                setListLoading(false);
                setListLoaded(true);
            })
    }

    if (!listLoading && !listLoaded) {
        getUsers();
    }

    let renderedUsers = [];
    for (let login in list) {
        renderedUsers.push(<ListedUser
            key={login}
            login={login}
            userProperties = {list[login]}
            clickHandler={() => {
                props.changeUser(login);
            }}
        />);
    }
    return (
        <div className="panel">
            <div className="title">Some Git users who have gists to look at</div>
            <div>Click on a user to see their public gists or
                <button onClick={props.hideUserList}>Input user name</button></div>
            <div className="userList">
                {renderedUsers}
            </div>
        </div>);
}

export {UserList};
