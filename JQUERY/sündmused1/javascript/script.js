$(function() {

    // $("#btn-click").click(function(event) {
    //     alert("Vajutasid nupule");
    //     console.log(event);
    // });

    //ül 1
    // $(".red-box").click(function() {
    //     $(".red-box").fadeTo(500, 0.2, function() {
    //         //animation complete
    //     });
    // });

    // $(".green-box").click(function() {
    //     $(".green-box").fadeTo(500, 0.5, function() {
    //         //animation complete
    //     });
    // });

    // $(".blue-box").click(function() {
    //     $(".blue-box").fadeTo(500, 0.8, function() {
    //         //animation complete
    //     });
    // });

    // $("#btn-hover").hover(function() {
    //     alert("Nupu peale oli hõljutud");
    // });

    //ül 2
    // $(".green-box").hover(function() {
    //     $(".green-box").text("Hiir on peal");
    // });

    
    // var blueBox = $(".blue-box");
    // blueBox.mouseenter(function() {
    //     $(this).fadeTo(500, 0.7);
    // });
    // blueBox.mouseleave(function() {
    //     $(this).fadeTo(500, 1);
    // });

    //ül 3
    // var blueBox = $(".blue-box");
    // blueBox.hover(function(){
    //     $(this).fadeTo(500, 0.7);
    // }, function(){
    //     $(this).fadeTo(500, 1);
    // });

    // $("html").on("click keydown hover", function(){
    //     console.log("Toimus hiire klõps või klahvi vajutus.");
    // });

    //ül 4 
    
    // var images = [
    //     "images/laptop-mobile_small.jpg",
    //     "images/laptop-on-table_small.jpg",
    //     "images/people-office-group-team_small.jpg"
    // ];
    // var i = 0;
    // $(".gallery").find("img").on("click", function(){         //kliki peale leiab pildi
    //     i = (i + 1) % images.length;                          //valib järgmise pildi
    //     $(this).fadeOut(function () {                         //hajutab pidi välja
    //         $(this).attr("src", images[i]).fadeIn();          //hajutab järgmise pildi sisse
    //     });
    // });  

    // function logEvent(){
    //     console.log("Toimus hiirega klõpsamine või klahvi vajutus");
    // }
    // $("html").on("click keydown", logEvent);

    //ül 5 modulaarsus
    //  var images = [
    //     "images/laptop-mobile_small.jpg",
    //     "images/laptop-on-table_small.jpg",
    //     "images/people-office-group-team_small.jpg"
    // ];
    // var i = 0;
    // var galleryImage = $(".gallery").find("img");
    // galleryImage.on("click", switchToNextImage);

    // function switchToNextImage(){
    //     i = (i + 1) % images.length;
    //     galleryImage.fadeOut(function(){
    //         galleryImage.attr("src", images[i]).fadeIn();
    //     });
    // }


    // $("p").click(function(){
    //     $(this).slideUp();
    // });
    // $("#content").append("<p>Dünaamiliselt lisatud paragrahv</p>");
    
        // $("#content").on("click", "p", function(){
        //     $(this).slideUp();
        // });
        // $("#content").append("<p>Dünaamiliselt lisatud paragrahv</p>");

    //ül 6
    // $("ul#list li").hover(function() {
    //     $("ul#list li").css("color", "rgb(102, 102, 102)");
    // });


    // $("#btn-click").click({
    //     user: "Kerli"
    // }, function(event){
    //     greetUser(event.data);
    // });

    // function greetUser(userdata){
    //     console.log(userdata);
    //     username = userdata.user || "Anonüüm";
    //     alert("Tere tulemast " + username + "!");
    // }

    //ül 7
    // $("#btn-click").click({
    //     user: "Kerli",
    //     domain: "khk.ee"
    // }, function(event){
    //     greetUser(event.data);
    // });

    // function greetUser(userdata){
    //     console.log(userdata);
    //     username = userdata.user || "Anonüüm";
    //     domain = userdata.domain || "example.com";
    //     alert("Tere tulemast " + username + " " + domain + "-st !");
    // }

   //koondülesanne
//    var galleryItems = $(".gallery").find("img");
//    galleryItems.css("width", "33%").css("opacity", "0.7");
   
//    galleryItems.mouseenter(function(){
//        $(this).stop().fadeTo(500, 1);
//    });

//    galleryItems.mouseleave(function(){
//        $(this).stop().fadeTo(500, 0.7);
//    });

//    galleryItems.click(function(){
//        var source = $(this).attr("src");
//        var image = $("<img>").attr("src", source).css("width", "100%");
//        $(".lightbox").empty().append(image).fadeIn(2000);
//    });

//    $(".lightbox").click(function(){
//        $(this).stop().fadeOut();
//    });


    //       $("html").keydown(function(event){
    //           console.log(event.which);
    //       });
    

    var ARROW_RIGHT = 39;
    $("html").keydown(function(event){
        if(event.which == ARROW_RIGHT){
            var blueBox = $(".blue-box");
            blueBox.stop().animate({
                "margin-left": "+=10px"
            }, 500);
            console.log(event.which);
            console.log(blueBox.css("margin-left"));
        }
    });
   







});