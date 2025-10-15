"use client"
const Error = ({error, reset}) => {
    console.dir(error)
  return (
    <div>
      <button onClick={() => {
        reset();
      }}>Click to Fix</button>
    </div>
  )
}

export default Error
