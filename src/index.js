import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:`https://api.graphcms.com/simple/v1/swapi`
  })
}) 
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
