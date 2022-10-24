import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

const DivApp = styled.div`
  padding: 70px 0 85px 0;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

export default function ContainerApp({ children }) {
  return (
    <DivApp>
      <NavBar />
      <Outlet />
      {children}
      <Footer />
    </DivApp>
  );
}
