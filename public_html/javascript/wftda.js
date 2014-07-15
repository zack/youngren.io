(function() {
  var generate_charts, start;

  start = (function(_this) {
    return function() {
      return $.ajax({
        url: '/data/skater_data',
        async: false,
        success: function(data) {
          return generate_charts(data);
        }
      });
    };
  })(this);

  generate_charts = (function(_this) {
    return function(data) {
      return console.log(data);
    };
  })(this);

  start();

}).call(this);
