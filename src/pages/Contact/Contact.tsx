import { useState } from "react";
import { BoxContainer, HeaderAndPic, Header } from "../styles";

import 'react-awesome-button/dist/styles.css';
import './my-awesome-button-theme.css';
import { Divider } from '@fluentui/react-components';
import Alert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import emailjs from 'emailjs-com';
import MessageForm from "../../components/MessageForm";

const Contact: React.FC = () => {
    const [name, setName] = useState<string>('' )
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [popUp, setPopUp] = useState(false)
    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) =>{
        if(
            name === '' ||
            email === '' ||
            message === ''
        ) {
            setPopUp(true)
            return
        }
        console.log('passed')
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
            const userId = 'smXhCLJBWCrGrhVgA'
            emailjs.init(userId);   
        emailjs.send('service_pbqcfxq', 'template_igqk6hz',  {
            from_name: name, 
            from_email: email, 
            message: message})
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
}

    return (
        <div style={{ paddingTop:'5%', paddingLeft:'5%', paddingRight:'5%', paddingBottom:'2.5%' }}>
            <BoxContainer>
                <HeaderAndPic style={{ justifyContent:'center', paddingTop:'3%', flexDirection:'column', gap:'5px'}}>
                    <Header style={{textAlign:'center'}}>
                        Contact Me
                    </Header>
                    <a href="mailto:wu-chen.j@northeastern.edu">
                        <h6 style={{textDecoration: 'underline'}}>
                            wu-chen.j@northeastern.edu
                        </h6>
                    </a>
                    <Divider 
                inset={true}
                appearance="brand"
                style={{padding:'2%', width:'75%'}}
                />
               <MessageForm 
               name={name} 
               email={email}
                message={message}
                setName={setName}
                setEmail={setEmail}
                setMessage={setMessage}
                sendEmail={sendEmail}
               />
                </HeaderAndPic>
                <Snackbar open={popUp} onClose={() => {console.log('error')}}>
                    <Alert severity="error" onClose={() => {console.log('error')
                        setPopUp(false)
                    }}>Complete All Fields</Alert>
                </Snackbar>
            </BoxContainer>
        </div>
    );
     
   };
   
   export default Contact;