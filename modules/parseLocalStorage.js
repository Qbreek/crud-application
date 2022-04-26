export default function parseLocalStorage() {
    //get all the users from localStorage and store them in an array
    const users = [];
    for ( let i = 0; i < localStorage.length; i++ ) {
        let key = localStorage.key(i);
        if ( key === 'key') {
            continue;
        }
        let user = JSON.parse(localStorage.getItem(key));
        users.push(user);
    }
    return users;
}
