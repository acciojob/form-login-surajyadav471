function getFormvalue() {
    //Write your code here
    event.preventDefault(); // prevent form from submitting
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}
