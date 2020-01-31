// Api di Boolean... dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.
// Chiamata: https://flynn.boolean.careers/exercises/api/array/music

$(document).ready(function(){

  // Code

  var url = "https://flynn.boolean.careers/exercises/api/array/music";

  // Chiamata Ajax
  $.ajax(
    {
      url: url,
      method: "GET",
      // SUCCESS
      success: function (data) {
        // console.log(data);
        processData(data.response);
      },
      // ERROR
      error: function () {
        alert("E' avvenuto un errore.");
      }
    }
  );


  //////////////////////////////////////////////////
  // F U N C T I O N S
  //////////////////////////////////////////////////

  function processData(album) {
    for (var i = 0; i < album.length; i++) {
      var singleAlbum = album[i];
      // console.log(singleAlbum);
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var html = template(singleAlbum);
      $('.cds-container').append(html);
    }
  }




//////////
});
