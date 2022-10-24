import { useAuth } from "context/AuthProvider/useAuth";
import styled from "styled-components";

export default function NavBar() {
  const auth = useAuth();

  return (
    <Header>
      <Logo>Trackit</Logo>
      <ProfilePic data-identifier="avatar" src={auth.user?.image} />
    </Header>
  );
}

const Header = styled.header`
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  height: 70px;
  padding: 10px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

const ProfilePic = styled.img`
  border-radius: 98.5px;
  width: 51px;
  height: 51px;
  object-fit: cover;
`;

const Logo = styled.h1`
  font-family: "Playball", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  color: #fff;
`;
