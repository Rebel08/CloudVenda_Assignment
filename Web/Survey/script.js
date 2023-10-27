document.getElementById("survey-form").onsubmit = function (event) {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked').value || "Not specified";
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    const popupContent = `
        First Name: ${firstName}<br>
        Last Name: ${lastName}<br>
        Date of Birth: ${dateOfBirth}<br>
        Country: ${country}<br>
        Gender: ${gender}<br>
        Profession: ${profession}<br>
        Email: ${email}<br>
        Mobile Number: ${mobileNumber}<br>
    `;
    document.getElementById("popup-content").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";
};


document.getElementById("close-popup").onclick = function () {
    document.getElementById("popup").style.display = "none";
    document.getElementById("survey-form").reset();
};