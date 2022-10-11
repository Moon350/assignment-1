function test_print() {

    console.log(“test code”)

}
$(function() {
   //Get 
    $('#get-button').on('click', function () {
        $.ajax({
            url: '/tweets',
            contentType: 'application/json',
            success: function (response) {
                var tbodyEl = $('#namebody');

                tbodyEl.html('');

                response.tweetinfo.forEach(function (tweetinfo) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + tweetinfo.user.id + '</td>\
                            <td class="screen_name">' + tweetinfo.user.screen_name + '</td>\
                            <td class="name">' + tweetinfo.user.name + '</td>\
                        </tr>\
                    ');
                });
            }
        });
        //TODO: get all users' IDs & display it
    });


    //Get tweets
    $('#get-tweets-button').on('click', function(){
        //TODO: get tweet info and display it
        $.ajax({
            url: '/tweetinfo',
            contentType: 'application/json',
            success: function (response) {
                var tbodyEl = $('#tweetbody');

                tbodyEl.html('');

                response.tweetinfo.forEach(function (tweetinfo) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + tweetinfo.id + '</td>\
                            <td class= "tweets" > ' + tweetinfo.text + '</td >\
                            <td class="date created">' + tweetinfo.created_at + '</td>\
                        </tr>\
                    ');
                });
            }
        });
    });

    //Get searched tweets
    $('#get-searched-tweets').on('click', function() {
        //TODO: get a searched tweet(s) & display it
        $.ajax({
            url: '/searchinfo',
            contentType: 'application/json',
            success: function (response) {
                var tbodyEl = $('#searchbody');

                tbodyEl.html('');

                response.tweetinfo.forEach(function (tweetinfo) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="searched">' + tweetinfo.user.id + '</td>\
                        </tr>\
                    ');
                });
            }
        });
    });


  //CREATE
  $('#create-form').on('submit', function(event){
        event.preventDefault();

        var createInput = $('#create-input');

      //TODO: creat a tweet
      $.ajax({
          url: '/tweetinfo',
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({ name: createInput.val() }),
          success: function (response) {
              console.log(response);
              createInput.val('');
              $('#get-button').click();
          }

      })

  });

    //Create searched tweets
  $('#search-form').on('submit', function(event){
    event.preventDefault();
    var userID = $('#search-input');
    
    //TODO: search a tweet and display it.

  });

  //UPDATE/PUT
  $("#update-user").on('submit', function(event){
      event.preventDefault();
    var updateInput = $('#update-input');
    var inputString = updateInput.val();

    const parsedStrings = inputString.split(';');

    var name = parsedStrings[0];
    var newName = parsedStrings[1];
    
    //TODO: update a tweet
    $.ajax({
        url: '/tweets/' + name,
        method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify({ newName: newName }),
        success: function (response) {
            console.log(response);
            $('#get-button').click();
        }
    });
  });


  //DELETE
  $("#delete-form").on('submit', function() {
    var id = $('#delete-input')
    event.preventDefault();

    //TODO: delete a tweet

  });


});


                    
   