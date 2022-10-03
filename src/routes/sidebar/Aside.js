import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaRobot, FaGem, FaList, FaGithub, FaBlackTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import sidebarBg from '../../img/bg3.jpeg';

const Aside = ({ image, collapsed,  toggled, handleToggleSidebar, handleTitleChange }) => {
  const intl = useIntl();


  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="lg"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {intl.formatMessage({ id: 'sidebarTitle' })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaRobot />}> {intl.formatMessage({ id: 'about' })} <Link to={'/introduce'} onClick={handleTitleChange(intl.formatMessage({ id: 'intro' }))}></Link></MenuItem>
          <MenuItem
            icon={<FaBlackTie />}
          >
            {intl.formatMessage({ id: 'employment' })} <Link to={'/employment'} onClick={handleTitleChange(intl.formatMessage({ id: 'intro' }))}></Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}> {intl.formatMessage({ id: 'skills' })} <Link to={'/skills'} onClick={handleTitleChange(intl.formatMessage({ id: 'intro' }))}></Link></MenuItem>
          <SubMenu title={intl.formatMessage({ id: 'project' })} icon={<FaList />} >

            <MenuItem>{intl.formatMessage({ id: 'project1' })}<Link to={'/project/1'} ></Link></MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'project2' })}<Link to={'/project/2'} ></Link></MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'project3' })} <Link to={'/project/3'} ></Link></MenuItem>
          </SubMenu>
        </Menu>

      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/Nickelback53/PortfolioReact"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {intl.formatMessage({ id: 'viewSource' })}
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;