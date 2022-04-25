//async function that fetches the users from the provided endpoint(url)
async function getUsers(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const users = await response.json();
        users.forEach(user => {
            createTableElements(user);
        });
    } catch(error) {
        console.error(`Could not get users: ${error}`);
    }
}

//for every user create the coresponding table element
function createTableElements(userInfo) {
    //create the table elements
    const table = document.getElementById('users');
    const tableRow = document.createElement('tr');
    const firstName = document.createElement('td');
    const lastName = document.createElement('td');
    const address = document.createElement('td');
    const action = document.createElement('td');
   
    //split userInfo.name into first and last name
    const name = userInfo.name.split(' ');
    firstName.textContent = name[0];
    lastName.textContent = name[1];
    address.textContent = userInfo.address.street;
    tableRow.appendChild(firstName);
    tableRow.appendChild(lastName);
    tableRow.appendChild(address);

    //edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('button', 'edit-btn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
       editUserHiddenPopupForm(userInfo);
    });
    action.appendChild(editBtn);    
    
    //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('button', 'delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteUser(userInfo);
    });
    action.appendChild(deleteBtn);
    
    tableRow.appendChild(action);

    table.appendChild(tableRow);
}

function editUserHiddenPopupForm(userInfo) {
    const formPopup = document.createElement('div');
    formPopup.classList.add('form-popup');
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');
    
    const firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.name = 'firstname';
    firstNameInput.value = userInfo.name.split(' ')[0];
    
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.name = 'lastname';
    lastNameInput.value = userInfo.name.split(' ')[1];
   
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.value = userInfo.address.street;
   
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('button', 'save-btn');
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', () => {
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const address = addressInput.value;
    });

    formContainer.append(firstNameInput, lastNameInput, addressInput, saveBtn);
    formPopup.appendChild(formContainer);
    document.body.appendChild(formPopup);
}


getUsers('https://jsonplaceholder.typicode.com/users');