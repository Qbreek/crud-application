function sortByFirstNameAsc(users) {
    //sort the users by first name ascending
    users.sort((a, b) => {
        if ( a.firstName.toLowerCase() > b.firstName.toLowerCase() ) {
            return -1;
        }
        if ( a.firstName.toLowerCase() < b.firstName.toLowerCase() ) {
            return 1;
        }
        return 0;
    });
    
    return users;
}

function sortByFirstNameDesc(users) {
    //sort the users by first name descending
    users.sort((a, b) => {
        if ( a.firstName.toLowerCase() < b.firstName.toLowerCase() ) {
            return -1;
        }
        if ( a.firstName.toLowerCase() > b.firstName.toLowerCase() ) {
            return 1;
        }
        return 0;
    });

    return users;
}

function sortByLastNameAsc(users) {
    //sort the users by last name ascending
    users.sort((a, b) => {
        if ( a.lastName.toLowerCase() > b.lastName.toLowerCase() ) {
            return -1;
        }
        if ( a.lastName.toLowerCase() < b.lastName.toLowerCase() ) {
            return 1;
        }
        return 0;
    });

    return users;
}

function sortByLastNameDesc(users) {
    //sort the users by last name descending
    users.sort((a, b) => {
        if ( a.lastName.toLowerCase() < b.lastName.toLowerCase() ) {
            return -1;
        }
        if ( a.lastName.toLowerCase() > b.lastName.toLowerCase() ) {
            return 1;
        }
        return 0;
    });

    return users;
}

function sortByAddressAsc(users) {
    //sort the users by address
    users.sort((a, b) => {
        if ( a.address.toLowerCase() > b.address.toLowerCase() ) {
            return -1;
        }
        if ( a.address.toLowerCase() < b.address.toLowerCase() ) {
            return 1;
        }
        return 0;
    });

    return users;
}

function sortByAddressDesc(users) {
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

    return users;
}

export { sortByFirstNameAsc, sortByFirstNameDesc, sortByLastNameAsc, sortByLastNameDesc, sortByAddressAsc, sortByAddressDesc };