import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from '../views/Homepage/Index'
import List from '../views/List/Index'
// import Detail from './views/Detail/Index'
import { URLBASE } from '../config/config'
import Contact from '../layouts/footer/Contact';
import Login from '../views/Account/Login';
import Register from '../views/Account/Register';

import CreateProductSend from '../admin/views/send/CreateProductSend.jsx'
import EditProductSend from '../admin/views/send/EditProductSend.jsx'
import ListProductsSend from './../admin/views/send/ListProductsSend.jsx'
import ListProductsReceive from './../admin/views/receive/ListProductsReceive.jsx'
import ConfigPage from './../admin/views/configuration/ConfigUser.jsx'
import { ProtectedRoute } from './Protected-route'

const Routes = () => {
   
    return (
        <BrowserRouter  basename={`/${URLBASE}/`}>
            <Switch>
                <Route exact path={'/'} component={Homepage}  />
                <Route exact path={'/list'} component={List}  />
                <Route exact path={'/login'} component={Login}  />
                <Route exact path={'/register'} component={Register}  />
                <Route exact path={'/Contacto'} component={Contact} />

                <ProtectedRoute exact path={'/admin/create'} component={CreateProductSend} />
                <ProtectedRoute exact path={'/admin/edit/:id'} component={EditProductSend} />
                <ProtectedRoute exact path={'/admin/list'} component={ListProductsSend} />
                <ProtectedRoute exact path={'/admin/listRec'} component={ListProductsReceive} />
                <ProtectedRoute exact path={'/admin/config'} component={ConfigPage} />
                <Route render={ () => <h2>404</h2> } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;