import React from 'react'

const ServicesLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            <h2>Services Layout</h2>
            {children}
        </div>
    )
}

export default ServicesLayout
