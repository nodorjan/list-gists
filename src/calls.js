import {getUsersDemo, getGistsForUserDemo, getForksForGistDemo} from "./demoCalls";

/*
 *  The API calls used. To be able to see different scenarios that may or may not come up with live
 *  data, you can use some demo calls with fake data. The parameter demo in the url decides whether
 *  the real API gets called or we just return the handcoded test data
 */

let isDemo = false;

// to be called as the first thing when the page loads.
function setIsDemo(href) {
    let query = (href.split('?'))[1];
    if (!query) {
        return;
    }
    let pieces = query.split('&');
    pieces.forEach((p) => {
        const [name, value] = p.split('=');
        if (name === 'demo') {
            isDemo = true;
        }
    })
}

/*
 * Real API calls
 */

function getUsers() {
    return new Promise(
        (success, failure) => {
            fetch('https://api.github.com/gists/public').then(
                (response) => {
                    response.json().then((j) => {
                        let owners = {};
                        j.forEach((gist) => {
                            let login = gist.owner.login;
                            owners[login] = gist.owner;
                        })
                        success(owners)
                    });
                }
            )
        }
    );
}

function getGistsForUser(user) {
    return new Promise(
        function (success, failure) {
            fetch(`https://api.github.com/users/${user}/gists`).then(
                (response) => {
                    if (response.status === 200) {
                        response.json().then(
                            (data) => {
                                success(data)
                            },
                            (error) => {
                                failure(error)
                            }
                        )
                    } else {
                        let error = `Error retrieving gists for ${user}`;
                        if (response.status === 404) {
                            error = `Unknown user : ${user}`
                        }
                        if (response.status === 403) {
                            error = "Too many requests";
                        }
                        failure(error);
                    }
                }
            )
        });
}

function getForksForGist(gist) {
    return new Promise(
        function (success, failure) {
            fetch(gist.forks_url).then(
                (response) => {
                    response.json().then((d) => {
                        success(d)
                    }, (e) => {
                        failure(e)
                    })
                },
                (error) => {
                    failure(error);
                }
            );
        })
}

/*
 * Choosing the live or demo version
 */
function chooseGetUsers() {
    if (isDemo) {
        return getUsersDemo();
    } else {
        return getUsers();
    }
}

function chooseGetGistsForUser(user) {
    if (isDemo) {
        return getGistsForUserDemo(user)
    } else {
        return getGistsForUser(user);
    }
}

function chooseGetForksForGist(gist) {
    if (isDemo) {
        return getForksForGistDemo(gist)
    } else {
        return getForksForGist(gist);
    }
}

export {chooseGetUsers as getUsers,
        chooseGetGistsForUser as getGistsForUser,
        chooseGetForksForGist as getForksForGist,
        setIsDemo}

