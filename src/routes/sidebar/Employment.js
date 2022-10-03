import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useIntl } from 'react-intl';
import Table from 'react-bootstrap/Table';
import data from '../../data/data';


export default function Employment() {
    const intl = useIntl();
    let lang = '';
    if (localStorage.getItem('lang') == 'en') {
        lang = data.Employment.en;
    } else if (localStorage.getItem('lang') == 'jp') {
        lang = data.Employment.jp;
    } else {
        lang = data.Employment.ko;
    }

    return (
        <React.Fragment>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <h2 >{intl.formatMessage({ id: 'employment' })}</h2>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <Paper sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 400,
                            borderRadius: '0.75rem'
                        }}>
                            <div class="EmploymentContentContainer">
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={12} lg={6} sx={{ display: 'grid' }} >

                                        <Box sx={{
                                            p: 1,
                                            display: 'flex'

                                        }}>
                                            <Table borderless >
                                                <tbody>

                                                    {
                                                        lang.map((a, i) => {
                                                            return (
                                                                <tr>
                                                                    <th>
                                                                        {a.period}
                                                                    </th>
                                                                    <td>
                                                                        <div className='intoduceDesc'>{a.project}</div>
                                                                    </td>
                                                                </tr>
                                                            )

                                                        })
                                                    }


                                                </tbody>
                                            </Table>
                                        </Box>

                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </React.Fragment>
    );
}