import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        product: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const product = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={product}>
        <Header />

        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />

              {/* <Route path="/projects/:id" element={<Project />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
