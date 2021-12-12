import React, { useState, useEffect, Fragment } from 'react'
import {
  ThemedContainerCardInternal,
  ThemedIconButton,
  ThemedTab,
  ThemedTabs,
  ThemedDrawer,
  TabPanel
} from '../styled'
import { FormViewer } from 'react-form-planner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faEdit } from '@fortawesome/free-solid-svg-icons'

export const IBCard = ({
  isinedit,
  showborder,
  title,
  element,
  children,
  rawelement,
  onPropertyChange
}) => {
  const [formPropertiesOpen, setFormPropertiesOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (rawelement) {
      setLoading(false)
    }
  }, [rawelement])
  const onPropertyClicked = () => {
    setFormPropertiesOpen(true)
  }

  const onPropertyUpdate = (k, v) => {
    rawelement.values[k] = v
    if (onPropertyChange) {
      onPropertyChange(rawelement)
    }
  }
  const tabSelectionChanged = (event, newValue) => {
    setSelectedTab(newValue)
  }

  return (
    <React.Fragment>
      {loading ? (
        <div></div>
      ) : (
        <ThemedContainerCardInternal isinedit={isinedit}>
          <div className='ib-card-header'>
            <div className='ib-card-header--toolbar'>
              <ThemedIconButton className='grab-button'>
                <FontAwesomeIcon icon={faExpand} />
              </ThemedIconButton>
              <ThemedIconButton onClick={() => onPropertyClicked()}>
                <FontAwesomeIcon icon={faEdit} />
              </ThemedIconButton>
            </div>
          </div>
          <div className='ib-card-body' draggable={true} unselectable='on'>
            {children}
          </div>
          <div className='ib-card-overlay'></div>
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
              {rawelement.properties.map((g, gi) => {
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
              {rawelement.properties.map((g, gi) => {
                return (
                  <TabPanel value={selectedTab} index={gi} key={gi}>
                    <FormViewer
                      template={{
                        fields: g.fields
                      }}
                      data={rawelement.values}
                      onChange={(k, v) => onPropertyUpdate(k, v)}
                    />
                  </TabPanel>
                )
              })}
            </Fragment>
          </ThemedDrawer>
        </ThemedContainerCardInternal>
      )}
    </React.Fragment>
  )
}
