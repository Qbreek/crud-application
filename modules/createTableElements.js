import editUserHiddenPopupForm from "./editUserHiddenPopup.js";

//for every user create the coresponding table element
export default function createTableElements(userInfo) {
    //create the table elements
    const tableBody = document.getElementById('users');
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('id', userInfo.id);
    const firstName = document.createElement('td');
    firstName.setAttribute('id', `firstName-${userInfo.id}`);
    const lastName = document.createElement('td');
    lastName.setAttribute('id', `lastName-${userInfo.id}`);
    const address = document.createElement('td');
    address.setAttribute('id', `address-${userInfo.id}`);
    const action = document.createElement('td');
   
    //split userInfo.name into first and last name
    firstName.textContent = userInfo.firstName;
    lastName.textContent = userInfo.lastName;
    address.textContent = userInfo.address;
    tableRow.append(firstName, lastName, address, action);

    //edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('button', 'edit-btn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
       editUserHiddenPopupForm(userInfo);
    });
    
    //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('button', 'delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        tableRow.remove();
        localStorage.removeItem(userInfo.id);
    });

    action.append(editBtn, deleteBtn);

    tableRow.appendChild(action);

    tableBody.appendChild(tableRow);
}