import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge'
import MailIcon from "@mui/icons-material/Mail";
import { ShoppingCartOutlined } from "@mui/icons-material";

const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Right = styled.div`
  flex: 1;
  display: flex ;
  align-items: center;
  justify-content: flex-end ;
`
const Input = styled.input`
border : none;
`
const Language = styled.span`
  font-size: 14;
  cursor: pointer;
`
const Logo = styled.h1`
font-weight: bold;
`

const SearchContainer = styled.div`
border : 0.5px solid lightgray;
display: flex;
align-items:center;
margin-left : 25px;
padding: 5px;
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>en</Language>
          <SearchContainer>
            <Input/> <SearchIcon style={{color:'gray', fontSize : '16'}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>Logo here</Logo></Center>
        <Right>
          <MenuItem>
        Register
        </MenuItem>
        <MenuItem>
        Sign in
        </MenuItem>
        <MenuItem>
        <Badge badgeContent='4' color='primary'>
          <ShoppingCartOutlined/>
        </Badge>
        </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
