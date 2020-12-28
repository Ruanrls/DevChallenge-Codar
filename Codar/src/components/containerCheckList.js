import styled from 'styled-components'
import Image from 'next/image'
import Theme from '../../public/theme'

const CheckList = () => {

    return (
        <Container style={{ marginTop: 100 }}>
            <ContainerImage>
                <Image
                    src="/coding.png"
                    width={500}
                    height={500}
                />
            </ContainerImage>

            <ContainerList>
                <ul style={{ listStyle: 'none' }}>
                    <ListElement>Domínio personalizado</ListElement>
                    <ListElement>Hospedagem</ListElement>
                    <ListElement>Site responsivo</ListElement>
                    <ListElement>Redes sociais</ListElement>
                    <ListElement>Chat online</ListElement>
                    <ListElement>Blog integrado</ListElement>
                </ul>
            </ContainerList>
        </Container>
    )

}

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 720px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`

const ContainerImage = styled.div`
    max-width: 300px;
    max-height: 300px;

    @media(min-width: 720px) {
        order: 2;
    }
`

const ContainerList = styled(Container)`
    margin-top: 20px;

    @media(min-width: 720px) {
        order: 1;
    }
`

const ListElement = styled.li`
    font-size: 1.3em;
    font-weight: bold;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    &::before {
        font-size: 1.5em;
        margin-right: 20px;
        content: "✓";
        color: white;
        background-color: ${Theme.colors.primary};
        padding: 0 3px;
        border-radius: 100%;
    }

`


export default CheckList