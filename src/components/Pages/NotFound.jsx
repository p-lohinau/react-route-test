import React from 'react'

const NotFound = ({ location }) => {
    return (
        <div className="container">
            <h4 className="center">Error</h4>
            <p>The page {location.pathname} does'n exist. </p>
        </div>
    )
}

export default NotFound;