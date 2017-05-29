/**
 * @name    script.js
 * @desc    script that handles the 'More' buttons in the sections and replaces them with 'Less' when clicked, and vice-versa.
 */
(function(){
    var

    aboutBtn                =   document.getElementById("aboutBtn"),
    servicesBtn             =   document.getElementById("servicesBtn"),
    skillsBtn               =   document.getElementById("skillsBtn"),
    blogBtn                 =   document.getElementById("blogBtn"),
    portBtn                 =   document.getElementById("portBtn"),
    contactBtn              =   document.getElementById("contactBtn"),
    clicked                 =   false,


    less                    =   function(e){

        e.innerHTML = "less... ";
        e.style.fontSize = "2" + "em";
        e.style.color = "color: rgba(51, 51, 51, 1)";
        e.style.border = "none";
        clicked = true;
    },//less

    more                    =   function(e){

        e.innerHTML = "more... ";
        e.style.fontSize = "2" + "em";
        e.style.color = "color: rgba(51, 51, 51, 1)";
        e.style.border = "none";
        clicked = false;
    },//more


    bindBtn =   function(){

        aboutBtn.addEventListener("click", function () {
                if (clicked === false) {
                    less(aboutBtn);
                } else {
                    more(aboutBtn);
                }
            });

        servicesBtn.addEventListener("click", function () {
            if (clicked === false) {
                less(servicesBtn);
            } else {
                more(servicesBtn);
            }
        });

        skillsBtn.addEventListener("click", function () {
            if (clicked === false) {
               less(skillsBtn);
            } else {
                more(skillsBtn);
            }
        });

        blogBtn.addEventListener("click", function () {
            if (clicked === false) {
                less(blogBtn);
            } else {
                more(blogBtn);
            }
        });

        portBtn.addEventListener("click", function () {
            if (clicked === false) {
                less(portBtn);
            } else {
                more(portBtn);
            }
        });

        contactBtn.addEventListener("click", function () {
            if (clicked === false) {
                    less(contactBtn);
            } else {
                more(contactBtn);
            }
        });
    },//bindBtn

        arrowUp = function () {
            //Check to see if the window is top if not then display button
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });

            //Click event to scroll to top
            $('.scrollToTop').click(function(e){
                e.preventDefault();
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });

        },//arrowUp

        init    =   function(){
        arrowUp();

        bindBtn();



    }//init

    ;


    window.addEventListener("load", init);
})();