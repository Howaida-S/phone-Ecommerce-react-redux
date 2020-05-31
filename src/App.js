import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Products from './containers/Products/Products';
import Details from './containers/Products/Details/Details';
import Cart from './containers/Cart/Cart';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCartPlus, faTrashAlt, faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
library.add(faCartPlus, faTrashAlt, faBars, faTimes)
function App() {
  return (
      <>
        <Layout>
          <Switch>
            <Route path='/details' component={Details}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/' exact component={Products}/>
            <Route component = {NotFoundPage} /> {/* if page not found show this component without path to='' */}
          </Switch>
        </Layout>
      </>
  );
}

export default App;