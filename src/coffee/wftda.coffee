start = () =>
  $.ajax({
    url: '/data/skater_data',
    async: false,
    success: (data) => generate_charts(data)
  })

generate_charts = (data) =>
  console.log data

start()
