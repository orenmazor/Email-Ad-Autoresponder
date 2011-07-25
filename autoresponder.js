var id = chrome.contextMenus.create({"title":"Compose via Gmail","contexts":["selection","link"],"onclick":composeEmail});

function composeEmail(selectedObj)
{
    if(localStorage["email_ad_autoresponder_message"] == undefined && localStorage["email_ad_autoresponder_bugged_user"] == undefined)
    {
        alert("You should set the default message in your prefences for this to work properly. You wont see this message again.");
        localStorage["email_ad_autoresponder_bugged_user"] = 1;
    }
    var gmailUrl = "https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&shva=1";
    var target = selectedObj.selectionText;
    var emailTemplate = localStorage["email_ad_autoresponder_message"];
    var subject = "Apartment for Rent";
    window.open('https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&shva=1&to='+target+'&su='+subject+'&body='+emailTemplate+'','Compose Gmail');
}
