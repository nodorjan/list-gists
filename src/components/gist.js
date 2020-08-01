import React, {useEffect} from "react";
import Badges from './badges2'
import Forks from './forks2'
import './gists.css'

function Gist(props) {
    const gist = props.gist;
    const {id, html_url, files, description} = gist;
    const fileValues = Object.values(files);
    const display = fileValues.length > 0 ? fileValues[0].filename : id;

    useEffect( () => {props.setAvatar(gist.owner.avatar_url)});

    return (
        <div className="gist">
             <a href={html_url}
               target={'showGist' + id}
               title="Open Gist">
                {display}
            </a>
            <div className="description">{description}</div>
            <Badges files={fileValues}/>
            <Forks gist={gist}/>
         </div>
     )
}

export default Gist;
