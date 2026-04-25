function data(event) {
    var f = document.getElementById('n6').value.trim();
    var g = document.getElementById('n7').value.trim();
    var h = document.getElementById('n8').value.trim();
    var i = document.getElementById('n9').value;  

    if (f === "" || g === "" || h === "" || i === "") {
        alert("All fields are mandatory");
        event.preventDefault();
        return false;
    }
    else if (g.length !== 10) {  
        alert("Phone number must be exactly 10 digits");
        event.preventDefault();
        return false;
    }

    return true;
}
