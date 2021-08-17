import React from 'react';
import styled from 'styled-components';
import githubLogo from './GitHub-Mark-32px.png';

const FooterStyled = styled.footer`
	left: 0px;
	bottom: 0px;
	background-color: black;
	width: 100%;
	height: 5%;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LinkStyled = styled.a`
	display: inline-block;
	height: 32px;
	width: 32px;
	background-image: url(${githubLogo});
	background-repeat: no-repeat;
	filter: invert(100%);
	margin-left: 20px;
`;

export default function Footer() {
	return (
		<FooterStyled>
			<span>Made by Lance Dang</span>
			<LinkStyled href='https://github.com/lancedang64/project_NAME'></LinkStyled>
		</FooterStyled>
	);
}
