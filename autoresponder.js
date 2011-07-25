var id = chrome.contextMenus.create({"title":"Compose via Gmail","contexts":["selection","link"],"onclick":composeEmail});

function composeEmail(selectedObj)
{
    if(localStorage["email_ad_autoresponder_cell"] == undefined && localStorage["email_ad_autoresponder_bugged_user"] == undefined)
    {
        alert("You should set the default cell phone in your prefences for this to work properly. You wont see this message again.");
        localStorage["email_ad_autoresponder_bugged_user"] = 1;
    }
    var gmailUrl = "https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&shva=1";
    var target = selectedObj.selectionText;
    var emailTemplate = "Hi, I'm interested in the apartment for rent. If it's still available. I'd like to come by and take a look. %0D%0A%0D%0APlease give me a call at: "+localStorage["email_ad_autoresponder_cell"]+". %0D%0A%0D%0AThanks!%0D%0A%0D%0AOren";
    var subject = "Apartment for Rent";
    window.open('https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&shva=1&to='+target+'&su='+subject+'&body='+emailTemplate+'','Compose Gmail');
}
