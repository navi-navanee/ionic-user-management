import { NavLink, Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useContext  } from 'react';
import { AuthContext } from './context/AuthContext';

setupIonicReact();
const currentUser =false
// const {currentUser} = useContext(AuthContext)

const RequireAuth = ({children} :any) => {
  return currentUser ? (children) : <Redirect to="/" />
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
      <Route exact path="/" component={Login} />
      <RequireAuth>
      <Route exact path="/home" component={Home} />
      </RequireAuth>
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
