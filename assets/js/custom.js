$(document).ready(function() {
    function setHeight() {
      windowHeight = $(window).innerHeight();
      $('.customBanner').css('height', windowHeight);
    };
    setHeight();
    
    $(window).resize(function() {
      setHeight();
    });
    $(window).scroll(function(){
      var scroll1 = $(window).scrollTop();
      
      if (scroll1 > 300) {
          $(".floatBtns").fadeOut();
      } else {
          $(".floatBtns").fadeIn();
          
      }
      if (scroll1 > 600) {
        $(".scrollNav ul").addClass("inverted");
      } else {
          $(".scrollNav ul").removeClass("inverted");
          
      }
    });
  
    /*Fixed header Start*/	
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                $(".header").addClass("header-fixed");
            } else {
                $(".header").removeClass("header-fixed");
            }
        });
    /*Fixed header End*/

   
        /*Scroll To top Start*/

        $(".scrolltotop").hide();
        $(function toTop() {
          $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
              $('.scrolltotop').fadeIn();
            } else {
              $('.scrolltotop').fadeOut();
            }
          });

          $('.scrolltotop').click(function () {
            $('body,html').animate({
              scrollTop: 0
            }, 800);
            return false;
          });
        });			
      /*Scroll To top End*/

        //Smooth scrolling with links
        $('.scrollNav li>a[href*=\\#]').on('click', function(event){     
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        });

        $(".scrollNav li").find("a").click(function(){
          
          $(this).parents("li").addClass("active").find("i").removeClass("fa-circle-thin").addClass("fa-circle");
          $(".scrollNav li").find("a").not(this).parents("li").removeClass("active").find("i").removeClass("fa-circle").addClass("fa-circle-thin");
        });
        
        
        /*Date Time Function Start*/	
        var d = new Date();
        var hours = d.getHours() % 12;
        hours = hours ? hours : 12;
        var test = ("00" + d.getDate()).slice(-2) + " " + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][(d.getMonth())] + ", " + 
        d.getFullYear();
        var test1= ("00" + hours).slice(-2) + ":" + 
        ("00" + d.getMinutes()).slice(-2)  
        + ' ' + (d.getHours() >= 12 ? 'PM' : 'AM') +" "+ "IST";
        if($('#jDate').length > 0){
        
        document.getElementById("jDate").innerHTML = test;
        document.getElementById("jTime").innerHTML = test1;

        }
        /*Date Time Function End*/
        $("#searchHere").keyup(function() {
          if ($.trim($(this).val()).length) {
            $('.searchResult').show();
          } else {
            $('.searchResult').hide();
          }
        });
        $(".searchOpen").click(function(){
          $(".searchPanel").addClass("open");
        });
        $(".searchClose").click(function(){
          $(".searchPanel").removeClass("open");
        });
  });