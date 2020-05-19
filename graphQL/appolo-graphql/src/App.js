import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import './App.css';
import "antd/dist/antd.css"
import { Card } from "antd"
import TodoList from './components/TodoList';
// Apollo 是graphql 框架
// ApolloProvider 
const client = new ApolloClient({
  url: 'http://localhost:3001/graphql' //  来自于服务器端
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Card 
        style={{width: "600px", margin: "100px auto"}}>
        <h1>GraphQL demo</h1>
        <TodoList />
      </Card>
    </ApolloProvider>
  );
}


export default App;

