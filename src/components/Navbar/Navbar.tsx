import { Navbar as FlowbiteNavbar } from "flowbite-react";
import { NAVBAR_MENUS } from './constants';
import Image from './jwc logo negative.png'
import {lightGreen, indigo} from '@mui/material/colors';
const Navbar: React.FC = () => {
    return (
        <FlowbiteNavbar fluid rounded style={{backgroundColor: lightGreen[50]}}>
          <FlowbiteNavbar.Brand href="/">
            <img src={Image} className="mr-3 h-6 sm:h-9" alt="Bruh" />
            <div style={{color: indigo[500]}}>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jacob Wu-Chen</span>
            </div>
          </FlowbiteNavbar.Brand>
          <FlowbiteNavbar.Toggle />
          <FlowbiteNavbar.Collapse>
            <FlowbiteNavbar.Link href="#" active>
              Home
            </FlowbiteNavbar.Link>
            {NAVBAR_MENUS.map((menu)=>(
                <FlowbiteNavbar.Link href={menu.path}>{menu.text}</FlowbiteNavbar.Link>

            ))}
            
          </FlowbiteNavbar.Collapse>
        </FlowbiteNavbar>
      );

}

export default Navbar