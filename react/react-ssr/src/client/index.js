import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  renderRoutes
} from 'react-router-config'
import { Provider } from 'react-redux'
import { getClientStore } from '../store/index';
import routes from '../Routes'
import Header from '../components/Header';
// SPA
// ReactDom.render(<Header />, document.getElementById('root'));
// SSR 不需要render 
// 调和：服务端已经完成，客户端不会重复做
// <router-view>
const store = getClientStore()
const App = function() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        { renderRoutes(routes) }
      </BrowserRouter>
    </Provider>
  )

}
// App 不是组件 class Com
ReactDom.hydrate(<App />, document.getElementById('root'));