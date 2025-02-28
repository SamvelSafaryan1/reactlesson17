import {NavLink} from 'react-router-dom'
import { MdLocalGroceryStore } from "react-icons/md"
import './Header.css'

function Header(){
    return(
        <nav>
            <div>
                <NavLink to='/card'>
                    <MdLocalGroceryStore />
                </NavLink>
            </div>
        </nav>
    )
}

export default Header
