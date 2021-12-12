import React, { useState, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FormViewer } from 'react-form-planner'
import {
  ThemedMainContainer,
  ThemedAppBar,
  ThemedToolbar,
  ThemedIconButton,
  ThemedCanvasArea,
  ThemedSideBar,
  ThemedModal,
  ThemedBackdrop,
  ThemedContainerCard,
  ThemedDrawer,
  TabPanel,
  ThemedTab,
  ThemedTabs
} from './components/styled'
import { InstrumentSelector } from './components/instrument-selector'
import { IBCard } from './components/card'
import { IBCanvas } from './components/canvas'
import { EditComponent } from './edit-component'
import { ThemeProvider } from 'styled-components'
import { dark } from './themes'
import RGL, { WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import './styles.module.css'
import store from './store/store'
import { Provider } from 'react-redux'
const ReactGridLayout = WidthProvider(RGL)

export const DashboardEditor = ({ text }) => {
  const [isCollapsed, setCollapsed] = useState(false)
  const [toggled, setToggled] = useState(false)
  const [instrumentSelectorOpen, setInstrumentSelectorOpen] = useState(false)
  const [formPropertiesOpen, setFormPropertiesOpen] = useState(false)
  const [selectedInstrument, setSelectedInstrument] = useState({})
  const [selectedFormFields, setSelectedFormFields] = useState([])
  const [selectedFormData, setSelectedFormData] = useState({})
  const [currentLayout, setCurrentLayout] = useState({ md: [] })
  const [allElements, setAllElements] = useState([])
  const [selectedTab, setSelectedTab] = useState(0)

  const defaultProps = {
    className: 'layout',
    items: 50,
    cols: 1200,
    rowHeight: 30,
    verticalCompact: false,
    onLayoutChange: function () {},
    draggableHandle: '.grab-button',
    // This turns off compaction so you can place items wherever.
    verticalCompact: false
  }
  const onInstrumentSelectorClose = () => {
    setInstrumentSelectorOpen(false)
  }

  const onInstrumentSelected = (instrument) => {
    setSelectedInstrument(instrument)
    setSelectedFormFields(instrument.properties)
    setSelectedFormData(instrument.values)
    setFormPropertiesOpen(true)
    const tmp_obj = {
      h: instrument.h,
      w: instrument.w
    }
    allElements.push(instrument)
    setAllElements(allElements)
    currentLayout.md.push(instrument)
    generateDOM()
  }

  const onPropertyUpdate = (k, v) => {
    selectedInstrument.values[k] = v
    setSelectedInstrument(selectedInstrument)
  }

  const openProperty = (instrument) => {
    setSelectedInstrument(instrument)
    setFormPropertiesOpen(true)
  }

  const tabSelectionChanged = (event, newValue) => {
    setSelectedTab(newValue)
  }

  const generateDOM = () => {
    return allElements.map((e, ei) => {
      return (
        <ThemedContainerCard key={ei}>
          <IBCard
            onPropertyClicked={() => openProperty(e)}
            title={e.values.display}
            rawelement={e}
          >
            <e.template {...e.values} />
          </IBCard>
        </ThemedContainerCard>
      )
    })
  }

  const onLayoutChange = (layout) => {
    console.log(JSON.stringify(layout))
    if (props.onLayoutChange) {
      props.onLayoutChange(layout)
    }
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={dark}>
        <ThemedMainContainer className='ib-top-container'>
          <ThemedSideBar>
            <InstrumentSelector
              show={true}
              onClose={() => onInstrumentSelectorClose()}
              onSelection={(e) => onInstrumentSelected(e)}
            ></InstrumentSelector>
          </ThemedSideBar>

          <ThemedCanvasArea className='ib-top-container--main-content'>
            <ReactGridLayout
              layouts={currentLayout}
              cols={120}
              rowHeight={10}
              compactType={undefined}
              allowOverlap={true}
              onLayoutChange={(e) => onLayoutChange(e)}
              {...defaultProps}
            >
              {generateDOM()}
            </ReactGridLayout>
          </ThemedCanvasArea>
        </ThemedMainContainer>
        <ThemedModal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={instrumentSelectorOpen}
          onClose={() => onInstrumentSelectorClose()}
          closeAfterTransition
          BackdropComponent={ThemedBackdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <InstrumentSelector
            show={instrumentSelectorOpen}
            onClose={() => onInstrumentSelectorClose()}
            onSelection={(e) => onInstrumentSelected(e)}
          ></InstrumentSelector>
        </ThemedModal>
        <ThemedDrawer
          anchor={'right'}
          open={formPropertiesOpen}
          onClose={() => setFormPropertiesOpen(false)}
        >
          <ThemedTabs
            value={selectedTab}
            onChange={(a, b) => tabSelectionChanged(a, b)}
            aria-label='icon label tabs example'
          >
            {selectedFormFields.map((g, gi) => {
              return (
                <ThemedTab
                  icon={<FontAwesomeIcon icon={g.icon} />}
                  iconPosition='start'
                  label={g.display}
                />
              )
            })}
          </ThemedTabs>
          <Fragment>
            {selectedFormFields.map((g, gi) => {
              return (
                <TabPanel value={selectedTab} index={gi} key={gi}>
                  <FormViewer
                    template={{
                      fields: g.fields
                    }}
                    data={selectedFormData}
                    onChange={(k, v) => onPropertyUpdate(k, v)}
                  />
                </TabPanel>
              )
            })}
          </Fragment>
        </ThemedDrawer>
      </ThemeProvider>
    </Provider>
  )
}
