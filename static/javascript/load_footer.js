var disclaimer_model = document.getElementById("disclaimer_model");
var contact_model = document.getElementById("contact_model");
var privacy_model = document.getElementById("privacy_model");
var support_model = document.getElementById("support_model");
var share_model = document.getElementById("share_model");
var advertisement_model = document.getElementById("advertisement_model");

var disclaimer_btn = document.getElementById("disclaimer");
var contact_btn = document.getElementById("contact");
var privacy_btn = document.getElementById("privacy");
var support_btn = document.getElementById("support");
var donate_sticky = document.getElementById("donate_sticky");
var share_btn = document.getElementById("share");
var advertisement_btn = document.getElementById("advertisement");

var close = document.getElementsByClassName("close")
var disclaimer_span = close[close.length - 5];
var contact_span = close[close.length - 4];
var privacy_span = close[close.length - 3];
var support_span = close[close.length - 2];
var share_span = close[close.length - 1];

var advertisement_span = document.getElementsByClassName("adv_close")[0]

// When the user clicks the button, open the modal
disclaimer_btn.onclick = function() {
    disclaimer_model.style.display = "block";
}
contact_btn.onclick = function() {
    contact_model.style.display = "block";
}
privacy_btn.onclick = function() {
    privacy_model.style.display = "block";
}
support_btn.onclick = function() {
    support_model.style.display = "block";
}
advertisement_btn.onclick = function() {
    advertisement_model.style.display = "block";
}

if (donate_sticky != null) {
    donate_sticky.onclick = function() {
        support_model.style.display = "block";
    }
}
share_btn.onclick = function() {
    share_model.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
disclaimer_span.onclick = function() {
    disclaimer_model.style.display = "none";
}
contact_span.onclick = function() {
    contact_model.style.display = "none";
}
privacy_span.onclick = function() {
    privacy_model.style.display = "none";
}
support_span.onclick = function() {
    support_model.style.display = "none";
}
share_span.onclick = function() {
    share_model.style.display = "none";
}
advertisement_span.onclick = function() {
    advertisement_model.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == disclaimer_model) {
        disclaimer_model.style.display = "none";
    }

    if (event.target == contact_model) {
        contact_model.style.display = "none";
    }

    if (event.target == privacy_model) {
        privacy_model.style.display = "none";
    }

    if (event.target == support_model) {
        support_model.style.display = "none";
    }

    if (event.target == share_model) {
        share_model.style.display = "none";
    }

    if (event.target == advertisement_model) {
        advertisement_model.style.display = "none";
    }
}
