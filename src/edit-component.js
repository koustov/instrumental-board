import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { ThemedMainContainer, ThemedContainerCard } from './components/styled'

import RGL, { WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'

const ReactGridLayout = WidthProvider(RGL)

export const EditComponent = (props) => {
  const [currentLayout, setCurrentLayout] = useState({})
  const defaultProps = {
    className: 'layout',
    items: 50,
    cols: 12,
    rowHeight: 30,
    verticalCompact: false,
    onLayoutChange: function () {},
    // This turns off compaction so you can place items wherever.
    verticalCompact: false
  }

  useEffect(() => {
    const layout = generateLayout()
    setCurrentLayout({ xs: layout, md: layout })
  }, [])

  const generateDOM = () => {
    return _.map(_.range(props.items), function (i) {
      return (
        <ThemedContainerCard key={i}>
          <span className='text'>{i}</span>
        </ThemedContainerCard>
      )
    })
  }

  const generateLayout = () => {
    const p = props
    return _.map(new Array(p.items), function (item, i) {
      const y = Math.ceil(Math.random() * 4) + 1
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 30,
        h: 100,
        i: i.toString()
      }
    })
  }

  const onLayoutChange = (layout) => {
    if (props.onLayoutChange) {
      props.onLayoutChange(layout)
    }
  }

  return (
    <ReactGridLayout
      layouts={currentLayout}
      cols={120}
      rowHeight={10}
      compactType={undefined}
      onLayoutChange={(e) => onLayoutChange(e)}
      {...defaultProps}
    >
      {generateDOM()}
    </ReactGridLayout>
  )
}
