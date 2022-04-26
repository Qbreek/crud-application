import createTableElements from "./modules/createTableElements.js";
import getUsers from "./modules/getUsers.js";
import { sortByFirstNameAsc, sortByFirstNameDesc, sortByLastNameAsc, sortByLastNameDesc, sortByAddressAsc, sortByAddressDesc } from "./modules/sortLogic.js";
import parseLocalStorage from "./modules/parseLocalStorage.js";
import createNewUserHiddenPopupForm from "./modules/createNewUserHiddenPopupForm.js";
import { disableBtns } from "./modules/enableDisableBtn.js";

//contains logic for populating the table with users, sorting, and filtering
function main() {
    if ( localStorage.length === 0 ) {  //if there are no users in localStorage, fetch them from the provided endpoint(url)
        getUsers('https://jsonplaceholder.typicode.com/users');
        localStorage.setItem('key', 11);
   
    } else  {    //if there are users in localStorage, create the table elements
        const users = parseLocalStorage();
        users.forEach(user => {
            createTableElements(user);
        });
    }

    //logic for the sort,search and new user buttons

    //sort the users by first name ascending
    const sortByFirstNameAscBtn = document.getElementById('sort-first-asc');
    sortByFirstNameAscBtn.addEventListener('click', () => {
        //clear the table
        document.getElementById('users').innerHTML = '';
        const users = parseLocalStorage();
        const sortedUsers = sortByFirstNameAsc(users);
        sortedUsers.forEach(user => {
            createTableElements(user);
        });
    });

    //sort the users by first name descending
    const sortByFirstNameDescBtn = document.getElementById('sort-first-desc');
    sortByFirstNameDescBtn.addEventListener('click', () => {
        //clear the table
        document.getElementById('users').innerHTML = '';
        const users = parseLocalStorage();
        const sortedUsers = sortByFirstNameDesc(users);
        sortedUsers.forEach(user => {
            createTableElements(user);
        });
    });

    //sort the users by last name ascending
    const sortByLastNameAscBtn = document.getElementById('sort-last-asc');
    sortByLastNameAscBtn.addEventListener('click', () => {
        //clear the table
        document.getElementById('users').innerHTML = '';
        const users = parseLocalStorage();
        const sortedUsers = sortByLastNameAsc(users);
        sortedUsers.forEach(user => {
            createTableElements(user);
        });
    });

    //sort the users by last name descending
    const sortByLastNameDescBtn = document.getElementById('sort-last-desc');
    sortByLastNameDescBtn.addEventListener('click', () => {
        //clear the table
        document.getElementById('users').innerHTML = '';
        const users = parseLocalStorage();
        const sortedUsers = sortByLastNameDesc(users);
        sortedUsers.forEach(user => {
            createTableElements(user);
        });
    });
    
    //sort the users by address ascending
    const sortByAddressAscBtn = document.getElementById('sort-address-asc');
    sortByAddressAscBtn.addEventListener('click', () => {
        //clear the table
        document.getElementById('users').innerHTML = '';
        const users = parseLocalStorage();
        const sortedUsers = sortByAddressAsc(users);
        sortedUsers.forEach(user => {
            createTableElements(user);
        });
    });

    //sort the users by address descending
    const sortByAddressDescBtn = document.getElementById('sort-address-desc');
    sortByAddressDescBtn.addEventListener('click', () => {
        //clear the table
        document.getElementById('users').innerHTML = '';
        const users = parseLocalStorage();
        const sortedUsers = sortByAddressDesc(users);
        sortedUsers.forEach(user => {
            createTableElements(user);
        });
    });
    
    const newMemberBtn = document.querySelector('.new-btn');
    newMemberBtn.addEventListener('click', () => {
        createNewUserHiddenPopupForm();
        disableBtns();
    });

    //search for users by the input value
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
        const searchInput = document.getElementById('search-input').value;
        const users = parseLocalStorage();
        const filteredUsers = users.filter(user => {
            if ( user.firstName.toLowerCase().includes(searchInput.toLowerCase()) || user.lastName.toLowerCase().includes(searchInput.toLowerCase()) || user.address.toLowerCase().includes(searchInput.toLowerCase()) ) {
                return user;
            }
        });
        document.getElementById('users').innerHTML = '';
        filteredUsers.forEach(user => {
            createTableElements(user);
        });
    });

}

main();

