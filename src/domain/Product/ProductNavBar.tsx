"use client";

import { Popover } from "antd";
import styled from "styled-components";
import CreateProductModal from "./CreateProduct/Modal";

export default function ProductNavBar() {
  return (
    <NavBarContainer>
      <h1>Products</h1>
      <div style={{ marginRight: "50px" }}>
        <Popover content={"Add new product"}>
          <CreateProductModal />
        </Popover>
      </div>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  align-items: center;
  justify-content: space-between;
  h1 {
    margin-right: 50px;
  }
  svg {
    color: black;
    margin-left: 20px;
    margin-right: 20px;
    &:hover {
      color: dimgray;
      cursor: pointer;
    }
  }
`;
