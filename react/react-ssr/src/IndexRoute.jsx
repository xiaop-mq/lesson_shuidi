import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
class IndexRoute extends React.Component {
  render() {
    const { route } = this.props;
    return (
      <div>
        IndexRoute  
        <Header />
        { renderRoutes(route.routes) }
      </div>
    )
  }
}

export default IndexRoute;