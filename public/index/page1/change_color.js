changeColor = (parameter) => {
    for(let i=0; i<document.getElementsByClassName('band').length; i++) {
        document.getElementsByClassName('band')[i].style="background-color:#7d88f9;";
        document.getElementsByClassName('band')[i].querySelector('h6').style="color:white;";
    }

    document.getElementsByClassName('band')[parameter].style="background-color:white;";
    document.getElementsByClassName('band')[parameter].querySelector('h6').style="color:#7d88f9;";
}