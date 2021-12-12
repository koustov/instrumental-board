import React, { useEffect, useState } from 'react'
import { IBCanvas } from '../../components/canvas'

export const CardTemplate = (props) => {
  return (
    <div
      style={{
        borderWidth: `${props.borderwidth || '0'}px`,
        borderColor: `${props.bordercolor || 'transparent'}`,
        backgroundColor: `${props.backgroundcolor || 'transparent'}`
      }}
    />
  )
}

export const CardProps = {
  id: '0D4E125B-DE93-46C3-A7D8-33A4514EF5F8',
  h: 100,
  w: 100,
  values: {
    borderWidth: 1,
    borderColor: '#7bc5ee',
    backgroundcolor: 'transparent'
  },
  properties: [
    {
      name: 'style',
      display: 'Style',
      fields: [
        [
          {
            type: 'text',
            subtype: 'number',
            label: 'Border Width',
            datafield: 'borderWidth'
          }
        ],
        [{ type: 'color', label: 'Border Color', datafield: 'borderColor' }],
        [
          {
            type: 'color',
            label: 'Background Color',
            datafield: 'backgroundcolor'
          }
        ]
      ]
    }
  ],
  display: 'Card',
  description: 'Give a context',
  image:
    'data:image/png;base64,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',
  template: CardTemplate
}
