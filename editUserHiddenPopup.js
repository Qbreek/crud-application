//function that creates the hidden popup form for editing the user
export default function editUserHiddenPopupForm(userInfo) {
    const formPopup = document.createElement('div');
    formPopup.classList.add('form-popup');
    
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');

    const formButtonContainer = document.createElement('div');
    formButtonContainer.classList.add('form-button-container');

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

    //create the input elements
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
   
    //create the save button
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('button', 'save-btn');
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', () => {
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const address = addressInput.value;
    });

    //create the cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('button', 'cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        formPopup.remove();
    });

    formButtonContainer.append(saveBtn, cancelBtn);
    formContainer.append(firstNameLabel, firstNameInput, lastNameLabel, lastNameInput, addressLabel, addressInput, formButtonContainer);
    formPopup.appendChild(formContainer);
    document.body.appendChild(formPopup);
}
