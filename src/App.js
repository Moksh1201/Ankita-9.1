import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "./WelcomePage";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./UserAuthContext";
import TopMenu from "./TopMenu";

function App() {
  const handleSignOut = () => {
    // Implement your sign-out logic here, e.g., clear user authentication state.
    // You may need to use a function from your UserAuthContext or authentication library.
  };

  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/WelcomePage"
                element={
                  <ProtectedRoute>
                    <WelcomePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<TopMenu />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              

              {/* Add a sign-out button */}
              
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;