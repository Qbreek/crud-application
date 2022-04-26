function disableBtns() {
    //disable all edit buttons
    const editBtns = document.querySelectorAll('.edit-btn');
    editBtns.forEach(btn => {
        btn.disabled = true;
    });
    //disable all delete buttons
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
        btn.disabled = true;
    });
    //disable add user button
    const addUserBtn = document.querySelector('.new-btn');
    addUserBtn.disabled = true;
    //disable search button
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.disabled = true;
}

function enableBtns() {
    //enable all edit buttons
    const editBtns = document.querySelectorAll('.edit-btn');
    editBtns.forEach(btn => {
        btn.disabled = false;
    });
    //enable all delete buttons
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
        btn.disabled = false;
    });
    //enable add user button
    const addUserBtn = document.querySelector('.new-btn');
    addUserBtn.disabled = false;
    //enable search button
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.disabled = false;
}

export { disableBtns, enableBtns };