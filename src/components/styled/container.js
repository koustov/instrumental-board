import React from 'react'
import styled from 'styled-components'

import {
  Card,
  AppBar,
  Toolbar,
  IconButton,
  Modal,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Divider,
  Backdrop,
  Drawer
} from '@mui/material'

export const ThemedMainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  > div:nth-child(1) {
    /* width: 300px; */
  }
  > div:nth-child(2) {
    flex: 1;
  }
`
export const ThemedSideBar = styled.div`
  width: 300px;
  height: 100%;
`
export const ThemedCanvasArea = styled.div`
  height: 100%;
  flex: 1;
`

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

export const ThemedContainerCardInternal = styled(Card)`
  color: ${({ theme }) => theme.colors.primaryText} !important;
  display: flex;
  background: transparent !important;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primaryText} !important;
  .ib-card-header {
    display: flex;
    height: 40px;
    &--title {
      flex: 1;
      color: ${({ theme }) => theme.colors.primaryText} !important;
    }
    &--toolbar {
      display: none;
      color: ${({ theme }) => theme.colors.primaryText} !important;
      .MuiIconButton-root {
        color: ${({ theme }) => theme.colors.primaryText} !important;
      }
    }
  }
  .ib-card-body {
  }
  .ib-card-footer {
  }

  .ib-card-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    display: none;
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  :hover {
    .ib-card-header {
      &--toolbar {
        display: block;
      }
    }
    .ib-card-overlay {
      display: ${(props) => (props.isinedit ? 'block' : 'none')};
    }
  }
`

export const ThemedContainerCard = styled(Card)`
  /* border: 1px solid ${({ theme }) => theme.colors.card.border} !important; */
  background: transparent !important;
  color: ${({ theme }) => theme.colors.primaryText} !important;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.card.border} !important;
  }
  /* display: flex;
  flex-direction: column;
  .ib-card-header {
    display: flex;
    height: 30px;
  }
  .ib-card-body {
  }
  .ib-card-footer {
  }

  .ib-card-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    display: none;
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  :hover {
    .ib-card-overlay {
      display: ${(props) => (props.isinedit ? 'block' : 'none')};
    }
  } */
`
export const ThemedAppBar = styled(AppBar)``
export const ThemedIconButton = styled(IconButton)``
export const ThemedToolbar = styled(Toolbar)``
export const ThemedModal = styled(Modal)`
  width: 90vw;
  height: 90vh;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.card.start},
    ${({ theme }) => theme.colors.card.end}
  ) !important;
`
export const ThemedTabs = styled(Tabs)``
export const ThemedTab = styled(Tab)``

export const ThemedList = styled(List)`
  max-width: unset !important;
`
export const ThemedListItem = styled(ListItem)`
  max-width: unset !important;
  height: 100px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`
export const ThemedListItemText = styled(ListItemText)``
export const ThemedListItemAvatar = styled(ListItemAvatar)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: unset;
  padding: 8px;
`
export const ThemedAvatar = styled.img`
  /* height: 70px !important; */
  width: 70px !important;
`
export const ThemedDivider = styled(Divider)``
export const ThemedBackdrop = styled(Backdrop)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ThemedListItemButton = styled(ListItemButton)``
export const ThemedDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 400px !important;
  }
`
