import React, {useState} from 'react';
import GistList from "./gistList";
import UserInput from './userInput';
import UserDisplay from './userDisplay'
import UserList from './userList'

function Page() {
    const [user, setUser] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [userListOpen, setUserListOpen] = useState(false);

    const showUserList = () => {
        setUserListOpen(true);
    }

    const hideUserList = () => {
        setUserListOpen(false);
    }

    const changeUser = (username, avatar) => {
        if (username === user) {
            return;
        }
        setUser(username);
        if (avatar) {
            setAvatar(avatar);
        }
    }

    const resetUser = () => {
        // waiting for the viewer to enter or select a user
        setUser(null);
        setAvatar(null);
        setUserListOpen(false);
    }

    return (
        <div>
            {/* Enter user login name */}
            <UserInput hidden={user || userListOpen} changeUser={changeUser} showUserList={showUserList}/>
            {/* Present a list of users to select from */}
            <UserList hidden={user || !userListOpen} changeUser={changeUser} hideUserList={hideUserList}/>
            {/* Show selected / entered user */}
            <UserDisplay hidden={!user} user={user} avatar={avatar} resetUser={resetUser}/>
            {/* Show gists for the user */}
            <GistList hidden={!user} user={user} setAvatar={setAvatar}/>
        </div>
    )
}

export default Page;