import { Container, Box } from '@mui/material';
import React from 'react';
import './footer.css'
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components'

function FooterBar() {
    return(
        <div className="main-footer">
            <div className='container'>
                <div className='row'>
                    <table width="100%" >
                        <tr>
                            {/* column1 */}
                            <td>
                            <Container maxWidth="auto">
                                    <div className='col'>
                                        <h3>Contact Us</h3>
                                        <ul className='list-unstyled'>
                                            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                                                <Avatar
                                                    sx={{ width: 70, height: 65 }}
                                                    variant="square"
                                                    src="/img/fancierlogo1.png"
                                                />
                                                <Avatar
                                                    sx={{ width: 130, height: 65 }}
                                                    variant=""
                                                    src="/img/fancierlogo2.png"
                                                />
                                            </Box><br/>
                                            <div>Fancier INC.</div>
                                            <div>YEAR : 1 | GROUP : 01-03</div>
                                            <div>Department of Computer Engineering</div>
                                            <div>Prince of Songkla University</div>
                                            <div>Songkla, Thailand</div>
                                        </ul>
                                    </div>
                            </Container>
                            </td>
                            {/* column2 */}
                            <td>
                            <Container maxWidth="auto">
                                <Box sx={{fontSize:25,fontFamily:"Sarabun" ,mx: "auto" }}>
                                    อยากลอง อยากทำ</Box>
                                <Box sx={{fontSize:25,mx: "auto" }}>
                                    เลือกกิจกรรมที่ Fancier</Box>
                            </Container>
                            </td>

                            {/* column3 */}
                            <td>
                            <FooterContainer maxWidth="auto">
                                <div className='col'>
                                    <h3>About Us</h3>
                                    <ul className='list-unstyled'>
                                        <div style={{ textDecoration: 'none' }}><a href='/home'>Activites</a></div><br/>
                                        <div style={{ textDecoration: 'none' }}><a href='/history'>History</a></div><br/>
                                        <div style={{ textDecoration: 'none' }}><a href='/contact'>Contact</a></div>
                                    </ul>
                                </div>
                            </FooterContainer>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default FooterBar ;

const FooterContainer = styled.footer`
    a {
        text-decoration: none;
        color:  var(--mainWhite);
    }
    a:hover {
        color:  var(--mainWhite);
    }
    `;