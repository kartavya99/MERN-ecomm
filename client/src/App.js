import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";

import "./App.css";

//Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

//Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage it it exists
  const token = localStorage.getItem("id_token");
  //return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authlink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <main className="py-3">
            <Container>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/product/:id" element={<ProductPage />}></Route>
              </Routes>
            </Container>
          </main>
          <Footer />
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
