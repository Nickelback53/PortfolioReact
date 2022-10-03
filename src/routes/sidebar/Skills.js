import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Routes, Route} from 'react-router-dom';
import { useIntl } from 'react-intl';
import data from '../../data/data';

export default function Skills() {
    const intl = useIntl();
    const [data1, setData1] = React.useState([]);
  
    
    

    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={

                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <h2 >{intl.formatMessage({ id: 'skills' })}</h2>
                        <Grid container spacing={3} >

                            <Grid item xs={6} md={6} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'inline-flex',
                                        flexDirection: 'column',
                                        height: 270,
                                        borderRadius: '0.75rem'
                                    }}
                                >
                                    <h3>Language</h3>
                                    {
                                        data.language.map((a, i) => {
                                        
                                            console.log(data1[0])
                                            return (

                                                <img alt={a.name} src={"https://img.shields.io/badge/" + a.name + "-" + a.color + "?.svg?&style=for-the-badge&logo=" + a.name + "&logoColor=white"} />
                                            )
                                        })
                                    }
                                </Paper>
                            </Grid>
                            <Grid item xs={6} md={6} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'inline-flex',
                                        flexDirection: 'column',
                                        height: 270,
                                        borderRadius: '0.75rem'
                                    }}
                                >
                                    <h3>WebDev</h3>
                                    {
                                        data.webDev.map((a, i) => {
                                            return (

                                                <img alt={a.name} src={"https://img.shields.io/badge/" + a.name + "-" + a.color + "?.svg?&style=for-the-badge&logo=" + a.name + "&logoColor=white"} />
                                            )
                                        })
                                    }
                                </Paper>
                            </Grid>
                            <Grid item xs={6} md={6} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'inline-flex',
                                        flexDirection: 'column',
                                        height: 270,
                                        borderRadius: '0.75rem'
                                    }}
                                >
                                    <h3>Database</h3>
                                    {
                                        data.database.map((a, i) => {
                                            return (

                                                <img alt={a.name} src={"https://img.shields.io/badge/" + a.name + "-" + a.color + "?.svg?&style=for-the-badge&logo=" + a.name + "&logoColor=white"} />
                                            )
                                        })
                                    }
                                </Paper>
                            </Grid>
                            <Grid item xs={6} md={6} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'inline-flex',
                                        flexDirection: 'column',
                                        height: 270,
                                        borderRadius: '0.75rem'
                                    }}
                                >
                                    <h3>Etc</h3>
                                    {
                                        data.etc.map((a, i) => {
                                            return (

                                                <img alt={a.name} src={"https://img.shields.io/badge/" + a.name + "-" + a.color + "?.svg?&style=for-the-badge&logo=" + a.name + "&logoColor=white"} />
                                            )
                                        })
                                    }
                                </Paper>
                            </Grid>

                        </Grid>

                    </Container>
                }
                ></Route>
                <Route path='*' element={<div>없는 페이지</div>} />
            </Routes>

        </React.Fragment>
    );
}