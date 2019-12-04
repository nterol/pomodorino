import styled from 'styled-components'
import { darken } from 'polished'

import { Input } from '../common/styles'

export const TaskManagerContainer = styled.div`
    padding: 8px;
`

export const TaskInputContainer = styled.div`
    padding: 24px 12px;
    min-width: 350px;
    display: flex;
    flex-direction: row;
`

export const InputWithTask = styled(Input)`
    border: lightgray;
    color: black;
    background: ${darken('0.1', '#ffff')};
`
