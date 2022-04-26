import { enableBtns } from "./enableDisableBtn.js";

//function that creates the hidden popup form for editing the user
export default function editUserHiddenPopupForm(userInfo) {
    const formPopup = document.createElement('div');
    formPopup.classList.add('form-popup');
    
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');

    const formButtonContainer = document.createElement('div');
    formButtonContainer.classList.add('form-button-container');

    //create the form title
    const formLegend = document.createElement('legend');
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Edit Member';

    //create the label elements
    const firstNameLabel = document.createElement('label');
    firstNameLabel.setAttribute('for', 'firstName');
    firstNameLabel.textContent = 'First Name';
    
    const lastNameLabel = document.createElement('label');
    lastNameLabel.setAttribute('for', 'lastName');
    lastNameLabel.textContent = 'Last Name';

    const addressLabel = document.createElement('label');
    addressLabel.setAttribute('for', 'address');
    addressLabel.textContent = 'Address';

    //create the text input elements
    const firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.name = 'firstname';
    firstNameInput.value = userInfo.firstName;
    
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.name = 'lastname';
    lastNameInput.value = userInfo.lastName;
   
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.value = userInfo.address;
   
    //create the save changes button
    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.classList.add('button', 'save-btn');
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', () => {
        //grab the correct table row using the id
        const firstName = document.getElementById(`firstName-${userInfo.id}`);
        const lastName = document.getElementById(`lastName-${userInfo.id}`);
        const address = document.getElementById(`address-${userInfo.id}`);

        //update the user info
        firstName.textContent = firstNameInput.value;
        lastName.textContent = lastNameInput.value;
        address.textContent = addressInput.value;

        //update the user object in local storage
        userInfo.firstName = firstNameInput.value;
        userInfo.lastName = lastNameInput.value;
        userInfo.address = addressInput.value;
        localStorage.setItem(userInfo.id, JSON.stringify(userInfo));

        //close the popup
        formPopup.remove();
    });

    //create the cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.classList.add('button', 'cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        formPopup.remove();
        enableBtns();

    });

    formButtonContainer.append(saveBtn, cancelBtn);
    formLegend.appendChild(formTitle);
    formContainer.append(formLegend, firstNameLabel, firstNameInput, lastNameLabel, lastNameInput, addressLabel, addressInput, formButtonContainer);
    formPopup.appendChild(formContainer);
    document.body.appendChild(formPopup);
}
