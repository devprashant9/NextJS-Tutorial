"use client"
const Error = ({ error, reset }) => {
    console.dir(error)
    return (
        <div>
            <p>Something Went Wrong in Home page</p>
            <button onClick={() => {
                reset();
            }}>Click to Fix</button>
        </div>
    )
}

export default Error
