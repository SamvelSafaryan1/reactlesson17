import {NavLink, useLocation} from 'react-router-dom'
import { MdLocalGroceryStore } from "react-icons/md"
import './Header.css'

function Header({cards}){
    return(
        <nav>
            <div className='cart'>
                
                <NavLink to='/card'>
                    <MdLocalGroceryStore />
                    <sub>{cards.length}</sub>
                </NavLink>
                
            </div>
        </nav>
    )
}

export default Header
