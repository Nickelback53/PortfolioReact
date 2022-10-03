import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useIntl } from 'react-intl';


export default function Body() {
    const intl = useIntl();
    return (
        <React.Fragment>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <h3 >{intl.formatMessage({ id: 'name' })} | {intl.formatMessage({ id: 'developer' })}</h3>
                <Grid container spacing={3}>


                    <Grid item xs={12} md={6} lg={6}>
                        <h2>{intl.formatMessage({ id: 'contact' })}</h2>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'table-cell',
                                flexDirection: 'column',
                                height: 1,
                                borderRadius: '0.75rem'
                            }}
                        >

                            <div>
                                <p>Email: taeho0523@gmail.com</p>
                                <p>Phone: 010-8682-6398</p>
                            </div>
                            </Paper>
                    </Grid>


                            <Grid item xs={12} md={6} lg={6}>
                                <h2>Channel</h2>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'table-cell',
                                flexDirection: 'column',
                                height: 1,
                                borderRadius: '0.75rem'
                            }}
                        >
                            <div>
                                <p>GitHub: <a href='https://github.com/Nickelback53'>https://github.com/Nickelback53</a></p>
                            </div>


                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <h2 >{intl.formatMessage({ id: 'introduce' })}</h2>
                        <Paper sx={{
                            p: 2,
                            display: 'table-cell',
                            height: 1,
                            borderRadius: '0.75rem'
                        }}>
                            <div className='intoduceDesc'>{intl.formatMessage({ id: 'introduceDesc' })}</div>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>

        </React.Fragment>
    );
}