$(function() {

   // navigation set section

   var navButtons = $(".navigation__menu > .navigation__menu-item");
   var sections = $(".section-container").find("section");

   $(sections[0]).css("display", "block");
   $(navButtons[0]).css("color", "white");

   function setSection(position){

      $(sections).each(function(index, element){
         $(element).css("display", "none");
      });

      $(navButtons).each(function(index, element){
         $(navButtons).css("color", "rgba(0, 0, 0, 0.4)");
      });

      $(sections[position]).css("display", "block");
      $(navButtons[position]).css("color", "white");
   };

   $(navButtons).each(function(index, element){
     $(element).on("click", function(event){

       setSection(index);

     });
   });


});
