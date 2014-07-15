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
      members = ['Member League Skaters', 0].concat(data['Members']['Chars']);
      apprentices = ['Apprentice League Skaters', 0].concat(data['Apprentices']['Chars']);
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
            },
            min: 1,
            max: 4
          },
          y: {
            label: {
              text: 'Percentage of Skaters',
              position: 'outer-middle'
            }
          }
        }
      });
      members = ['Members League Skaters'].concat(data['Members']['Syllables']);
      apprentices = ['Apprentice League Skaters'].concat(data['Apprentices']['Syllables']);
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
            },
            tick: {
              culling: {
                max: 1
              }
            },
            min: 1,
            max: 11
          },
          y: {
            label: {
              text: 'Percentage of Skaters',
              position: 'outer-middle'
            }
          }
        }
      });
    };
  })(this);

  start();

}).call(this);
