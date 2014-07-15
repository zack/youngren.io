(function() {
  var generate_charts, start;

  start = (function(_this) {
    return function() {
      return $.ajax({
        url: '/data/skater_data.json',
        async: false,
        success: function(data) {
          return generate_charts(data);
        }
      });
    };
  })(this);

  generate_charts = (function(_this) {
    return function(data) {
      var apprentices, chart, members;
      members = data['Members']['Chars'];
      apprentices = data['Apprentices']['Chars'];
      members.unshift('Members');
      apprentices.unshift('Apprentices');
      chart = c3.generate({
        bindto: '#chart-characters',
        size: {
          width: 900
        },
        data: {
          columns: [members, apprentices],
          type: 'bar'
        },
        bar: {
          width: {
            ratio: 1
          }
        },
        tooltip: {
          format: {
            title: function(d) {
              return d + ' Character(s)';
            },
            value: function(v) {
              return v + '%';
            }
          }
        },
        axis: {
          x: {
            label: {
              text: 'Number of Characters',
              position: 'outer-center'
            }
          },
          y: {
            label: {
              text: 'Percentage of Skaters',
              position: 'outer-middle'
            }
          }
        },
        color: {
          pattern: ['pink', '#DDD']
        }
      });
      members = data['Members']['Syllables'];
      apprentices = data['Apprentices']['Syllables'];
      members.unshift('Members');
      apprentices.unshift('Apprentices');
      return chart = c3.generate({
        bindto: '#chart-syllables',
        size: {
          width: 900
        },
        data: {
          columns: [members, apprentices],
          type: 'bar'
        },
        bar: {
          width: {
            ratio: 1
          }
        },
        tooltip: {
          format: {
            title: function(d) {
              return d + ' Syllable(s)';
            },
            value: function(v) {
              return v + '%';
            }
          }
        },
        axis: {
          x: {
            label: {
              text: 'Number of Syllables',
              position: 'outer-center'
            }
          },
          y: {
            label: {
              text: 'Percentage of Skaters',
              position: 'outer-middle'
            }
          }
        },
        color: {
          pattern: ['pink', '#DDD']
        }
      });
    };
  })(this);

  start();

}).call(this);
