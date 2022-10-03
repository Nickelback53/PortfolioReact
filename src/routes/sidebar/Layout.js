import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import { useIntl } from 'react-intl';
import Body from './Introduce';
import Employment from './Employment';
import Skills from './Skills';
import Project from './Project';

function Layout({ setLocale }) {
  const intl = useIntl();

  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [title, setTitle] = useState(intl.formatMessage({id:'introduce'}));

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

 
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  const handleLangChange = (lang) => {
    setLocale(lang);
    localStorage.setItem('lang', lang);
  };

  const handleTitleChange = (title) => {
    setTitle(title);
  }


  return (
    <div className={`app ${toggled ? 'toggled' : ''} `}>
      <Routes>
        <Route path='/intro' element=
          {
              <Home
                handleLangChange={handleLangChange}
              />
          } />
        <Route path="/" element={
          <>
          <Aside
          image={image}
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleLangChange={handleLangChange}
          handleTitleChange={handleTitleChange}
        />
        <Main
          image={image}
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
          handleImageChange={handleImageChange}
          handleLangChange={handleLangChange}
        />
        </>
        }>
          <Route path="introduce" element={<Body/>}/>
          <Route path="employment" element={<Employment/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path='project/:id' element={<Project />} />
        </Route>
        <Route path='*' element={<div>없는 페이지</div>} />
      </Routes>

    </div>
  );
}

export default Layout;