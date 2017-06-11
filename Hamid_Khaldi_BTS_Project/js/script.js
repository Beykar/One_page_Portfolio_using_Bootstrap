/**
 * @name    script.js
 * @desc    script that handles the 'More' buttons in the sections and replaces them with 'Less' when clicked, and vice-versa.
 */
(function(){
    var


    servicesBtn             =   document.getElementById("servicesBtn"),
    skillsBtn               =   document.getElementById("skillsBtn"),
    blogBtn                 =   document.getElementById("blogBtn"),
    portBtn                 =   document.getElementById("portBtn"),
    contactBtn              =   document.getElementById("contactBtn"),
    clicked                 =   false,
    $aboutPic               =   $("#aboutPic"),
    $aboutBtn               =   $("#aboutBtn"),
    $aboutSpan              =  $("#aboutSpan"),





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

        $aboutBtn.click(function(){
                $aboutSpan
                    .slideToggle("slow")
                    .toggleClass("visible");
                    if ( $aboutSpan.hasClass("visible") ){
                        $aboutPic.fadeTo("fast",1);
                        $aboutBtn.html("less... ")

                    } else {
                        $aboutPic.fadeTo("fast", .2);
                        $aboutBtn.html("more... ")
                    }
            console.log($aboutSpan.hasClass("visible"));
            });//slideToggle for the blog section


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