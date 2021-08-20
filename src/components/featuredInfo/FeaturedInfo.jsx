import React from 'react'

import styled from "styled-components";
import './featuredInfo.css'
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBump } from '@nivo/bump'
import ButtonAdd from "../others/ButtonAdd"

function FeaturedInfo() {
    const lineData = [
        {
            "id": "japan",
            "color": "hsl(248, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 10
                },
                {
                    "x": "helicopter",
                    "y": 190
                },
                {
                    "x": "boat",
                    "y": 205
                },
                {
                    "x": "train",
                    "y": 186
                },
                {
                    "x": "subway",
                    "y": 171
                },
                {
                    "x": "bus",
                    "y": 97
                },
                {
                    "x": "car",
                    "y": 259
                },
                {
                    "x": "moto",
                    "y": 178
                },
                {
                    "x": "bicycle",
                    "y": 129
                },
                {
                    "x": "horse",
                    "y": 235
                },
                {
                    "x": "skateboard",
                    "y": 246
                },
                {
                    "x": "others",
                    "y": 226
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(356, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 50
                },
                {
                    "x": "helicopter",
                    "y": 273
                },
                {
                    "x": "boat",
                    "y": 83
                },
                {
                    "x": "train",
                    "y": 216
                },
                {
                    "x": "subway",
                    "y": 256
                },
                {
                    "x": "bus",
                    "y": 110
                },
                {
                    "x": "car",
                    "y": 217
                },
                {
                    "x": "moto",
                    "y": 51
                },
                {
                    "x": "bicycle",
                    "y": 51
                },
                {
                    "x": "horse",
                    "y": 21
                },
                {
                    "x": "skateboard",
                    "y": 217
                },
                {
                    "x": "others",
                    "y": 64
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(285, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 50
                },
                {
                    "x": "helicopter",
                    "y": 125
                },
                {
                    "x": "boat",
                    "y": 194
                },
                {
                    "x": "train",
                    "y": 42
                },
                {
                    "x": "subway",
                    "y": 199
                },
                {
                    "x": "bus",
                    "y": 211
                },
                {
                    "x": "car",
                    "y": 98
                },
                {
                    "x": "moto",
                    "y": 69
                },
                {
                    "x": "bicycle",
                    "y": 195
                },
                {
                    "x": "horse",
                    "y": 282
                },
                {
                    "x": "skateboard",
                    "y": 184
                },
                {
                    "x": "others",
                    "y": 83
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(271, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 259
                },
                {
                    "x": "helicopter",
                    "y": 280
                },
                {
                    "x": "boat",
                    "y": 289
                },
                {
                    "x": "train",
                    "y": 238
                },
                {
                    "x": "subway",
                    "y": 203
                },
                {
                    "x": "bus",
                    "y": 2
                },
                {
                    "x": "car",
                    "y": 278
                },
                {
                    "x": "moto",
                    "y": 250
                },
                {
                    "x": "bicycle",
                    "y": 288
                },
                {
                    "x": "horse",
                    "y": 285
                },
                {
                    "x": "skateboard",
                    "y": 115
                },
                {
                    "x": "others",
                    "y": 149
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(241, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 140
                },
                {
                    "x": "helicopter",
                    "y": 106
                },
                {
                    "x": "boat",
                    "y": 297
                },
                {
                    "x": "train",
                    "y": 123
                },
                {
                    "x": "subway",
                    "y": 218
                },
                {
                    "x": "bus",
                    "y": 288
                },
                {
                    "x": "car",
                    "y": 189
                },
                {
                    "x": "moto",
                    "y": 55
                },
                {
                    "x": "bicycle",
                    "y": 266
                },
                {
                    "x": "horse",
                    "y": 116
                },
                {
                    "x": "skateboard",
                    "y": 19
                },
                {
                    "x": "others",
                    "y": 101
                }
            ]
        }
    ]

    const bumpData = [
        {
          "id": "Serie 1",
          "data": [
            {
              "x": 2000,
              "y": 3
            },
            {
              "x": 2001,
              "y": 7
            },
            {
              "x": 2002,
              "y": 2
            },
            {
              "x": 2003,
              "y": 10
            },
            {
              "x": 2004,
              "y": 4
            }
          ]
        },
        {
          "id": "Serie 2",
          "data": [
            {
              "x": 2000,
              "y": 2
            },
            {
              "x": 2001,
              "y": 4
            },
            {
              "x": 2002,
              "y": 12
            },
            {
              "x": 2003,
              "y": 3
            },
            {
              "x": 2004,
              "y": 1
            }
          ]
        },
        {
          "id": "Serie 3",
          "data": [
            {
              "x": 2000,
              "y": 7
            },
            {
              "x": 2001,
              "y": 3
            },
            {
              "x": 2002,
              "y": 8
            },
            {
              "x": 2003,
              "y": 12
            },
            {
              "x": 2004,
              "y": 10
            }
          ]
        },
        {
          "id": "Serie 4",
          "data": [
            {
              "x": 2000,
              "y": 4
            },
            {
              "x": 2001,
              "y": 12
            },
            {
              "x": 2002,
              "y": 7
            },
            {
              "x": 2003,
              "y": 7
            },
            {
              "x": 2004,
              "y": 2
            }
          ]
        },
        {
          "id": "Serie 5",
          "data": [
            {
              "x": 2000,
              "y": 12
            },
            {
              "x": 2001,
              "y": 10
            },
            {
              "x": 2002,
              "y": 6
            },
            {
              "x": 2003,
              "y": 4
            },
            {
              "x": 2004,
              "y": 9
            }
          ]
        },
        {
          "id": "Serie 6",
          "data": [
            {
              "x": 2000,
              "y": 10
            },
            {
              "x": 2001,
              "y": 9
            },
            {
              "x": 2002,
              "y": 3
            },
            {
              "x": 2003,
              "y": 1
            },
            {
              "x": 2004,
              "y": 3
            }
          ]
        },
        {
          "id": "Serie 7",
          "data": [
            {
              "x": 2000,
              "y": 1
            },
            {
              "x": 2001,
              "y": 11
            },
            {
              "x": 2002,
              "y": 1
            },
            {
              "x": 2003,
              "y": 6
            },
            {
              "x": 2004,
              "y": 8
            }
          ]
        },
        {
          "id": "Serie 8",
          "data": [
            {
              "x": 2000,
              "y": 5
            },
            {
              "x": 2001,
              "y": 1
            },
            {
              "x": 2002,
              "y": 10
            },
            {
              "x": 2003,
              "y": 2
            },
            {
              "x": 2004,
              "y": 7
            }
          ]
        },
        {
          "id": "Serie 9",
          "data": [
            {
              "x": 2000,
              "y": 9
            },
            {
              "x": 2001,
              "y": 6
            },
            {
              "x": 2002,
              "y": 11
            },
            {
              "x": 2003,
              "y": 8
            },
            {
              "x": 2004,
              "y": 12
            }
          ]
        },
        {
          "id": "Serie 10",
          "data": [
            {
              "x": 2000,
              "y": 8
            },
            {
              "x": 2001,
              "y": 2
            },
            {
              "x": 2002,
              "y": 9
            },
            {
              "x": 2003,
              "y": 5
            },
            {
              "x": 2004,
              "y": 6
            }
          ]
        },
        {
          "id": "Serie 11",
          "data": [
            {
              "x": 2000,
              "y": 6
            },
            {
              "x": 2001,
              "y": 5
            },
            {
              "x": 2002,
              "y": 5
            },
            {
              "x": 2003,
              "y": 11
            },
            {
              "x": 2004,
              "y": 5
            }
          ]
        },
        {
          "id": "Serie 12",
          "data": [
            {
              "x": 2000,
              "y": 11
            },
            {
              "x": 2001,
              "y": 8
            },
            {
              "x": 2002,
              "y": 4
            },
            {
              "x": 2003,
              "y": 9
            },
            {
              "x": 2004,
              "y": 11
            }
          ]
        }
    ]

    return (
        <div className='featured'>
            <div className="featuredItem">
                <h3>Flights from POA to GRU</h3>
                <ChartContainer>
                    <ResponsiveLine
                        data={lineData}
                        margin={{ top: 35, right: 50, bottom: 85, left: 50 }}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'transportation',
                            legendOffset: 36,
                            legendPosition: 'middle'
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'count',
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 0,
                                translateY: 76,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 89,
                                itemHeight: 10,
                                itemOpacity: 0.75,
                                symbolSize: 14,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </ChartContainer>
            </div>

            <div className="featuredItem">
                <h3>Bump Chart</h3>
                <ChartContainer>
                    <ResponsiveBump
                        data={bumpData}
                        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
                        colors={{ scheme: 'spectral' }}
                        lineWidth={3}
                        activeLineWidth={6}
                        inactiveLineWidth={3}
                        inactiveOpacity={0.15}
                        pointSize={10}
                        activePointSize={16}
                        inactivePointSize={0}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={3}
                        activePointBorderWidth={3}
                        pointBorderColor={{ from: 'serie.color' }}
                        axisTop={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: '',
                            legendPosition: 'middle',
                            legendOffset: -36
                        }}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: '',
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'ranking',
                            legendPosition: 'middle',
                            legendOffset: -40
                        }}
                    />

                </ChartContainer>

            </div>
            <ButtonAdd />
        </div>
    )
}

export default FeaturedInfo

const ChartContainer = styled.div`
  height: 370px;
`;