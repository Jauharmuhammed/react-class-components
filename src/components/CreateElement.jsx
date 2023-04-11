import React from 'react'

const CreateElement = () => {
    const heading = React.createElement('h1', {className:'heading'}, 'Heading without JSX Tag')
    return (
        React.createElement('div', null, heading)
    )
}

export default CreateElement