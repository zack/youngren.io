start = () =>
  $.ajax({
    url: '/data/skater_data.json',
    async: false,
    success: (data) => generate_charts(data)
  })

generate_charts = (data) =>

  members = data['Members']['Chars']
  apprentices = data['Apprentices']['Chars']
  members.unshift('Members')
  apprentices.unshift('Apprentices')

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
  })

  members = data['Members']['Syllables']
  apprentices = data['Apprentices']['Syllables']
  members.unshift('Members')
  apprentices.unshift('Apprentices')

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
  })

start()
