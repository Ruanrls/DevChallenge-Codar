import styled from 'styled-components'
import Theme from '../public/theme'

const Header = () => {


    return (
        <HeaderContainer>
            <Container flex="2">
                <Title>Codar</Title>
            </Container>

            <Container style={estilo}>
                <Links href="#" >Início</Links>
                <Links href="#" >Serviços</Links>
                <Links href="#" >Contatos</Links>
                <LinkStyle href="#">Login</LinkStyle>
            </Container>
        </HeaderContainer>
    )

}

const Title = styled.h1`
    font-size: 2em;
    color: ${Theme.colors.primary};
    font-weight: bold;
    font-style: italic;
    &::after {
        content: ".";
        color: black;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: 'center';

    @media(max-width: 720px) {
        flex-direction: column;
        align-items: 'center';
    }
`

const Links = styled.a`
    color: black;
    text-decoration: none;
    &:hover {
        color: black;
        cursor: pointer;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex: ${props => props.flex || 1};
    align-items: center;
    padding: 0 40px;

    @media(max-width: 720px) {
        justify-content: center;
    }
`
const estilo = {
    justifyContent: 'space-between'
}

const LinkStyle = styled(Links)`
    background-color: ${Theme.colors.primary};
    padding: 10px 40px;
    border-radius: 10px;
    color: white;

    @media(max-width: 720px) {
        display: none;
    }
`

export default Header