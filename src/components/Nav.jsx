import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <div className='Nav'>
                <NavLink to='/'><h1>NIDVAR</h1></NavLink>
                <ul>
                    <NavLink to='/apps'><li>Apps</li></NavLink>
                    <NavLink to='/websites'><li>Websites</li></NavLink>
                    <NavLink to='/about'><li>About</li></NavLink>
                </ul>
            </div>
        )
    }
}

export default Nav