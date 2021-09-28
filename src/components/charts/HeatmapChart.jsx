import React from 'react'
import { ResponsiveHeatMap } from "@nivo/heatmap";


const LineChart = ({ series }) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [chartData, setChartData] = useState(options);

    useEffect(() => {
        setChartData({
            ...chartData,
            
        })
    }, []);



    return (
        <ResponsiveHeatMap
            data={chartData}
            keys={months}
            indexBy="year"
            cellShape={isPercentage ? PercentageCell : CustomCell}
            margin={{ top: 60, right: 15, bottom: 15, left: 60 }}
            tooltipFormat={isPercentage ? n => `${Math.round(n)}%` : displayNumberFormatter}
            forceSquare={true}
            axisTop={{
                orient: "top",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -55,
                legend: "",
                legendOffset: 36,
            }}
            colors="GnBu"
            axisRight={null}
            axisBottom={null}
        />
    )
}

export default HeatmapChart
