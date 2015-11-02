$.ajax({
        url:'candidates.json',
        dataType:'json',
        success:function(data) {
          data.forEach(function(datum) {
          var name = datum.Name;
          var username = datum.candidate.split('@')[0];
          $("#candidates").append('<li><a href="http://ec2-54-251-140-208.ap-southeast-1.compute.amazonaws.com/~'+username+'"'+'>'+name+'</a></li>');
        });
      }
    });
