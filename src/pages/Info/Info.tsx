import PDFViewer from "../../components/PDFViewer";
import { BoxContainer, InfoContainer, InformationContainer, ProjectHeader, SkillsTab, SmallerHeader, TextContainer } from "../styles";
import { EXPERIENCE, Languages } from "./constants";
import { Picture } from "../styles";
import { blueGrey } from "@mui/material/colors";
const Info: React.FC = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '5%', paddingBottom:'2.5%', width: '100%', textAlign: 'left' }}>         
         <InformationContainer>
            <InfoContainer>
               <TextContainer>
                  <ProjectHeader style={{paddingLeft:'1%', paddingTop:'initial'}}>Where I've Been</ProjectHeader>
                  <TextContainer style={{alignItems: 'left',
    justifyContent: 'left',
    textAlign:'left', paddingLeft:'1%', paddingBottom:'1%'}}>
                     
                     {
                        EXPERIENCE.map((menu)=> (
                           <>
                           <h6>{menu.name}</h6>
                           {
                              menu.jobs.map((thing) => (
                                 <h6>
                                    {thing.details}
                                 </h6>
                              ))
                           }
                           <br/>
                           </>
                        ))
                        
                     }
                  </TextContainer>
               </TextContainer>
            </InfoContainer>
         </InformationContainer>
         
         <InformationContainer>
            <InfoContainer>
               <PDFViewer/>
            </InfoContainer>
         </InformationContainer>
         
         <InformationContainer>
            <InfoContainer style={{height:'auto', flexWrap:'wrap',}}>
               <TextContainer style={{paddingBottom:'0%'}}>
               <ProjectHeader style={{paddingLeft:'1%', paddingTop:'initial'}}>Tools and Technologies</ProjectHeader>
               </TextContainer>
               <SkillsTab style={{paddingBottom:'5%', justifyContent:'center', display:'flex'}}> {
                  Languages.map((menu)=> (
                     <a key={menu.name} href={menu.website}>                     
                     <BoxContainer style={{ backgroundColor: blueGrey[50], boxSizing:'border-box', gap:'10px',flexDirection: 'row', width:'auto', height:'5vh', alignItems:'center', display:'inline-flex', justifyContent:'center', paddingLeft:'6px', paddingRight:'6px'}}>
                        <div style={{fontSize:'70%'}}>
                        {menu.name}
                        </div>
                        <Picture style={{ boxShadow:'none', height:'65%', width:'auto'}}src={menu.logo} alt ="Bruh" />
                     </BoxContainer>
                     </a>
                  ))}
               </SkillsTab>
            </InfoContainer>
         </InformationContainer>

         
       </div>
    );
   };
   
   export default Info;