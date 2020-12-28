import NextHead from 'next/head'

const Head = ({ title }) => {

    return (
        <NextHead>
            <title>{title}</title>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        </NextHead>
    )

}

export default Head