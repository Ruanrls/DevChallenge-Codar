import styled from 'styled-components'
import Image from 'next/image'
import Theme from '../../public/theme'
import Button from '../components/button'

const HomeContainer = () => {

    return (
        <Container style={{ marginTop: 50, heigh: '100vh' }}>
            <Img>
                <Image
                    src="/videoCall.png"
                    alt="Coding image"
                    layout="intrinsic"
                    height={500}
                    width={500}
                />
            </Img>
            <TextContainer>
                <text style={{ fontWeight: 'bold', marginTop: 50, fontSize: 20 }}>
                    Alavanque seus negócios com um
                    </text>
                <HeaderFont>Website incrível</HeaderFont>
                <Button>
                    Solicitar orçamento!
                </Button>
            </TextContainer>
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
const Img = styled(Container)`
    display: flex;
    height: 60%;
    width: 60%;

    max-width: 300px;
    max-height: 300px;
`
const HeaderFont = styled.text`
    color: ${Theme.colors.primary};
    font-size: 3.5em;
    font-weight: bolder;

    @media(max-width: 720px) {
        font-size: 2em;
    }
`

const TextContainer = styled(Container)`
    flex-direction: column;    
    margin-top: 25px;
    justify-content: space-between;
    height: 225px;


`

export default HomeContainer