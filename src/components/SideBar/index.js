import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/">Sweets</SideBarLink>
        <SideBarLink to="/">Drinks</SideBarLink>
        <SideBarLink to="/">Combo Delights</SideBarLink>
        <SideBarLink to="/">All items</SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRoute to="/">Place Order</SideBarRoute>
      </SideBtnWrap>
    </SideBarContainer>
  );
};

export default SideBar;
