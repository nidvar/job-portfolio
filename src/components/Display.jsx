import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Apps from './Apps';
import Websites from './Websites';
import About from './About';
import './style.css';
import {Switch, Route} from 'react-router-dom';

class Display extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <Switch>
                    <Route exact path ='/' render={()=>(<Main />)}/>
                    <Route exact path ='/Websites' render={()=>(<Websites />)}/>
                    <Route exact path ='/Apps' render={()=>(<Apps />)}/>
                    <Route exact path ='/About' render={()=>(<About />)}/>
                </Switch>
                
            </div>
        )
    }
}

export default Display;