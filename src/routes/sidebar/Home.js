import { useIntl } from 'react-intl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = ({
  handleLangChange,

}) => {
  const intl = useIntl();

  const handleChange = (event) => {
    handleLangChange(event.target.value);
    localStorage.setItem('lang', event.target.value);
  };
  const navigate = useNavigate();
  const [intro , setIntro] = useState('');
  


  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setIntro(intl.formatMessage({ id: 'intro' }).slice(0, intro.length +1));
    }, 150)

    return ()=>{ clearTimeout(timeout)}
  }, [intro])


  useEffect(() => {
    setTimeout(() => { navigate("/introduce") }, 15000);
  })

  return (
    <div className='main-bg'> <header>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Lang</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={localStorage.getItem('lang')}
          onChange={handleChange}
          //onChange={setLo}
          autoWidth
          label="Language"
        >
          <MenuItem value='ko'>한국어</MenuItem>
          <MenuItem value='en'>English</MenuItem>
          <MenuItem value='jp'>日本語</MenuItem>
        </Select>
      </FormControl>
      <Link to={'/introduce'}>Home</Link>

      {/* <Button variant="link" onClick={handleHomeChange}>Home</Button> */}
    </header>

      <div className="wrapper">
      <h1><div className='blinking-cursor'>{intro}</div></h1>
        <div className='intoduce1'>
          {intl.formatMessage({ id: 'introduce1' })}
        </div>

      </div>
    </div>)
}





export default Home;