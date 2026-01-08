import React from "react";

import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { blueGrey } from '@mui/material/colors';


const Footer: React.FC = () => {
    return (
      <div style={{flexShrink: 0}}>
        <MDBFooter className='text-center text-white' style={{ backgroundColor: blueGrey[50] }}>
        
          <MDBContainer className='pt-4'>
            <section className='mb-4'>
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='https://www.instagram.com/jake_wc12/'
                role='button'
              >
                <MDBIcon fab className='fa-instagram' size='lg'/>
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='https://www.linkedin.com/in/jacob-wu-chen-7339a624a/'
                role='button'
              >
                <MDBIcon fab className='fa-linkedin' size='lg'/>
              </MDBBtn>
    
              <MDBBtn
                rippleColor="dark"
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='https://github.com/jakewc12'
                role='button'
              >
                <MDBIcon fab className='fa-github' size='lg'/>
              </MDBBtn>
            </section>
          </MDBContainer>
          <div style={{paddingBottom:'2%', color:'black', fontSize:'80%'}}>
          (c) 2025 Jacob Wu-Chen
          </div>
        </MDBFooter>
        </div>
      );
}

export default Footer