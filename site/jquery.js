$(document).ready(function() {

      if ($(window).width() > 760) {
        $(".dropdown-menu").show();
        $("#cross").hide();
        $("#menu").hide();
      } else {
        $("#menu").show();
        $("#cross").hide();
        $(".dropdown-menu").hide();
        $("#menu").click(function() {
          $(".dropdown-menu").slideToggle(function() {
            $("#menu").hide();
            $("#cross").show();
          });
        });

        $("#cross").click(function() {
          $(".dropdown-menu").slideToggle(function() {
            $("#cross").hide();
            $("#menu").show();
          });
        });
      }

      $('.work-container').waypoint(function() {
        $(".container-one").css({
          opacity: "1",
          marginTop: "0",
          top: "-80px"
        });
      }, {
        offset: 800
      });

      $('.main-cover').waypoint(function() {
        $(".fadeup").css({
          opacity: "1",
          marginTop: "0",
          top: "0px"
        });
      }, {
        offset: 10
      });


      });
