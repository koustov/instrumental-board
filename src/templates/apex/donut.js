import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import image from './donut.png'

export const ChartTemplate = (props) => {
  const series = props.series
  const options = {
    chart: {
      width: 380,
      type: 'donut'
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient'
    },
    plotOptions: {
      pie: {
        donut: {
          size: `${props.slicesize}%`
        }
      }
    },
    colors: [
      props.color1,
      props.color2,
      props.color3,
      props.color4,
      props.color5,
      props.color6
    ],
    legend: {
      formatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
      }
    }
  }

  return <Chart options={options} series={series} type='donut' />
}

export const PieChartProps = {
  id: '8335E114-1A1D-4880-85F3-C9D9E5E1D724',
  h: 10,
  w: 10,
  display: 'Donut Chart',
  description: 'A gradient donut chart',
  values: {
    server: '$DATA_SERVER$',
    protocol: 'https',
    series: [44, 55, 41, 17, 15],
    label: 'Gradient Donut with custom Start-angle',
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
        [
          {
            type: 'select',
            label: 'Protocol',
            datafield: 'protocol',
            options: [
              { name: 'http', value: 'http' },
              { name: 'https', value: 'https' }
            ]
          }
        ],
        [{ type: 'text', label: 'Server', datafield: 'server' }],

        [{ type: 'text', label: 'API Path', datafield: 'apipath' }],
        [{ type: 'text', label: 'Query String', datafield: 'apiquerystring' }],
        [{ type: 'textarea', label: 'Body', datafield: 'apibody' }],
        [{ type: 'text', label: 'Series Name', datafield: 'xaxis' }],
        [{ type: 'text', label: 'Series Value', datafield: 'yaxis' }]
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
        ],
        [
          {
            type: 'text',
            subtype: 'number',
            label: 'Slice Size',
            datafield: 'slicesize'
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
  template: ChartTemplate
}
