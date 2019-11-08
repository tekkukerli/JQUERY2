$(function () {
    // $("#code").load("mindeioleolemas.php", function(response, status){
    //   if(status == "error"){
    //     alert("Ei leia mindeioleolemas.php faili");
    //   }
    //   console.log(response);
    // });

    // $("#code").load("js/script.js", function(response, status){
    //   if(status == "error"){
    //     alert("Ei leia faili");
    //   }
    //   console.log(response);
    // });
    
    // var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    // $.getJSON(flickrApiUrl, {
    //     //päringut täpsustavad parameetrid
    //     tags: "sun, beach",
    //     tagmode: "any",
    //     format: "json"
    // }).done(function(data){
    //     //mis toimub siis kui kõik on korras
    //     console.log(data);
    //     $.each(data.items, function(index, item){
    //         console.log(item);
    //         $("<img>").attr("src", item.media.m).appendTo("#flickr");
    //         if(index == 4) {
    //             return false;
    //         }
    //     });
    // }).fail(function() {
    //     alert("AJAX päring ei toimi");
    // });

    var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1/";
    var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";
    $.getJSON(pokeapiUrl).done(function(data) {
        console.log(data);
        $.each(data.pokemon_species, function(index, pokemon) {
            var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
            var par = $("<p>").html("Pokemon liik nr " + (index + 1) + " on ").append(link);

            link.click(function(event){
                $.getJSON(pokemonByName + pokemon.name).done(function(details){
                    console.log(details);
                    var pokemonDiv = $("#pokemon-details");
                    pokemonDiv.empty();
                    pokemonDiv.append("<h2>" + name + "</h2>");
                    pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
                    pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
                    pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>");
                    pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");
                });
                event.preventDefault();
            });
            par.appendTo("#pokemon");
        });
    }).fail(function(){
        console.log("Pokeapi ei ole kättesaadav");
    }).always(function(){
        console.log("Pokemon on lahe");
    });






});

