function addingEventListener() {
 const input = document.getElementById('button'); 
    input.addEventListener("click", function () { //name of the event and a callback function to handle the event
        alert("I was clicked!");
    });
    
}
