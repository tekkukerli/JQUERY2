/*eslint-disable no-console*/

$(function() {
    // var redBox = $(".red-box");
    // console.log(redBox.css("width"));
    // console.log(redBox.width());

    // var redBox = $(".red-box");
    // redBox.css("background-color", "#AA7700");
    // $("p").css("font-size", "18px");

    //ül 1
    //  var redBox = $(".red-box");
    //  redBox.css("width", "150px");
    
    //  var greenBox = $(".green-box");
    //  greenBox.css("width", "150px");

    //  var blueBox = $(".blue-box");
    //  blueBox.css("width", "150px");

    // var properties = $("p").css(["font-size", "line-height", "color"]);
    // console.log(properties);
    // console.log(properties["font-size"]);

    //kasutaja ei saa teksti markeerida punasel kastil
    // var redBox = $(".red-box");
    // redBox.css("user-select", "none");

    // $("a").addClass("fancy-link");

    //mitu klassi
    // $("p:first").addClass("large emphasize");

    // $("li li").addClass(function(index) {
    //     $(this).addClass("item-" + index);
    // })

    // $("div").addClass(function(index, currentClass) {
    //     if(currentClass === "dummy") {
    //        $(".dummy").addClass("red-box");
    //     }
    // })

    // $(".red-box").removeClass("red-box");

    //asendamine
    // $(".red-box").removeClass("red-box").addClass("blue-box");

    //ül 2
    // $(".red-box").removeClass("red-box").addClass("blue-box");
    // $(".dummy").removeClass("dummy").addClass("green-box");

    // var gallery = $(".gallery");
    // var images = [
    //     "images/laptop-mobile_small.jpg",
    //     "images/laptop-on-table_small.jpg",
    //     "images/people-office-group-team_small.jpg"
    // ];
    // gallery.data("availableImages", images);
    // console.log(gallery.data("availableImages"));
    // gallery.data("name", "Mingi galerii");
    // console.log(gallery.data());
    // gallery.removeData("name");
    // console.log(gallery.data());

    // var firstPar = $("p:first");
    // console.log(firstPar.data("mydata"));

    //  var firstPar = $("p:first");
    //  console.log(firstPar.text());
    //  console.log(firstPar.html());

     //ül 3
    //  var firstPar = $("p:first");
    //  //firstPar.text("<strong>Tere</strong> Maailm!"); //koodi näitamiseks
    //  firstPar.html("<strong>Tere</strong> Maailm!"); //teksti vahetamiseks

    //ül 4
    var firstPar = $("p:first");
    firstPar.append(function(firstPar) {
        return " See on just lisatud.";
    });







});








