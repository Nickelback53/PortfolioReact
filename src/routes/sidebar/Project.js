import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {  useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import Table from 'react-bootstrap/Table';
import data from '../../data/data';

export default function Project() {
    const intl = useIntl();
    let { id } = useParams();

    return (
        <React.Fragment>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <h2 >{intl.formatMessage({ id: 'project' + id })}</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{
                            p: 4,
                            display: 'flex',
                            flexDirection: 'row',
                            height: 1,
                            borderRadius: '0.75rem'
                        }}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={12} lg={6} sx={{ alignSelf: 'center' }}>
                                

                                    {
                                        intl.formatMessage({ id: 'project' + id })  === "Unity" 
                                        ? <Box
                                        component="img"
                                        sx={{
                                            width: 1,
                                            height: 1
                                        }}
                                        alt="Cafe"
                                        src={"/img/project"+id+".gif"} /> 
                                        : <Box
                                          component="img"
                                          sx={{
                                              width: 1,
                                              height: 1
                                          }}
                                          alt="Cafe"
                                          src={"/img/project"+id+".png"}
                                      />
                                    }
                                </Grid>
                                <Grid item xs={12} md={12} lg={6} sx={{ display: 'grid' }} >
                                    <Box sx={{
                                        p:1,
                                        display:'flex'

                                    }}>

                                        {intl.formatMessage({ id: 'project'+id+'Des'})}

                                    </Box>
                                    <Box sx={{
                                        p:1,
                                        display:'flex'

                                    }}>
                                    <Table borderless >
                                        <tbody>
                                            <tr>
                                                <th>{intl.formatMessage({ id: 'projectFuncTitle'})}</th>
                                                <td>{intl.formatMessage({ id: 'project'+id+'Func'})} </td>
                                            </tr>
                                            {
                                                data.project[id-1].map((a,i)=>{

                                                    if(a.title === 'url' || a.title === 'github'){
                                                        return(<tr>
                                                                <th>{a.title}</th>
                                                            <td><a href={a.decription}>{a.decription}</a></td>
                                                            </tr>
                                                            )
                                                    }else{
                                                        return (
                                                            <tr>
                                                            <th>{a.title}</th>
                                                            <td>{a.decription}</td>
                                                            </tr>
                                                        )
                                                    }
                                                    
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                    </Box>

                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>

        </React.Fragment>
    );
}