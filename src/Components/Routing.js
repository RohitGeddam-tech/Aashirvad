import React,{useEffect, useState} from 'react';
import Header from './Header';
import App from '../App';
import FullPage from '../AboutUs/FullPage';
import Contacts from './Contacts';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from './Form';

const Routing = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-width:360px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-width:360px)').matches)
        })
    })

    return(<div>
        {isMobile ? <>hello</> : <Router>
            <div className='App'>
                <Header />
                <Switch>
                    <Route path='/Aashirvad' exact component={App}/>
                    <Route path='/Aashirvad/About' component={FullPage}/>
                    <Route path='/Aashirvad/Contacts' component={Contacts}/>
                    <Route path='/Aashirvad/Form' component={Form}/>
                </Switch>
            </div>
        </Router>}
        </div>
    )
}

export default Routing;
