// This is my script to validate the user's entries from validation1.html.

function validate1()
{
valCheck = true;
var resultFirstNameCheck = nameCheck(document.forms["personal information"]["fname"].value);
var imageFName = getImage(Boolean(resultFirstNameCheck), "fname");
var notifyFName = getNotification(Boolean(resultFirstNameCheck), "fname") ;
document.getElementById("fnameResult").appendChild(imageFName);
document.getElementById("fnameResult").appendChild(notifyFName);

var resultLastNameCheck = nameCheck(document.forms["personal information"]["lname"].value);
var imageLName = getImage(Boolean(resultLastNameCheck), "lname");
var notifyLName = getNotification(Boolean(resultLastNameCheck), "lname") ;
document.getElementById("lnameResult").appendChild(imageLName);
document.getElementById("lnameResult").appendChild(notifyLName);

var resultGenderCheck = genderCheck(document.forms["personal information"]["gender"].value);
var imageGender = getImage(Boolean(resultGenderCheck), "gender");
var notifyGender = getNotification(Boolean(resultGenderCheck), "gender") ;
document.getElementById("genderResult").appendChild(imageGender);
document.getElementById("genderResult").appendChild(notifyGender);

var resultStateCheck = stateCheck(document.forms["personal information"]["state"].value);
var imageState = getImage(Boolean(resultStateCheck), "state");
var notifyState = getNotification(Boolean(resultStateCheck), "state") ;
document.getElementById("stateResult").appendChild(imageState);
document.getElementById("stateResult").appendChild(notifyState);

if (resultFirstNameCheck && resultLastNameCheck && resultGenderCheck && resultStateCheck)
{
    setTimeout(function()
    {
        window.location.href = "validation2.html"
    }, 1500);
}
}

// Verifies that a state has been selected.
function stateCheck(state)
{
    if (state == "")
    {
        return false;
    }

    valCheck = false;
    return true;
}

// Verifies that a gender has been selected.
function genderCheck(gender)
{
    if (gender == "")
    {
        return false;
    }
    
    valCheck = false;
    return true;
}

// Verifies the name entered.
function nameCheck(name)
{
    if (fname != null && alphaNumCheck(name))
    {
        return true;
    }
    
    valCheck = false;
    return false;
}

// Checks to see if the entry contains only alphabetic and numeric characters.
function alphaNumCheck(entry)
{
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex))
    {
        return true;
    }

    valCheck = false;
    return false;
}

// Determines the notification to be displayed.
function getNotification(bool, ID)
{
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        label.setAttribute( 'class', 'errorMessage' );
      }

    if (ID == "fname")
    label.innerHTML = bool ? "" : "   Your first name cannot be blank, and should only contain alphabetic or numeric characters.";

    if (ID == "lname")
    label.innerHTML = bool ? "" : "   Your last name cannot be blank, and should only contain alphabetic or numeric characters.";

    if (ID == "gender")
    label.innerHTML = bool ? "" : "   Please select one of the listed options for your gender.";

    if (ID == "state")
    label.innerHTML = bool ? "" : "   Please select one of the listed options for your state.";

    return label;
}

// Function to return the image to be wrote to the HTML document.
function getImage(bool, ID)
{
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}