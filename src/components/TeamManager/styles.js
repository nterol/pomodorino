import styled from 'styled-components'
import { lighten, darken } from 'polished'

import { Input } from '../common/styles'

export const TeamContainer = styled.div`
    min-width: 280px;
    background: #f6f6f6;
    color: black;
    padding: 20px 20px 0 15px;
    text-align: left;
    /* transition: width 0.2s ease-in; */
    h1 {
        margin-bottom: 16px;
    }
`

export const TeamInput = styled(Input)`
    background: ${darken('0.2', '#f6f6f6')};
    &:focus {
        background: ${lighten('0.2', '#f6f6f6')};
    }
`
