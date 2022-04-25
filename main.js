import createTableElements from "./modules/createTableElements.js";
import editUserHiddenPopupForm from "./modules/editUserHiddenPopup.js";
import getUsers from "./modules/getUsers.js";

function main() {
    if ( localStorage.length === 0 ) {  //if there are no users in localStorage, fetch them from the provided endpoint(url)
        getUsers('https://jsonplaceholder.typicode.com/users');
    } else {    //if there are users in localStorage, create the table elements
        for ( let i = 0; i < localStorage.length; i++ ) {
            const user = JSON.parse(localStorage.getItem(localStorage.key(i)));
            createTableElements(user);
        }
    }

    //sort the users by first name
    const sortByFirstNameBtn = document.getElementById('sort-first');
    sortByFirstNameBtn.addEventListener('click', () => {
        //clear the table
        document.getElementById('users').innerHTML = '';
        const users = parseLocalStorage();
        sortByFirstName(users);
    });

    //sort the users by last name
    const sortByLastNameBtn = document.getElementById('sort-last');
    sortByLastNameBtn.addEventListener('click', () => {
        //clear the table
        document.getElementById('users').innerHTML = '';
        const users = parseLocalStorage();
        sortByLastName(users);
    });

    //sort the users by address
    const sortByAddressBtn = document.getElementById('sort-address');
    sortByAddressBtn.addEventListener('click', () => {
        //clear the table
        document.getElementById('users').innerHTML = '';
        const users = parseLocalStorage();
        sortByAddress(users);
    });

    const newMemberBtn = document.querySelector('.new-btn');
    newMemberBtn.addEventListener('click', () => {
    });
}

function parseLocalStorage() {
    //get all the users from localStorage and store them in an array
    const users = [];
    for ( let i = 0; i < localStorage.length; i++ ) {
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));
        users.push(user);
    }
    return users;
}

function sortByFirstName(users) {
    //sort the users by first name
    users.sort((a, b) => {
        if ( a.firstName.toLowerCase() < b.firstName.toLowerCase() ) {
            return -1;
        }
        if ( a.firstName.toLowerCase() > b.firstName.toLowerCase() ) {
            return 1;
        }
        return 0;
    });

    users.forEach(user => {
        createTableElements(user);
    });            
}

function sortByLastName(users) {
    //sort the users by last name
    users.sort((a, b) => {
        if ( a.lastName.toLowerCase() < b.lastName.toLowerCase() ) {
            return -1;
        }
        if ( a.lastName.toLowerCase() > b.lastName.toLowerCase() ) {
            return 1;
        }
        return 0;
    });

    users.forEach(user => {
        createTableElements(user);
    });
}

function sortByAddress(users) {
    //sort the users by address
    users.sort((a, b) => {
        if ( a.address.toLowerCase() < b.address.toLowerCase() ) {
            return -1;
        }
        if ( a.address.toLowerCase() > b.address.toLowerCase() ) {
            return 1;
        }
        return 0;
    });

    users.forEach(user => {
        createTableElements(user);
    });
}

main();

