
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth0Provider';
import Router from './Router.jsx';


function App() {
  return (
    <BrowserRouter>
    <Auth0ProviderWithHistory>
    <Router/>
    </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}

export default App;
