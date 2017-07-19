$(function() {

    // navigation scrolled
    
    var navigation = $(".navigation");
    var headerTitle = $(".header__title");
    var headerHeight = headerTitle.height() + 120;
    var scrolled = "navigation__menu-scrolled";

    var mobile = window.matchMedia ("screen and (max-width: 430px)" );

    $(window).scroll(function() {

        if ( $(this).scrollTop() > headerHeight) {

             navigation.addClass(scrolled);
        
            if (mobile.matches){
                headerTitle.css("padding-bottom", "13em");
            } else {
                headerTitle.css("padding-bottom", "15em");
            }

        } else{

            navigation.removeClass(scrolled);

            if (mobile.matches){
                headerTitle.css("padding-bottom", "2em");
            } else {
                headerTitle.css("padding-bottom", "4.5em");
            }
        }

    });
    

    // burger menu mobile 

    var burgerMenu = $(".navigation__menu-burger");

    function showMobileMenu(event){

        $(navButtons).toggleClass("visible-nav-item");

        // $(navButtons).hasClass("visible-nav-item") ? 
        //     $(this).css("padding-bottom", "2em") : 
        //     $(this).css("padding-bottom", "1em");
    };

    burgerMenu.on("click", showMobileMenu);


    
    // navigation (set section)

    var navButtons = $(".navigation__menu > .navigation__menu-item");
    var sections = $(".section-container").find("section");

    $(sections[0]).css("display", "block");
    $(navButtons[0]).addClass("active-nav-item");

    function setSection(position) {

        $(sections).each(function(index, element) {
            $(element).css("display", "none");
        });

        $(navButtons).each(function(index, element) {
            $(navButtons).removeClass("active-nav-item")
        });

        $(sections[position]).css("display", "block");
        $(navButtons[position]).addClass("active-nav-item");
    }

    $(navButtons).each(function(index, element) {
        $(element).on("click", function(event) {

            setSection(index);

        });
    });

    $(navButtons).on('click', function (e) {
        $('html,body').scrollTop(0);
        $(navButtons).removeClass("visible-nav-item");
    });


    // gallery filters (filtering projects in the gallery)

    var filterItems = $(".galerry__projects__lists > .gallery__project");
    var filterTag = $(".gallery__tags__tag");
    var filterIcon = $(".tag__icon");
    var emptyGallery = $(".empty-gallery");

    $(filterTag).each(function(i, e) {
        $(e).addClass("active-tag");
    });

    function filterGallery(event) {

        $(event.target).children(filterIcon).toggleClass("tag__icon-rotate");
        
        if( !$( event.target ).is( filterIcon )) {
           
           $(event.target).toggleClass("active-tag");
  
            var filterName = $(event.target).data("filter");
            var y = ($(event.target).hasClass("active-tag")) ? "block" : "none";

            $(filterItems).each((i, e) => {

                if ($(e).data("sort") === filterName) {

                    $(e).css("display", y);
                }
            });
        } 
        
        if ( !$(filterTag).hasClass("active-tag") ){
            $(emptyGallery).css("display", "block");
            $(".gallery__projects").css("display", "none");
            
        } else {
            $(emptyGallery).css("display", "none");
            $(".gallery__projects").css("display", "block");
        }
    }

    $(filterTag).on("click", filterGallery);


    // showing modals (showing deatils of projects in the gallery)

    var modals = $(".gallery-modals").find(".modals__item");
    var html = $("html");
    var body = $("body");

    // open window
    filterItems.on("click", function(event) {
        modals.eq(filterItems.index($(this))).addClass("modal-show");
        html.css("overflow", "hidden");
        body.css("overflow", "hidden");
    });

    // close window
    $(".close-window__icon").on("click", function(event) {
        $(this).parent().parent().removeClass("modal-show");
        html.css("overflow", "auto");
        body.css("overflow", "auto");
    });


    //job timeline 

    var items = document.querySelectorAll(".jobs__timeline__job");
    var jobs = document.querySelector(".jobsEducation");
   
   //hide all elements
    Array.from(items).forEach(function(e){
        e.classList.add("is-hidden");
    });    
   
    // check if an element is in viewport
    function isElementInViewport(el) {
        

        if ($(".jobsEducation").attr("style") == "display: block;"){

            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.remove("is-hidden");
                items[i].classList.add("bounce-in");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);


    // arrow-up 

    if ($(".arrowUp").length) {
        var scrollTrigger = 300, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $(".arrowUp").css("visibility", "visible")
                } else {
                    $(".arrowUp").css("visibility", "hidden")
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $(".arrowUp").on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }


});


