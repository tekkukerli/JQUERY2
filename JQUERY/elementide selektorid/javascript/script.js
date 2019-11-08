$(function () {
    // //HTML elemendi järgi valimine
    // $("p").css("background-color", "rgba(180, 180, 30, 0.8)");

    // //CSS klassi järgi valimine
    // //tulemusena punane kast highlighted
    // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");

    // //CSS id järgi valimine
    // //tulemusena on nimekiri highlighted
    // $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");

    // //valime kõik input elemendid mille type on text [vahele]
    // //tulemusena esimene input highlighted
    // $("input[type=text]").css("background-color", "rgba(180, 180, 30, 0.8)");
    
    //mitme elemendi valik 
    // $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");

    // //eraldan listi esimese elemendi
    // //:first valitakse esimene listi element
    // $("li:first").css("background-color", "rgba(180, 180, 30, 0.8)");
    // //:last valib viimase elemendi
    // $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
    // //input type text esiletõstmine JQuery selektoriga
    // $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)");

   
    // //leiame kõik li elemendid find abil ja tõstame nad esile
    // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");

    // //leiame li elemendid findi abil children() ja tõstame nad esile 
    // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)"); 

    // //leiame kõik nimekirjaga seotud "vanem" elemendid parents() abil
    // $("#list").parents().css("background-color", "rgba(180, 180, 30, 0.8)");

    // //täpsustada saab millist vanemelementi me otsime- näiteks div
    // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");

    // //kui soovime leida ühe vanema nt. content id-ga divi
    // $("#content").parent().css("background-color", "rgba(180, 180, 30, 0.8)");

    // //siblings element ehk samal tasemel element, mõlemal samad vanemad, kui ei ole sama mis $("") sees markeeritud
    // $("#list").siblings().css("background-color", "rgba(180, 180, 30, 0.8)");

    // //täpsustamiseks määrame JQuery selektoriga või HTML selektoriga
    // //siblings hulgast valitakse kõik võimalikud pealkirjad
    // $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)");

    // //samamoodi saab valida eelmise elemendi
    // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
    // //või järgmine element
    // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");

    // //leitud elementidest filtreerime kõik paariselemendid (0,2,4,6,8,10)
    // $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");

    //ülesanne
    // $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");

    // //funktsiooni abil filtreerimine
     //$("li").filter(function(index) {
         //funktsioon võtab elemendi järjekorra numbri ja proovib jagada 3-ga
         //ning vaadata milline on jääk pärast jagamist
       //  return index % 3 ===1;
         //kui jääk on 1 - siis filtreerime elemendi
     //}).css("background-color", "rgba(180, 180, 30, 0.8)");

    // //ülesanne
    // $("li").filter(function(index) {
    //     return index % 3 === 2; 
    // }).css("background-color", "rgba(180, 180, 30, 0.8)");

    // //ainult nimekirja esimene elemendi leidmine
    // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
    // //nimekirja viimase elemendi leidmine
    // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");

    // //konkreetse elemendi valimine indeksi abil, indeksid algavad 0st
    // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");

    // //valime kõik elemendi v.a. esimene
    // $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8");

/*    //ülesanne
     $("li").not(":even").filter(function(index) {
        // return index % 3 ===2;
     }).css("background-color", "rgba(180, 180, 30, 0.8)");*/

   // $("#list")
      //  .children("li")
        //.css("background-color", "rgba(180, 180, 30, 0.8")
        //.children("ul")
        //.children("li")
       // .not(":odd")
        //.css("background-color", "rgba(180, 180, 30, 0.8");


    // $("li").not(function(index){
    //     funktsioon võtab parameetriga elemendi järjekorra numbri
    //     proovib seda jagada 3-ga, vaatab jääki
    //    return index % 3 === 2;
    //     kui jääk on 2-filteerime elemendi
    // }).css("background-color", "rgba(180, 180, 30, 0.8");


});
