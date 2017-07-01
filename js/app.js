$(function() {

    // navigation set section

    var navButtons = $(".navigation__menu > .navigation__menu-item");
    var sections = $(".section-container").find("section");

    $(sections[0]).css("display", "block");
    $(navButtons[0]).css("color", "white");

    function setSection(position) {

        $(sections).each(function(index, element) {
            $(element).css("display", "none");
        });

        $(navButtons).each(function(index, element) {
            $(navButtons).css("color", "rgba(0, 0, 0, 0.4)");
        });

        $(sections[position]).css("display", "block");
        $(navButtons[position]).css("color", "white");
    }

    $(navButtons).each(function(index, element) {
        $(element).on("click", function(event) {

            setSection(index);

        });
    });


    // gallery filters

    var filterItems = $(".galerry__projects__lists > .gallery__project");
    var filterTag = $(".gallery__tags > .gallery_tag");

    $(filterTag).each(function(i, e) {
        $(e).addClass("active-tag");
    });

    function filterGallery() {

        $(event.target).toggleClass("active-tag");

        var x = $(event.target).data("filter");
        var y = ($(event.target).hasClass("active-tag")) ? "block" : "none";

        $(filterItems).each((i, e) => {

            if ($(e).data("sort") === x) {

                $(e).css("display", y);
            }
        });
    }

    $(filterTag).each(function(index, element) {

        $(element).on("click", function(event) {
            filterGallery();

        });
    });

});
