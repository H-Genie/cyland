displayToggle = () => {
    document.getElementsByClassName('input_comment')[0].classList.toggle('toggle_display');
}

let updateState = 0;
let deleteState = 0;
clickUpdate = (target) => {    
    target.parentElement.getElementsByClassName('delete_box')[0].style="display:none;";
    deleteState = 0;
    
    if(updateState == 0) {
        target.previousElementSibling.previousElementSibling.style="display:block;";
        updateState = 1;
    } else {
        target.previousElementSibling.previousElementSibling.style="display:none;";
        updateState = 0;
    }
    
}

clickDelete = (target) => {
    target.parentElement.getElementsByClassName('update_box')[0].style="display:none;";
    updateState = 0;
    
    if(deleteState == 0) {
        target.previousElementSibling.previousElementSibling.style="display:block;";
        deleteState = 1;
    } else {
        target.previousElementSibling.previousElementSibling.style="display:none;";
        deleteState = 0;
    }
}

fixedInput = (target) => {
    target.parentElement.parentElement.parentElement.style="display:flex;";
}