import { FormInput } from '../../pages/styles';
import {
    AwesomeButton,
  } from 'react-awesome-button';

interface Props {
    name: string,
    email: string,
    message: string,
    setName: (input_name: string) => void,
    setEmail: (input_email: string) => void,
    setMessage: (input_message: string) => void,
    sendEmail: (e: React.FormEvent<HTMLFormElement>) => void
}

const MessageForm: React.FC<Props> = ({name, email, message, setName, setEmail, setMessage, sendEmail}) => {
    return (
        <>
        <form style={{display:'flex', flexDirection:'column', gap:'50px', paddingTop:'5%', paddingBottom:'5%'}}>
                <FormInput
                variant="filled"
                placeholder="Name"
                required={true}
                value = {name}
                onChange={((e)=> (setName(e.target.value)))}
                />
                <FormInput
                variant="filled"
                placeholder="Email"
                required={true}
                value = {email}
                onChange={((e)=> (setEmail(e.target.value)))}
                />
                <FormInput
                multiline
                rows={4}
                variant="filled"
                placeholder="What's on your mind?"
                required={true}
                value = {message}
                onChange={((e)=> (setMessage(e.target.value)))}
                />
                </form>
                <div style={{paddingBottom:'10%', width:'30%', justifyContent:'center', alignItems:'center', display:'flex'}}>
                    <AwesomeButton onPress={sendEmail}>Send Message</AwesomeButton>
                    </div>
        </>
    )
}

export default MessageForm