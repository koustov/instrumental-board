import React, { useState, useEffect } from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'
import { IBCard } from '../card'
import { ThemedContainerCard } from '../styled'
import 'react-grid-layout/css/styles.css'
const ReactGridLayout = WidthProvider(RGL)

export const IBCanvas = ({
  items,
  onChange,
  columns,
  rowheight,
  isDroppable,
  openProperty
}) => {
  const [currentLayout, setCurrentLayout] = useState({ md: [] })
  const defaultProps = {
    className: 'layout',
    items: 50,
    cols: 12,
    rowHeight: 30,
    verticalCompact: false,
    onLayoutChange: function () {},
    draggableHandle: '.grab-button',
    // This turns off compaction so you can place items wherever.
    verticalCompact: false

    // cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
  }

  useEffect(() => {}, [items])
  const onDrop = (layout, layoutItem, _event) => {
    setCurrentLayout(layout)
  }

  const onLayoutChange = (layout) => {
    if (onChange) {
      onChange(layout)
    }
  }
  const generateDOM = () => {
    return items.map((e, ei) => {
      return (
        <IBCard
          key={ei}
          onPropertyClicked={() => openProperty(e)}
          title={e.values.display}
          rawelement={e}
        >
          {/* <div></div> */}
          <e.template {...e.values} />
        </IBCard>
      )
    })
  }
  return (
    <ReactGridLayout
      layouts={currentLayout}
      cols={columns || 40}
      rowHeight={rowheight || 10}
      compactType={undefined}
      isDroppable={isDroppable}
      measureBeforeMount={false}
      allowOverlap={true}
      onDrop={(a, b, c) => onDrop(a, b, c)}
      onLayoutChange={(e) => onLayoutChange(e)}
      {...defaultProps}
    >
      {generateDOM()}
    </ReactGridLayout>
  )
}
