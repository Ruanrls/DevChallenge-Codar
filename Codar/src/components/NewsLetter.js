import Button from '../components/button'
import styled from 'styled-components'

const Newsletter = () => {

    return (
        <Container style={{ marginTop: 50 }}>
            <text style={{ fontWeight: 'bolder', fontSize: 25 }}>
                Nossa equipe está à disposição!
            </text>

            <ContainerInput>
                <Input placeholder="Celular" />
                <Button mediaWidth="45%">
                    Ligamos para você
                </Button>
            </ContainerInput>
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    height: 150px;
`

const Input = styled.input`
    font-size: 20px;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: rgba(0,0,0, 0.3);

    @media (min-width: 720px) {
        width: 45%;
    }
`

const ContainerInput = styled(Container)`    
    justify-content: space-evenly;

    @media(min-width: 720px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export default Newsletter