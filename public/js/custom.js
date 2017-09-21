(function(){
      var words = [
          'Developer',
          'Traveler',
          'Designer',
          'Leader',
          'Innovator',
          'Dreamer'
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 2500);

  })();
