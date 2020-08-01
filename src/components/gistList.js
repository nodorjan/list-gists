import React from 'react';
import {Gist} from './gist';

function GistList(props) {
    if (props.error) {
        return (<div className="error">{props.error}</div>)
    } else {
        if (Array.isArray(props.list)) {
            if (props.list.length === 0) {
                return (<div className="panel">No gists to display</div>)
            }
            let renderedList = [];
            props.list.forEach(
                (gist, index) => renderedList.push(
                    <Gist
                        gist={gist}
                        key={index}
                    />))
            return (<div className="panel gistlist">
                {renderedList}
            </div>)
        } else {
            return null;
        }
    }

    // else
    //     if (Array.isArray(props.list) && props.list.length > 0) {
    //         let renderedList = [];
    //         props.list.foreach(
    //             (gist, index) => renderedList.append(<Gist gist={gist} key={index}/>))
    //         return (<div> {renderedList}</div>)
    //     } else {
    //         return null;
    //     }
    // }
}

export default GistList;