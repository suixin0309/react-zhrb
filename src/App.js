import React, { Component } from 'react';
import {BrowserRouter, Route}from 'react-router-dom'

import pageList from './PageComponent'
import list from  './ListComponent'
import Home from './Home'
import Collection from './Collection'
import User from './User'

import './App.css';
import articleDetails from "./articleDetails";
var path= [
  {
    path: '/pageList',
    component: pageList,
    name: 'pa'
  },
  {
    path: '/list',
    component: list,
    name: 'li'
  },{
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path:'/Collection',
    component:Collection,
    name:'Collection'
  },
  {
    path:'/User',
    component:User,
    name:'User'
  },
  {
    path:'/articleDetails',
    component:articleDetails,
    name:'articleDetails'
  }
]
class App extends Component {
  render() {
    return (<BrowserRouter>
          <div>
            {
              path.map((page, index) => page.component ?
                  <Route key={index} exact path={page.path} component={page.component}/> : "")
            }
          </div>
        </BrowserRouter>

    );
  }
}
export default App