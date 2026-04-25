const openbtn = document.querySelector("#openbtn");

openbtn.addEventListener("click", () => { console.log("hello")
     document.body.classList.toggle("show-mobile-menu");
});

 
 
function data(event) {
    var a = document.getElementById('n1').value;
    var b = document.getElementById('n2').value;
    var c = document.getElementById('n3').value;
    var d = document.getElementById('n4').value;

    if (a == "" || b == "" || c == "" || d == "") {
        alert("all fields are mandatory");
        event.preventDefault();
        return false;
    }
    else if (b.length < 10 || b.length > 10) {
        alert("min 10 digit");
        event.preventDefault();
        return false;
    }
    return true; 
}

