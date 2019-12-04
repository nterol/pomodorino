import React, { useState } from 'react'

import { TeamInput } from './styles'

function MemberInput() {
    const [inputMember, setInputMember] = useState('')

    const handleChange = event => setInputMember(event.target.value)

    return (
        <TeamInput
            value={inputMember}
            onChange={handleChange}
            placeholder="search for a team mate"
        />
    )
}

export default MemberInput
