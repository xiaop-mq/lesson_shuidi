import React from 'react';
import { renderRoutes } from 'react-router-config';
class IndexRoute extends React.Component {
  render() {
    const { route } = this.props;
    return (
      <div>
        IndexRoute  
        { renderRoutes(route.routes) }
      </div>
    )
  }
}

export default IndexRoute;