import { UnderlinedText, Header, BoxContainer, HeaderText, TextContainer, HeaderAndPic, SmallerHeader, Thing } from "../styles";
import MyImage from './headshot.png'
import { Picture } from "../styles";
import { indigo } from "@mui/material/colors";
import { TypeAnimation } from 'react-type-animation';

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
               <TypeAnimation
                  sequence={['About Me',1000,'']}
                  repeat={Infinity}
                  deletionSpeed={5}
                  />
                  </Header>
            </HeaderAndPic>
               <TextContainer>
                  <h6>
                     Hello! My name is Jacob Wu-Chen and I'm a third year undergrad Computer Science student at  {"\t"}
                     <UnderlinedText href="https://www.northeastern.edu/" style={{color: indigo[500], fontWeight:'bold'}}>Northeastern University</UnderlinedText>. I have a passion for full-stack development as well as artifical intelligence. Further details on my skills and experience can be viewed <UnderlinedText href={'/info'} style={{color:indigo[500], fontWeight:'bold'}}>here</UnderlinedText>. 
                     
                  </h6>
               </TextContainer>
               <TextContainer>
                  <h6>
                     I enjoy teaching myself new software technologies, such as neural nets, web scraping, server-side relations, and more. Outside of CS, I'm interested in golf, indoor rock climbing, going to jazz bars, and traveling internationally. 
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