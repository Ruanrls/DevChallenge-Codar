import styled from 'styled-components'
import Image from 'next/image'
import Theme from '../../public/theme'
import Button from '../components/button'
import Container from '../components/container'

const CheckList = () => {

    return (
        <>
            <Container
                style={{ marginTop: '100px' }}
                mediaOptions=" order: 1; flex-direction: row;"
                align="center"
                column
            >
                <Container mediaOptions="order: 2">
                    <ContainerImage>
                        <Image
                            src="/coding.png"
                            width={500}
                            height={500}
                        />
                    </ContainerImage>
                </Container>
                <Container mediaOptions="order: 1">
                    <ul style={{ listStyle: 'none' }}>
                        <ListElement>Domínio personalizado</ListElement>
                        <ListElement>Hospedagem</ListElement>
                        <ListElement>Site responsivo</ListElement>
                        <ListElement>Redes sociais</ListElement>
                        <ListElement>Chat online</ListElement>
                        <ListElement>Blog integrado</ListElement>
                    </ul>
                </Container>
            </Container>


            <Container >
                <Block />
                <Block />
                <Container
                    style={{ height: '200px', marginTop: '60px' }}
                    column align="center" justify="space-evenly"
                    flex="6"
                    mediaOptions="align-items: flex-start;"
                >
                    <text style={{ fontWeight: 'bolder', fontSize: 20 }}>
                        Nossa equipe está à disposição!
                    </text>

                    <Container
                        column
                        justify="space-evenly"
                        mediaOptions="flex-direction: row; justify-content: space-between; min-width: 400px;"
                    >
                        <Input placeholder="Celular" />
                        <Button maxWidth="500px" mediaWidth="150px">
                            Ligamos para você
                        </Button>
                    </Container>
                </Container>

                <Block />
                <Block />
            </Container>
        </>
    )

}

const ContainerImage = styled(Container)`
    max-width: 300px;
    max-height: 300px;
`

const ListElement = styled.li`
    font-size: 1.3em;
    font-weight: bold;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    &::before {
        font-size: 1.5em;
        margin-right: 10px;
        content: "✓";
        color: white;
        background-color: ${Theme.colors.primary};
        padding: 0 3px;
        border-radius: 100%;
    }

`
const Input = styled.input`
    padding: 10px 15px;
    background-color: ${Theme.colors.grey};
    outline: none;
    border: none;
    border-radius: 5px;
`

const Block = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;



`

export default CheckList