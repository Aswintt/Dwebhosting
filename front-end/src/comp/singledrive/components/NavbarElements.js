import styled from "styled-components";

export const Nav = styled.nav`
  background: #29323a;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 10;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  color: #ffff;
  align-text: left;
`;

export const Note = styled.div`
  color: #ffff;
  align-text: center;
  font-size: 12px;
  padding-top: 10px;
`;
