import React, {useState} from 'react';

function UserInput(props) {
    const [name, setName] = useState('');

    const changeHandler = (e) => {
        setName(e.target.value);
    }

    const listClicked = () => {
        props.changeUser(name);
    }

    const listDisabled = name.trim().length === 0;

    if (props.hidden) {
        return null;
    }

    return (
        <div className="panel">
            Enter GitHub user name : <input value={name} onChange={changeHandler}/>
            <button disabled={listDisabled} onClick={listClicked}>List Public Gists for user</button>
            or
            <button onClick={props.showUserList}>Get some users with gists</button>
        </div>)
}

export default UserInput;