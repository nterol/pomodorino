import React from 'react'

import { TeamContainer } from './styles'

function TeamManager() {
    return (
        <TeamContainer>
            <h1>
                My Team{' '}
                <span role="img" aria-label="my team">
                    🏈
                </span>
            </h1>
        </TeamContainer>
    )
}

export default TeamManager
