import React from 'react';
import Header from './Header';
import App from '../App';
import FullPage from '../AboutUs/FullPage';
import Contacts from './Contacts';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Routing = () => {
    return(
        <Router>
            <div className='App'>
                <Header />
                <Switch>
                    <Route path='/Aashirvad' component={App}/>
                    <Route path='/About' component={FullPage}/>
                    <Route path='/Contacts' component={Contacts}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Routing;
