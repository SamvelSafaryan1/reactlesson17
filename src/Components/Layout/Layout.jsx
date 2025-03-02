import Header from '../Header/Header'
import {Outlet} from 'react-router-dom'

function Layout({cards}){
    return(
        <div>
            <Header cards={cards}/>
            <Outlet/>
        </div>
    )
}

export default Layout
