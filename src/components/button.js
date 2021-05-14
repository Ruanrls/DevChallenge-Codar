import styled from 'styled-components'
import Theme from '../../public/theme'

const primary = Theme.colors.primary

const Button = styled.button`
    display: flex;
    width: ${props => props.width ? props.width : '100%'};
    justify-content: center;
    padding: 10px 0px;
    background-color: ${props => props.outlined ? 'white' : primary};
    border: ${props => props.outlined ? 'none' : '2px solid ' + primary};
    border-radius: 8px;
    color: ${props => props.outlined ? primary : 'white'};
    transition: all 0.5s;
    cursor: pointer;
    outline: none;

    max-width: ${props => props.maxWidth ? props.maxWidth : '200px'};

font-size: 1em;
    &:hover {
    background-color: ${props => props.outlined ? primary : 'white'};
    color: ${props => props.outlined ? 'white' : primary};
}

@media(min-width: 720px) {
    width: ${props => props.mediaWidth || '100%'};
}
`


export default Button