const getDefaultCharts = () => {
    console.log("in getDefaultCharts")
    const savedCharts = localStorage.getItem("saved-charts");
  
    if (savedCharts) {
        console.log("there are saved charts")
      try {
        const fromStorage = JSON.parse(savedCharts);
        return fromStorage;
      } catch {}
    }
    console.log("no charts saved, return default")
    return [
        {
            name: 'Example Chart 1',
            series:[1, 2, 3, 4, 5, 6],
            categories: ['01-2010','02-2010','03-2010','04-2010','05-2010','06-2010'],
            type: 'line',
        },
        {
            name: 'Example Chart 2',
            series: [10, 20, 30, 25, 35, 20],
            categories: ['01-2010','02-2010','03-2010','04-2010','05-2010','06-2010'],
            type: 'line',
        },
    ]
}