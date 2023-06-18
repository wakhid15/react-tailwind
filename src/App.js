import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SwapiPeople from "./pages/SwapiPeople";
import { ApolloProvider } from "@apollo/client";
import GraphQLClient from "./api/GraphQLClient";
import Todo from "./pages/Todo";


function App() {
  return (
    <ApolloProvider client={GraphQLClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/swapi-people" element={<SwapiPeople />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
