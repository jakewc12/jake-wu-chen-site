//import Image from 'public/Jacob Wu-Chen Resume 6.13.pdf'
import Image from './Jacob Wu-Chen Resume 6.13-1.png'
import {
    AwesomeButton,
  } from 'react-awesome-button';
  import 'react-awesome-button/dist/styles.css';

const PDFViewer = () => {
    const buttonOnClick = () => {
        fetch(Image).then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                const alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Jacob Wu-Chen Resume.png";
                alink.click();
            });
        });
    }
 return (
    <AwesomeButton onPress={buttonOnClick}>Click To Download My Resume</AwesomeButton>
 );
};
export default PDFViewer;