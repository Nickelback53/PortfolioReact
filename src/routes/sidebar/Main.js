import React, { useState } from 'react';
import Switch from 'react-switch';
import {  FaBars } from 'react-icons/fa';
import { faCamera } from "@fortawesome/free-solid-svg-icons";


import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Main = ({
  collapsed,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleImageChange,
  handleLangChange
}) => {

  const [ icons, setIcon ] = useState(faCamera);

  const handleChange = (event) => {
    handleLangChange(event.target.value);
    localStorage.setItem('lang', event.target.value);
  };





  return (
    <main>
      <header>
        <div>
          
          
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              //p: 1,
              //m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
              backgroundColor: '#f0f2f5',
            }}
          >
            <div>
             
            </div>
            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              backgroundColor: '#f0f2f5'
            }}>
              <div>
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                  <FaBars />
                </div>
              </div>
              <div className="collapse block justify-content-end mt-4">
                <Switch
                  height={23}
                  width={30}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleCollapsedChange}
                  checked={collapsed}
                  onColor="#219de9"
                  offColor="#bbbbbb"
                />
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Lang</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={localStorage.getItem('lang')}
                    onChange={handleChange}
                    autoWidth
                    label="Language"
                  >
                    <MenuItem value='ko'>한국어</MenuItem>
                    <MenuItem value='en'>English</MenuItem>
                    <MenuItem value='jp'>日本語</MenuItem>
                  </Select>
                </FormControl>
              </div>


            </Box>
          </Box>
        </div>
        
      </header>
     

      <Outlet></Outlet>

      <footer>
        <small>
          © {new Date().getFullYear()} made with by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="">
            Lee Taeho
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a href="https://github.com/Nickelback53" target="_blank" rel="noopener noreferrer">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/stars/Nickelback53?label=Stars&style=social"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Main;