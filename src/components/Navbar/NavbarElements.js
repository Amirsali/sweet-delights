import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";

export const Nav = styled.nav`
  background: transparent;
  position: float;
  height: 80px;
  display: flex;
  padding-left: 20px;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 5px;
    left: 25px;
    font-size: 1.5rem;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: white;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(IoFastFoodOutline)`
  font-size: 2rem;
  color: white;

  transform: translate(-50%, -15%);
`;
