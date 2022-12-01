import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
padding: 1.5rem;
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
border-radius: 20px;
border: 1px solid #41C2CB;
background-color: #80D6DC;
text-decoration: none;
color: #FFFFFF;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
text-transform: uppercase;
cursor: pointer;

&:hover{
    text-decoration: none;
    color: #FFFFFF;
	transform: scale(1.05);
}
` 