import React from 'react'

type PropsType = {
    status: 'loading' | 'success' | 'error'
}

const DataFetch = ({ status }: PropsType) => {
    if (status === 'loading') return <h2>Loading...</h2>
    else if (status === 'error') return <h2>Error occurs!!</h2>
    return (
        <h2>DataFetch successfully.</h2>
    )
}

export default DataFetch