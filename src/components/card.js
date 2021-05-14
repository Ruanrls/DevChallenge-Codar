import styled from 'styled-components'
import Theme from '../../public/theme'
import Container from '../components/container'

const Card = ({ text, author, company }) => {

    return (
        <CardContainer justify="space-evenly" align="flex-start">
            <Circle />

            <Container column align="flex-start">
                <p>
                    {text}
                </p>
                <Title>
                    {author}
                </Title>
                <text style={{ fontSize: '0.9em', fontWeight: 'bolder' }}>
                    {company}
                </text>
            </Container>
        </CardContainer >
    )
}

const Circle = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${Theme.colors.primary};
    border-radius: 100%;
    margin-right: 20px;
    margin-top: 10px;
`

const CardContainer = styled(Container)`
    background-color: ${Theme.colors.grey};
    border-radius: 10px;
    padding: 10px 10px;
    max-width: 600px;

    @media(max-width: 720px ) {
        width: 80%;
    }
`

const Title = styled.text`
    font-weight: bolder;
    font-size: 1.5em;
`

export default Card