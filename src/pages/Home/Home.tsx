import { UnderlinedText, Header, BoxContainer, HeaderText, TextContainer, HeaderAndPic, SmallerHeader, Thing } from "../styles";
import MyImage from './headshot.png'
import { Picture } from "../styles";
import { indigo } from "@mui/material/colors";

const Home: React.FC = () => {
   return (
   <div> 
         <div style={{paddingTop: '5%', paddingBottom:'2.5%'}}>
         <BoxContainer>
            <HeaderAndPic style={{padding:'2%', paddingTop:'4%'}}>
               <HeaderText>
                  <Picture src={MyImage} alt ="Bruh" />
               </HeaderText>
               <Header>
                  About Me
                  </Header>
            </HeaderAndPic>
               <TextContainer>
                  <h6>
                     Hello! My name is Jacob Wu-Chen and I'm a recently graduated Computer Science major from  {"\t"}
                     <UnderlinedText href="https://www.northeastern.edu/" style={{color: indigo[500], fontWeight:'bold'}}>Northeastern University</UnderlinedText>. I have a passion for full-stack development as well as artifical intelligence. Further details on my skills and experience can be viewed <UnderlinedText href={'/info'} style={{color:indigo[500], fontWeight:'bold'}}>here</UnderlinedText>. 
                     
                  </h6>
               </TextContainer>
               <TextContainer>
                  <h6>
                     I've spent time as a Co-op at both the Air Force and MORSE Corp. I spent time focusing on full-stack development as well as computer vision during both of these Co-ops. Feel free to ask about my experiences! Outside of CS, I'm interested in golf, indoor rock climbing, going to jazz bars, and traveling internationally. 
                  </h6>
               </TextContainer>
               <SmallerHeader>
               Some fun facts about me
               </SmallerHeader>
               <div style={{ paddingLeft:'10%', paddingBottom:'5%'}}>
               <Thing>
                  <li>Top artist on Spotify: Chet Baker</li>
                  <li>Lowest round of golf: 70</li>
                  <li>Highest grade boulder/climb: v6</li>
                  <li>Favorite college credit: Algorithms and Data Structures(CS3000)</li>
                  <li>Most used programming language: Python</li>
               </Thing>
               </div>
         </BoxContainer>
         </div>
      
   </div>
   );
  };
  
  export default Home;