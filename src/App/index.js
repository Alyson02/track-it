import { AuthProvider } from "context/AuthProvider";
import { TrackProvider } from "context/TrackProvider.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContainerApp from "shared/components/CotainerApp";
import GlobalStyle from "shared/components/GlobalStyle";
import { ProtectedLayout } from "shared/components/ProtectedLayout";
import routes from "./routes";
import Cadastro from "./screens/Cadastro";
import Login from "./screens/Login";

function App() {
  return (
    <TrackProvider>
      <AuthProvider>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<ContainerApp />}>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  element={<ProtectedLayout>{route.component}</ProtectedLayout>}
                />
              ))}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </Router>
      </AuthProvider>
    </TrackProvider>
  );
}

export default App;
