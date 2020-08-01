import React, {useEffect} from "react";
import Badges from './badges'
import Forks from './forks'
import './gists.css'

function Gist(props) {
    const gist = props.gist;
    const {id, html_url, files, description} = gist;
    const fileValues = Object.values(files);
    const displayName = fileValues.length > 0 ? fileValues[0].filename : id;

    // show the user avatar in the header if it is available
    useEffect( () => {props.setAvatar(gist.owner.avatar_url)});

    return (
        <div className="gist">
             <a href={html_url}
               target={'showGist' + id}
               title="Open Gist">
                {displayName}
            </a>
            <div className="description">{description}</div>
            <Badges files={fileValues}/>
            <Forks gist={gist}/>
         </div>
     )
}

export default Gist;