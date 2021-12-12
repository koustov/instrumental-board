import React, { useState, useEffect, Fragment } from 'react'
import Backdrop from '@mui/material/Backdrop'
import { Templates } from '../../templates'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuidv4 } from 'uuid'
import {
  ThemedTab,
  ThemedTabs,
  ThemedListItemButton,
  ThemedList,
  ThemedListItem,
  ThemedListItemText,
  ThemedListItemAvatar,
  ThemedAvatar,
  TabPanel
} from '../styled'
import Fade from '@mui/material/Fade'
import 'react-pro-sidebar/dist/css/styles.css'

import Tree from '@naisutech/react-tree'

export const InstrumentSelector = ({ show, onClose, onSelection }) => {
  const [open, setOpen] = useState(show)
  const [allTemplates, setAllTemplates] = useState([])
  const [selectedTab, setSelectedTab] = useState(0)
  const [loading, setLoading] = useState(true)

  const [nodes, setNodes] = useState([])

  useEffect(() => {
    if (show) {
      const at = Templates
      at.forEach((pn) => {
        const newNode = {
          id: pn.id,
          icon: pn.icon,
          parentId: null,
          label: pn.display,
          items: []
        }
        pn.components.forEach((c) => {
          newNode.items.push({
            id: c.id,
            label: c.display,
            parentId: newNode.id,
            obj: c
          })
        })
        nodes.push(newNode)
      })
      setNodes(nodes)
      setAllTemplates(at)
      setLoading(false)
    }
  }, [show])

  const getInstrumentById = (id, target_nodes = nodes) => {
    let res = undefined
    if (!id) {
      return undefined
    }
    target_nodes.forEach((np) => {
      if (!res) {
        np.items.forEach((item) => {
          if (item.id === id) {
            res = item
          }
        })
      }
    })
    return res
  }

  const handleClose = () => {
    setOpen(false)
    if (onClose) {
      onClose()
    }
  }

  const tabSelectionChanged = (event, newValue) => {
    setSelectedTab(newValue)
  }

  const onInstrumentSelected = (id) => {
    const instrument = getInstrumentById(id)
    if (instrument) {
      if (onSelection) {
        onSelection(instrument.obj)
      }
      // handleClose()
    }
  }

  return (
    <Tree
      nodes={nodes}
      isLoading={loading}
      onSelect={(nodeIds) => onInstrumentSelected(nodeIds[0])}
      // size={string}
      grow={true}
      // noIcons={boolean}
      // showEmptyItems={boolean}
      animations={true}
      // theme={string}
      // customTheme={[key:string] : ReactTreeTheme}
      // NodeRenderer={}
      // LeafRenderer={}
      // IconRenderer={}
      noDataString={'Not installed'}
      loadingString={'Loading components'}
      emptyItemsString={'Not installed'}
      // containerStyle={CSSProperties}
    />

    // <React.Fragment>
    //   {show ? (
    //     <React.Fragment>
    //       {loading ? null : (
    //         <Fragment>
    //           {' '}
    //           <ThemedTabs
    //             value={selectedTab}
    //             onChange={(a, b) => tabSelectionChanged(a, b)}
    //             aria-label='icon label tabs example'
    //           >
    //             {allTemplates.map((g, gi) => {
    //               return (
    //                 <ThemedTab
    //                   icon={<FontAwesomeIcon icon={g.icon} />}
    //                   iconPosition='start'
    //                   label={g.display}
    //                 />
    //               )
    //             })}
    //           </ThemedTabs>
    //           <Fragment>
    //             {allTemplates.map((g, gi) => {
    //               return (
    //                 <TabPanel value={selectedTab} index={gi} key={gi}>
    //                   <ThemedList
    //                     sx={{
    //                       width: '100%',
    //                       maxWidth: 360,
    //                       bgcolor: 'background.paper'
    //                     }}
    //                   >
    //                     {g.components.map((c, ci) => {
    //                       return (
    //                         <ThemedListItemButton
    //                           onClick={(event) => onInstrumentSelected(c)}
    //                         >
    //                           <ThemedListItem alignItems='flex-start'>
    //                             <ThemedListItemAvatar>
    //                               <ThemedAvatar alt={''} src={c.image} />
    //                             </ThemedListItemAvatar>
    //                             <ThemedListItemText
    //                               primary={c.display}
    //                               secondary={
    //                                 <React.Fragment>
    //                                   {c.description}
    //                                 </React.Fragment>
    //                               }
    //                             />
    //                           </ThemedListItem>
    //                         </ThemedListItemButton>
    //                       )
    //                     })}
    //                   </ThemedList>
    //                 </TabPanel>
    //               )
    //             })}
    //           </Fragment>
    //         </Fragment>
    //       )}
    //     </React.Fragment>
    //   ) : null}
    // </React.Fragment>
  )
}
