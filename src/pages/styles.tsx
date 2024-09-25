import styled from 'styled-components';
import { TextField } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
export const UnderlinedText = styled.a`
    text-decoration: underline;
`

export const Header = styled.h2(()=> ({
    color: 'black',
    paddingLeft: '10px',
    textAlign: 'left'
}))

export const ProjectHeader = styled.h4(()=> ({
    color: 'black',
    paddingLeft: '8%',
    textAlign: 'left',
    paddingTop: '3%'
}))

export const OtherProjectHeader = styled.h5(()=> ({
    color: 'black',
    paddingLeft: '5%',
    textAlign: 'left',
    paddingTop: '3%'
}))

export const ProjectParagraph = styled.p(()=> ({
    paddingLeft: '5%',
    textAlign: 'left',
    paddingTop: '1%'
}))

export const SmallerHeader = styled.h5(()=> ({
    color:'black',
    textAlign: 'center', 
    paddingTop:'3%',
    fontWeight:'500'
}))
export const HeaderText = styled.div(()=> ({
   paddingLeft: '3%',
    alignItems:'center'
}))
export const BoxContainer = styled.div(() => ({
    border: '1px',
    margin: 'auto',
    flexDirection: 'column',
    boxShadow: '2px 2px 5px #ccc',
    display: 'flex',
    width:'60%',
    marginBottom:'10px',
    borderRadius:'5px',
    backgroundColor: 'white',
  }));

  export const TextContainer = styled.div(()=> ({
    paddingLeft: '6.5%',
    paddingRight: '8%',
    paddingTop: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
  }))


  export const PhotoShuffleDiv = styled.div(()=> ({
    width:'50%',
    height:'50%'
  })) 


export const HeaderAndPic = styled.div(()=> ({
    display:'flex',
    flexGrow:'4',
    flexDirection: 'row',
    alignItems: 'center',
    gap:'2%',
}))

export const PicBorder = styled.div(()=>({
    border:'solid',
    borderRadius: '10%',
    width: 'auto'
}))

export const Picture = styled.img(()=> ({
    height:'50px',
    width: 'auto',
    border: '1px',
    boxShadow: '2px 2px 5px #ccc',
    borderRadius: '5%',
    alignItems: 'center'
}))


export const Thing = styled.ul(()=>({
fontSize:'13px',
paddingLeft:'22%',
}))

export const InfoContainer = styled(BoxContainer)`
flex: '1';
display: 'flex';
flexDirection: 'column'; 
justifyContent:'center';
`

export const InformationContainer = styled.div(()=>({
    paddingBottom:'3%',
    width:'100%'
}))

export const SkillsTab = styled.div(() => ({
    display: 'flex', 
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    gap: '10%', 
    padding: '2%', 
    height: 'auto', 
    width: '100%'
}))

export const FormInput = styled(TextField)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    id: 'filled-required',
  }));

  export const ProjectSkillsTab = styled(BoxContainer)(() => ({
    fontSize:'85%',
    backgroundColor: blueGrey[50], 
    boxSizing:'border-box',
    flexDirection: 'row', 
    width:'auto', 
    height:'4vh', 
    alignItems:'center', 
    justifyContent:'center', 
    paddingLeft:'6px', 
    paddingRight:'6px'
}))