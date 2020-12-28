import Head from '../components/config/head'
import Header from '../components/header'
import HomeContainer from '../components/containerMenu'
import HomeCheckList from '../components/containerCheckList'
import Newsletter from '../components/NewsLetter'

const Home = () => {

    return (
        <>
            <Head title="Desafio Codar (Web-Challenge)" />
            <Header />
            <HomeContainer />
            <HomeCheckList />
            <Newsletter />
        </>
    )

}

export default Home