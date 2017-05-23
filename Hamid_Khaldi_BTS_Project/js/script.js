/**
 * Created by Hamid on 19/05/2017.
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
        e.style.color = "white";
        e.style.border = "none";
        clicked = true;
    },//less

    more                    =   function(e){

        e.innerHTML = "more... ";
        e.style.fontSize = "2" + "em";
        e.style.color = "white";
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

        init    =   function(){


        bindBtn();

    }//init

    ;
    window.addEventListener("load", init);
})();