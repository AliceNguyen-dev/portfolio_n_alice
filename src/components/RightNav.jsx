import React from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';

const UI = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


const RightNav = ({ open }) => {
    return (


        <div className="display-menu">
            <UI open={open}>
                <Link className="menu" to={"/"}>Home</Link>
                <Link className="menu" to={"/resume"}>Résume</Link>
                <Link className="menu" to={"/portfolio"}>Portfolio</Link>
                <Link className="menu" to={"/contact"}>Contact</Link>
            </UI>
        </div>


    );
}

export default RightNav;