start = () =>
  $.ajax({
    url: '/data/skater_data.json',
    async: false,
    success: (data) => generate_charts(data)
  })

generate_charts = (data) =>

  members = ['Member League Skaters', 0].concat(data['Members']['Chars'])
  apprentices = ['Apprentice League Skaters', 0].concat(data['Apprentices']['Chars'])

  chart = c3.generate({
    bindto: '#chart-characters',
    size: {width: 900},
    data: {
      columns: [
        members,
        apprentices
      ],
      type: 'bar'
    },
    bar: {
      width: {
        ratio: 1
      }
    },
    tooltip: {
      format: {
        title: (d) -> d + ' Character(s)',
        value: (v) -> v + '%'
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
  })

  members = ['Members League Skaters'].concat(data['Members']['Syllables'])
  apprentices = ['Apprentice League Skaters'].concat(data['Apprentices']['Syllables'])

  chart = c3.generate({
    bindto: '#chart-syllables',
    size: {width: 900},
    data: {
      columns: [
        members,
        apprentices
      ],
      type: 'bar'
    },
    bar: {
      width: {
        ratio: 1
      }
    },
    tooltip: {
      format: {
        title: (d) -> d + ' Syllable(s)',
        value: (v) -> v + '%'
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
  })

start()
