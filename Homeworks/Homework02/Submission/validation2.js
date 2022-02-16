// This is my script to validate the user's entries from validation2.html.

function validate2()
{
valCheck = true;
var resultEmailCheck = emailCheck(document.forms["contact information"]["email"].value);
var imageEmail = getImage(Boolean(resultEmailCheck), "email");
var notifyEmail = getNotification(Boolean(resultEmailCheck), "email") ;
document.getElementById("emailResult").appendChild(imageEmail);
document.getElementById("emailResult").appendChild(notifyEmail);

var resultPhoneCheck = phoneCheck(document.forms["contact information"]["phone"].value);
var imagePhone = getImage(Boolean(resultPhoneCheck), "phone");
var notifyPhone = getNotification(Boolean(resultPhoneCheck), "phone") ;
document.getElementById("phoneResult").appendChild(imagePhone);
document.getElementById("phoneResult").appendChild(notifyPhone);

var resultAddressCheck = addressCheck(document.forms["contact information"]["address"].value);
var imageAddress = getImage(Boolean(resultAddressCheck), "address");
var notifyAddress = getNotification(Boolean(resultAddressCheck), "address") ;
document.getElementById("addressResult").appendChild(imageAddress);
document.getElementById("addressResult").appendChild(notifyAddress);
}

// Verifies the address entered. While I used a pattern for the input, I was unable to understand how to use this check of validity in my script.
function addressCheck(address)
{
    if(address == "" || !address.includes(","))
    return false;

    if (address.includes(", "))
    {
        address = address.replace(", ", ",");
    }

    commaSplit = address.split(',');

    if (commaSplit[0] == "" || commaSplit[1] == "" || commaSplit[1].length > 2 || commaSplit[1].length < 2)
    {
        return false;
    }

    valCheck = false;
    return true;
}

// Verifies the phone number entered was not blank. While I used a pattern for the input, I was unable to understand how to use this check of validity in my script.
function phoneCheck(phone)
{  
    if (phone.includes("-"))
    {
        hyphenSplit = phone.split('-');

        if (hyphenSplit.length < 3 || hyphenSplit[0].length != 3 || hyphenSplit[1].length != 3 || hyphenSplit[2].length != 4)
        {
            return false;
        }
    }
    else if (phone == "" || phone.length < 10 || phone.length > 10)
    {
        return false;
    }

    valCheck = false;
    return true;
}

// Verifies the email address entered.
function emailCheck(email) 
{
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0]))
    {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1]))
        {
            return true;
        }
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

    if (ID == "email")
    label.innerHTML = bool ? "" : "   Your email is a required field, and it must follow the specified format.";

    if (ID == "phone")
    label.innerHTML = bool ? "" : "   Your phone number is a required field, and it must follow the specified format.";

    if (ID == "address")
    label.innerHTML = bool ? "" : "   Your address is a required field, and it must follow the specified format.";

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