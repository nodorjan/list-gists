import React from "react";

function Badge(props) {
    let pieces = props.filetype.split('/');
    return <div className="badge"
                key={props.filetype}>
        <span>
            {pieces[0]}
        </span>
        <span>
            {pieces[1]}
        </span>
        </div>
}

export default Badge;