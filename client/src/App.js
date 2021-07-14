
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth0Provider';
import Router from './Router.jsx';
import { Provider } from 'react-redux'
import { configureStore } from './redux'

const store = configureStore()

function App() {
  return (
    <BrowserRouter>
    <Auth0ProviderWithHistory>
      <Provider store={store}>
    <Router/>
    </Provider>
    </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}

export default App;
