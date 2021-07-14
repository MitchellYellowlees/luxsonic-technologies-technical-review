import React from 'react'
import './styles/App.css';
import { useAuth0 } from '@auth0/auth0-react'
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar.jsx';
import DataEntryDashboard from './pages/DataEntryDashboard';
import { HashRouter, Switch, Route } from 'react-router-dom'
import DataViewingDashboard from './pages/DataViewingDashboard';

export default function Router() {
    const { isAuthenticated } = useAuth0()

    return ( 
    <div className="App">
        <HashRouter>
            <Switch>
        { !isAuthenticated ? (<> 
        <NavBar/>
        <Route exact={true} path="/" children = {<LandingPage/>}>
        </Route>
      </>
      ) : (
      <>
      <NavBar/>
      <Route exact={true} path="/" children={<DataEntryDashboard/>}/>
      <Route exact={true} path="/data" children={<DataViewingDashboard/>}/>
      </>
      )}
      </Switch>
      </HashRouter>
    </div>
    )
}