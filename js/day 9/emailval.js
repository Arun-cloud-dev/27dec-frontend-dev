const gmailValidate = /^[a-zA-Z\d\.-]+@gmail\.com$/;

const emailToValidate = "aruTn@gmail.com"


if (gmailValidate.test(emailToValidate)){
   alert("valid gmail address");

}else {
    alert("Not a valid gmail address")
};