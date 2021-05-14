import styled from 'styled-components'
import Theme from '../../public/theme'
import Container from './container'

const ContainerText = ({ title, text }) => {

    return (

        <Container
            style={{ padding: '0px 20px', marginTop: '20px' }}
            column
            align="stretch"
            justify="stretch"
            mediaReverse="flex: 0"
        >
            {
                title == "Codar" ?
                    <Title>{title}</Title> :
                    <SubTitle>
                        {title}
                    </SubTitle>
            }

            <span style={{ color: 'white' }}>{text}</span>
        </Container>
    )
}

const Footer = () => {

    const texts = [
        {
            title: "Codar",
            text: <div><p>Criamos websites incríveis </p></div>
        },
        {
            title: "Sobre",
            text: <div><p>Amamos criar soluções e entregar sites incríveis</p></div>
        },
        {
            title: "Contato",
            text: <div>
                <p>123 Av. Manjar - Nárnia </p>
                <p>+55 31 97070-7070</p>
                <p>contato@contato.com</p>
            </div>,
        },
        {
            title: "Redes Sociais",
            text: <Container
                justify="flex-start"
            >
                <p><Icon first className="fab fa-instagram" color="white"></Icon></p>
                <p><Icon className="fab fa-facebook-f" ></Icon></p>
                <p><Icon className="fab fa-twitter" ></Icon></p>
            </Container>
        }
    ]


    return (
        <Container
            style={{ backgroundColor: 'black', marginTop: 100 }}
            align="stretch"
            mediaReverse="flex-direction: column;
            align-items: flex-start; justify-content: space-between; height: 600px;"
        >

            {texts.map((item) =>
                <ContainerText
                    key={item.title}
                    text={item.text}
                    title={item.title}
                />
            )}

        </Container>
    )
}

export default Footer

const Title = styled.text`
    font-size: 1.5em;
    color: white;
    font-weight: bolder;

    &:after {
        content: '.';
        font-size: 30px;
    }
`

const SubTitle = styled.text` 
    color: white;
    font-size: 1.2em;
    font-weight: bolder;
`

const Icon = styled.i`
    color: ${Theme.colors.primary};
    font-size: 1.5em;
    cursor: pointer;
    transition: 0.5s all;

    margin-left: ${props => props.first ? 'inherit' : '30px'};

    &:hover {
        color: white;
    }
`