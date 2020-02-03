$(document).ready(function() {

  // ALL ALBUM DEFAULT
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data, state) {
      var arrayAlbum = data.response;
      for (var i = 0; i < arrayAlbum.length; i++) {
        var album = arrayAlbum[i];
        // HANDLEBARS
        var source = $('#entry-template').html();
        var template = Handlebars.compile(source);
        var context = album;
        var html = template(context);
        $('.cds-container').append(html);
      }
    },
    error: function(request, state, error) {
      console.log(error);
    }
  });

  ////////////////////
  // FILTER
  ////////////////////

  // FILTER GENRE OPTION VALUE
  var genre = $('.filter .filter-genre').val();

  // CHANGE ALBUM FROM GENRE FILTER VALUE
  $(document).on('change', '.filter .filter-genre', function() {
    genre = $(this).val();

    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function(data, state) {
        $('.cds-container.container').text('');
        var arrayAlbum = data.response;
        for (var i = 0; i < arrayAlbum.length; i++) {
          var album = arrayAlbum[i];
          // HANDLEBARS
          var source = $('#entry-template').html();
          var template = Handlebars.compile(source);
          // SHOW ALBUMS MATCHING GENRE
          if (album.genre === genre) {
            var context = album;
            var html = template(context);
            $('.cds-container').append(html);
          }
          // ELSE ALL DEFAULT
          else if (genre === 'all') {
            var context = album;
            var html = template(context);
            $('.cds-container').append(html);
          }
        }
      },
      error: function(request, state, error) {
        console.log(error);
      }
    });

  });

});
