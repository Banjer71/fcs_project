import styled from 'styled-components';

export const BtnContet = styled.div`
	border: 1px solid green;
	display: inline-block;

	> .bar {
		width: 30px;
		margin: 3px;
		height: 4px;
		color: rgb(139, 139, 137);
		background: grey;
	}

    @media screen and (min-width: 780px) {
		display: none;
	}
`;

export const Nav = styled.div`
max-width: 1200px;
margin: 0 auto;

@media screen and (min-width: 780px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`;

export const LogoAndBtn = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;

export const Logo = styled.div`
cursor: pointer;
padding: 15px;

> img {
    width: 90px;
}
`;

export const Navigation = styled.ul`
height: 0;
transition: all 0.5s ease;
overflow: ${(props) => (props.isOpen ? 'visible' : 'hidden')};


> li a {
    background-color: rgb(234, 234, 234);
    display: block;
    padding-bottom: 20px;
    
    cursor: pointer;
}

> li a:hover {
    background-color: #efece1;
}

@media screen and (min-width: 780px) {
    overflow: visible;
    display: flex;

    > li a {
        background-color: transparent;
        padding: 15px;
        transition: all 0.5s ease;
    }

    > li a:hover {
        background-color: #efece1;
    }
}
`;
