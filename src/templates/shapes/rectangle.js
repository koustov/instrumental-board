import React, { useEffect, useState } from 'react'
import { IBCanvas } from '../../components/canvas'

export const RectangleTemplate = (props) => {
  return (
    <div
      style={{
        backgroundColor: `${props.backgroundcolor || 'red'}`,
        borderRadius: `${props.borderradius || '0'}px`,
        width: `${props.width || '10'}px`,
        height: `${props.height || '10'}px`
      }}
    />
  )
}

export const RectangleProps = {
  id: '0D4E125B-DE93-46C3-A7D8-33A4514EF5F9',
  h: 100,
  w: 100,
  values: {
    backgroundcolor: '#FF0000',
    borderRadius: 0,
    width: 10,
    height: 10
  },
  properties: [
    {
      name: 'style',
      display: 'Style',
      fields: [
        [
          {
            type: 'color',
            label: 'Background Color',
            datafield: 'backgroundcolor'
          }
        ],
        [
          {
            type: 'text',
            subtype: 'number',
            label: 'Border Radius',
            datafield: 'borderRadius'
          }
        ],
        [
          {
            type: 'text',
            subtype: 'number',
            label: 'Width',
            datafield: 'width'
          },
          {
            type: 'text',
            subtype: 'number',
            label: 'Height',
            datafield: 'height'
          }
        ]
      ]
    }
  ],
  display: 'Rectangle',
  description: 'Your shape',
  template: RectangleTemplate
}
