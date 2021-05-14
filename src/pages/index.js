import Head from '../components/config/head'
import Header from '../components/header'
import HomeContainer from '../components/containerMenu'
import HomeCheckList from '../components/containerCheckList'
import Card from '../components/card'
import Container from '../components/container'
import Footer from '../components/footer'

const Home = () => {

    return (
        <>
            <Head title="Desafio Codar (Web-Challenge)" icon="/static/coding.png" />
            <Header />
            <HomeContainer />
            <HomeCheckList />

            <Container
                style={{ marginTop: '100px' }}
                mediaOptions="flex-direction: row; align-items: stretch; justify-content: space-evenly;"
                column
            >
                <Card
                    text="Já tive experiência com 4 empresas da área e a codar é sem sombra de 
                    dúvida superior em todos os aspectos"
                    author="Pedro Ferreira"
                    company="Construtora Minari"
                />
                <br />
                <Card
                    text="Processos bem simples e criação de um site exatamente como minha escola queria!"
                    author="Maria Rita"
                    company="Escola Criança Feliz"
                />
            </Container>

            <Footer />
        </>
    )

}

export default Home