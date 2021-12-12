import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import * as image from './timeline.png'

export const ChartTemplate = (props) => {
  const series = props.series
  const options = {
    chart: {
      height: 450,
      type: 'rangeBar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%'
      }
    },
    xaxis: {
      type: 'datetime'
    },
    colors: [
      props.color1,
      props.color2,
      props.color3,
      props.color4,
      props.color5,
      props.color6
    ],
    stroke: {
      width: 1
    },
    fill: {
      type: 'solid',
      opacity: 0.6
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    }
  }

  return <Chart options={options} series={series} type='donut' />
}

export const TimelineChartProps = {
  id: '3A3352B0-D3ED-4092-9CDE-FCF74FD08566',
  h: 100,
  w: 100,
  display: 'Timeline Chart',
  description: 'Timeline series for your your historical data representation',
  values: {
    series: [
      {
        name: 'Bob',
        data: [
          {
            x: 'Design',
            y: [
              new Date('2019-03-05').getTime(),
              new Date('2019-03-08').getTime()
            ]
          },
          {
            x: 'Code',
            y: [
              new Date('2019-03-02').getTime(),
              new Date('2019-03-05').getTime()
            ]
          },
          {
            x: 'Code',
            y: [
              new Date('2019-03-05').getTime(),
              new Date('2019-03-07').getTime()
            ]
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-03').getTime(),
              new Date('2019-03-09').getTime()
            ]
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-08').getTime(),
              new Date('2019-03-11').getTime()
            ]
          },
          {
            x: 'Validation',
            y: [
              new Date('2019-03-11').getTime(),
              new Date('2019-03-16').getTime()
            ]
          },
          {
            x: 'Design',
            y: [
              new Date('2019-03-01').getTime(),
              new Date('2019-03-03').getTime()
            ]
          }
        ]
      },
      {
        name: 'Joe',
        data: [
          {
            x: 'Design',
            y: [
              new Date('2019-03-02').getTime(),
              new Date('2019-03-05').getTime()
            ]
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-06').getTime(),
              new Date('2019-03-16').getTime()
            ],
            goals: [
              {
                name: 'Break',
                value: new Date('2019-03-10').getTime(),
                strokeColor: '#CD2F2A'
              }
            ]
          },
          {
            x: 'Code',
            y: [
              new Date('2019-03-03').getTime(),
              new Date('2019-03-07').getTime()
            ]
          },
          {
            x: 'Deployment',
            y: [
              new Date('2019-03-20').getTime(),
              new Date('2019-03-22').getTime()
            ]
          },
          {
            x: 'Design',
            y: [
              new Date('2019-03-10').getTime(),
              new Date('2019-03-16').getTime()
            ]
          }
        ]
      },
      {
        name: 'Dan',
        data: [
          {
            x: 'Code',
            y: [
              new Date('2019-03-10').getTime(),
              new Date('2019-03-17').getTime()
            ]
          },
          {
            x: 'Validation',
            y: [
              new Date('2019-03-05').getTime(),
              new Date('2019-03-09').getTime()
            ],
            goals: [
              {
                name: 'Break',
                value: new Date('2019-03-07').getTime(),
                strokeColor: '#CD2F2A'
              }
            ]
          }
        ]
      }
    ],
    label: 'Timeline chart',
    color1: '#2E93fA',
    color2: '#66DA26',
    color3: '#546E7A',
    color4: '#E91E63',
    color5: '#FF9800',
    color6: '#FF0000',
    slicesize: 90
  },
  properties: [
    {
      name: 'general',
      display: 'Genaral',
      fields: [
        [{ type: 'text', label: 'Title', datafield: 'label' }],
        [
          {
            type: 'text',
            label: 'Custom CSS',
            datafield: 'customcss',
            multiline: true
          }
        ]
      ]
    },
    {
      name: 'data',
      display: 'Data',
      fields: [
        [{ type: 'text', label: 'API Path', datafield: 'apipath' }],
        [{ type: 'text', label: 'Query String', datafield: 'apiquerystring' }],
        [{ type: 'textarea', label: 'Body', datafield: 'apibody' }]
      ]
    },
    {
      name: 'style',
      display: 'Style',
      fields: [
        [
          {
            type: 'text',
            label: 'Custom CSS',
            datafield: 'customcss',
            multiline: true
          }
        ]
      ]
    },
    {
      name: 'colors',
      display: 'Colors',
      fields: [
        [{ type: 'color', label: 'Color 1', datafield: 'color1' }],
        [{ type: 'color', label: 'Color 2', datafield: 'color2' }],
        [{ type: 'color', label: 'Color 3', datafield: 'color3' }],
        [{ type: 'color', label: 'Color 4', datafield: 'color4' }],
        [{ type: 'color', label: 'Color 5', datafield: 'color5' }],
        [{ type: 'color', label: 'Color 6', datafield: 'color6' }]
      ]
    }
  ],
  image:
    'data:image/png;base64,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',

  template: ChartTemplate
}
