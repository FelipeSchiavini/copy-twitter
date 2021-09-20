import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './Login/Login'
import Geral from './geral/Geral'
import CreateAccount from './Login/CreateAccount';
function Routes() {
    return (
      <>
        <div className="routes">
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route exact path="/">
              <Redirect to='/login'/>
            </Route>
            <Route path="/create-account">
              <CreateAccount/>
            </Route>
            <Route path="/geral">
              <Geral/>
            </Route>
            <Route>
              <p>404 - Rota não encontrada</p>
            </Route>
          </Switch>
        </div>
      </>
    );
  }
  
export default Routes;  