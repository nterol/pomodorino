import React from 'react'

import { TeamContainer } from './styles'
import MemberInput from './MemberInput'

function TeamManager() {
    return (
        <TeamContainer>
            <h1>
                My Team{' '}
                <span role="img" aria-label="my team">
                    🏈
                </span>
            </h1>
            <MemberInput />
        </TeamContainer>
    )
}

export default TeamManager
