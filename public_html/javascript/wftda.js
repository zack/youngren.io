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
          width: 710
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
      chart = c3.generate({
        bindto: '#chart-syllables',
        size: {
          width: 710
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
      members = data['Members']['Letters'];
      apprentices = data['Apprentices']['Letters'];
      console.log(members);
      return chart = c3.generate({
        bindto: '#chart-letters',
        size: {
          width: 710
        },
        data: {
          columns: [['0 Letters - Members', 0].concat(members[0]), ['1 Letter - Members', 0].concat(members[1]), ['2 Letters - Members', 0].concat(members[2]), ['3 Letters - Members', 0].concat(members[3]), ['0 Letters - Apprentices', 0].concat(apprentices[0]), ['1 Letter - Apprentices', 0].concat(apprentices[1]), ['2 Letters - Apprentices', 0].concat(apprentices[2]), ['3 Letters - Apprentices', 0].concat(apprentices[3])],
          type: 'bar',
          groups: [['0 Letters - Members', '1 Letter - Members', '2 Letters - Members', '3 Letters - Members'], ['0 Letters - Apprentices', '1 Letter - Apprentices', '2 Letters - Apprentices', '3 Letters - Apprentices']]
        },
        bar: {
          width: {
            ratio: 1
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
        },
        color: {
          pattern: ['#1F77B4', '#4C99CF', '#84BFE8', '#C4E7FF', '#FF7F0E', '#FF9940', '#FFB573', '#FFD0A6']
        }
      });
    };
  })(this);

  start();

}).call(this);
