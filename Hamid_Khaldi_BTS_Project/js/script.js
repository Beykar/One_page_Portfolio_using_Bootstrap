/**
 * @name    script.js
 * @desc    script that handles the 'More' buttons in the sections and replaces them with 'Less' when clicked, and vice-versa.
 */
(function(){
    var


    $aboutPic               =   $("#aboutPic"),
    $aboutBtn               =   $("#aboutBtn"),
    $aboutSpan              =   $("#aboutSpan"),
    $servicesBtn            =   $("#servicesBtn"),
    $moreServices           =   $("#moreServices"),
    $skillsBtn              =   $("#skillsBtn"),
    $moreSkills             =   $("#moreSkills"),
    $blogBtn                =   $("#blogBtn"),
    $moreBlog               =   $("#moreBlog"),
    $readMore1              =   $("#readMore1"),
    $morePost1              =   $("#morePost1"),
    $readMore2              =   $("#readMore2"),
    $morePost2              =   $("#morePost2"),
    $readMore3              =   $("#readMore3"),
    $morePost3              =   $("#morePost3"),
    $portBtn                =   $("#portBtn"),
    $morePort               =   $("#morePort"),
    $contactBtn             =   $("#contactBtn"),
    $moreContact            =   $("#moreContact"),

    bindBtns =   function(){

        $aboutBtn.click(function () {
            $aboutSpan
                .slideToggle("slow")
                .toggleClass("visible");
            $aboutPic.fadeTo("fast", 1);

            if ($aboutSpan.hasClass("visible")) {
                $aboutBtn.html("less... ");

            } else {
                $aboutPic.fadeTo("fast", 0.2);
                $aboutBtn.html("more... ");
            }

        });
        $skillsBtn.click(function () {
            $moreSkills
                .slideToggle("slow")
                .toggleClass("visible");

            if ($moreSkills.hasClass("visible")) {
                $skillsBtn.html("less... ");
            } else {
                $skillsBtn.html("more... ");
            }

        });
        $servicesBtn.click(function () {
            $moreServices
                .slideToggle("slow")
                .toggleClass("visible");

            if ($moreServices.hasClass("visible")) {
                $servicesBtn.html("less... ");
            } else {
                $servicesBtn.html("more... ");
            }

        });
        $blogBtn.click(function () {
            $moreBlog
                .slideToggle("slow")
                .toggleClass("visible");

            if ($moreBlog.hasClass("visible")) {
                $blogBtn.html("less... ");
            } else {
                $blogBtn.html("more... ");
            }

        });
        $readMore1.click(function () {
            $morePost1
                .slideToggle("slow")
                .toggleClass("visible");

            if ($morePost1.hasClass("visible")) {
                $readMore1.html("read less... ");
            } else {
                $readMore1.html("read more... ");
            }

        });
        $readMore2.click(function () {
            $morePost2
                .slideToggle("slow")
                .toggleClass("visible");

            if ($morePost2.hasClass("visible")) {
                $readMore2.html("read less... ");
            } else {
                $readMore2.html("read more... ");
            }

        });

        $readMore3.click(function () {
            $morePost3
                .slideToggle("slow")
                .toggleClass("visible");

            if ($morePost3.hasClass("visible")) {
                $readMore3.html("read less... ");
            } else {
                $readMore3.html("read more... ");
            }

        });


        $portBtn.click(function () {
            $morePort
                .slideToggle("slow")
                .toggleClass("visible");

            if ($morePort.hasClass("visible")) {
                $portBtn.html("less... ");
            } else {
                $portBtn.html("more... ");
            }

        });
        $contactBtn.click(function () {
            $moreContact
                .slideToggle("slow")
                .toggleClass("visible");

            if ($moreContact.hasClass("visible")) {
                $contactBtn.html("less... ");
            } else {
                $contactBtn.html("more... ");
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

            bindBtns();
            arrowUp();

    }//init

    ;


    window.addEventListener("load", init);
})();