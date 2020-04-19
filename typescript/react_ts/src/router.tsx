// vue 全家桶   react  router 
import * as React from 'react'; // 组件
import { Route, HashRouter, Switch } from 'react-router-dom';
// vue-router 对比学习 react-router 
// import { About } from './components'
import { App } from './app';
import { About, MembersPage } from './components';
export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    // new VueRouter()
    <HashRouter>
      <div className="container-fluid">
        {/* routes 数组 */}
        <Switch>
        <Route path="/" exact component={ App }/>
        <Route path="/about" component={ About }/>
        <Route path="/members" component={ MembersPage }/>
        </Switch>
      </div>
    </HashRouter>
  )
}

// new vue({
//   el: '',
//   router,
//   App
// })