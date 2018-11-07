$(document).ready(function(){
    // get element
    var nav = document.getElementById("navbar");

    //on scroll event wil do..
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;

        // remove class when offset form top below 350
        if(currentScrollPos < 350){

            // remove class you want
            nav.classList.remove("bg-hard-dark");
            nav.classList.add("bg-transparent");
        }
        else {

            // add class you want
            nav.classList.remove("bg-transparent");
            nav.classList.add("bg-hard-dark");
        }
    };
});