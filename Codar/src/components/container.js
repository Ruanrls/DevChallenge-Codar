import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex: ${props => props.flex || 1};
    flex-direction: ${props => props.column ? 'column' : 'row'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};

    @media(min-width: 720px) {
        ${props => props.mediaOptions};
    }

    @media(max-width: 720px) {
        ${props => props.mediaReverse};
    }
`
export default Container;