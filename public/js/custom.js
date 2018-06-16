(function(){
      var words = [
          'Developer',
          'Traveler',
          'Designer',
          'Leader',
          'Innovator',
          'Dreamer'
          ], i = 1;
      setInterval(function(){
          $('#changingword').fadeOut(function() {
              $(this).html(words[i%words.length]).fadeIn();
              if(words[i%words.length] == "Innovator") {
                $('#changinga').fadeOut(function() {
                  $(this).html("an*").fadeIn();
                });
              } else if(words[i%words.length] == "Dreamer") {
                $('#changinga').fadeOut(function() {
                  $(this).html("a").fadeIn();
                });
              }
              i = i + 1;
          });
      }, 2500);

  })();
