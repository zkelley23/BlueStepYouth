/* ---------- NAVBAR ---------- */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginright = "250px";
//    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//    document.getElementById("navBar").style.backgroundColor = "#19703d";
//    document.getElementById("logo").style.opacity = "0.7";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginright = "0";
//    document.body.style.backgroundColor = "#fff";
//    document.getElementById("navBar").style.backgroundColor = "#28AE60";
//    document.getElementById("logo").style.opacity = "1.0";
}

/* ---------- FOOTER ---------- */
// YEAR
var date = new Date();
document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("yearMobile").innerHTML = date.getFullYear();

// COLLAPSIBLE FOOTER
var coll = document.getElementsByClassName("footerCollapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("footerActive");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
