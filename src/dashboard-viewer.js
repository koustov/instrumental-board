import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import 'react-pro-sidebar/dist/css/styles.css'

export const DashboardViewer = ({ text }) => {
  return (
    <ProSidebar>
      <Menu iconShape='square'>
        <MenuItem icon={<FontAwesomeIcon icon={faCoffee} />}>
          Dashboard
        </MenuItem>
        <SubMenu title='Components' icon={<FontAwesomeIcon icon={faHeart} />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  )
}
