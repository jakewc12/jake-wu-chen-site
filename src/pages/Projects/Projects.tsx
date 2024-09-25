import { useState } from "react";
import { useEffect } from "react";
import { InfoContainer, TextContainer, SkillsTab, BoxContainer, ProjectHeader, ProjectParagraph, ProjectSkillsTab, OtherProjectHeader } from "../styles";
import { PROJECTS } from "./constants";
import TextTransition, { presets } from 'react-text-transition';


const Projects: React.FC = () => {
   const TEXTS = ['Projects', 'Github Code', 'Website URLS']
   const [index, setIndex] = useState(0);
   useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        2500, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

   return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '5%', paddingBottom:'2.5%', width: '100%', textAlign: 'left' }}>         
            <InfoContainer style={{height:'auto', flexWrap:'wrap'}}>
               <TextContainer style={{height:'80px'}}>
                  <ProjectHeader>      
                     <TextTransition 
                     springConfig={presets.gentle}
                     direction="down"
                     translateValue="60%"
                     >{TEXTS[index % TEXTS.length]}</TextTransition>
                  </ProjectHeader>
               </TextContainer>
               <SkillsTab style={{paddingTop:'2.5%', gap:'20px', paddingBottom:'5%'}}>
               {
                  PROJECTS.map((menu)=> (
                     <a href={menu.link} style={{width:'100%', paddingTop:'2.5%'}}>
                        <BoxContainer style={{backgroundColor:'#fafafa', width:'80%'}}>
                           <OtherProjectHeader> 
                              {menu.title}
                           </OtherProjectHeader>
                           <ProjectParagraph style={{fontSize:'70%'}}>
                              {menu.description}
                           </ProjectParagraph>
                           <SkillsTab style={{gap:'5px'}}>
                              {
                                 menu.skills.map((skill)=> (
                                    <ProjectSkillsTab>
                                       {skill.name}
                                    </ProjectSkillsTab>
                                 ))
                              }
                           </SkillsTab>
                        </BoxContainer>
                     </a>
                  ))
               }
               </SkillsTab>
            </InfoContainer>
      </div>
    );
   };
   
   export default Projects;