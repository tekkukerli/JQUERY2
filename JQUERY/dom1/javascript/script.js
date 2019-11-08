$(function() {
     //ül 1
    //ees-ja perenimi content ees
    // $("div:first").prepend("Kerli Tekku");

    //teine punane kast
    // $(".red-box").after("<div class='red-box'>Punane 1</div>");

    //veel üks sinine kast ette
    //$(".blue-box").before("<div class='blue-box'>Sinine 0</div>");

    //funktsiooniga vahetamine
    //$(function() {
        //$(".blue-box").before(function() {
            //return "<div class='blue-box'>Sinine 0</div>";
        //});
    //});

    //ül 2
    //$(document).ready(function() {
     //   $(".red-box").before($(".green-box")).replaceWith($(".red-box"));
     //   $(".red-box").before($(".blue-box")).replaceWith($(".red-box"));
    //});


    // ül 3
   // $("li").filter(function(index) {
    //     return index % 3 ===1;
   //}).replaceWith("<li>Asendatud alamelement 1</li>");

    // ül 4
    //$(function() {
    //    $("form").children().not("input:text, textarea, br").remove();
    //});

    // katsetame nüüd detach meetodit
    //$(function() {
     //   var detachedListItem = $("li").detach();
     //   $("#content").append(detachedListItem);
    //});


    //katsetame empty() kustutame esimese p lõigu
    //$(function() {
     //   $("p:first").empty();
    //});

    //ül 5
    //$(function() {
    //   $(".red-box, .green-box, .blue-box").empty();
    //});

    //    var specialLink = $("#special-link");
    //     console.log(specialLink.attr("href"));


   // $("#special-link").attr("href", "https://khk.ee");

    //var checkbox = $("input:checkbox");
   // console.log(checkbox.prop("checked"));
    //console.log(checkbox.attr("checked"));

    //var textinput = $("input:text");
   // console.log(textinput.val());

    //var rangeInput = $("input[type='range']");
    //console.log(rangeInput.val());

    //ÜL 6
    var galeryImage = $(".gallery").find("img").first();
    var images = [
        "images/laptop-mobile_small.jpg",
        "images/laptop-on-table_small.jpg",
        "images/people-office-group-team_small.jpg"
    ];
    var i = 0;
    setInterval(function() {
        i = (i + 1) % images.length;
        galeryImage.fadeOut(function () {
            $(this).attr("src", images[i]);
            $(this).fadeIn();
        });
        console.log(galeryImage.attr("src"));

    }, 2000);










});








