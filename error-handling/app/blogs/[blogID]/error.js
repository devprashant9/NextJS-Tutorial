"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

const Error = ({ error, reset }) => {
    console.log(error.message)

    const router = useRouter()
    return (
        <div>
            Error Occurred
            <button onClick={() => {
                startTransition(() => {
                    router.refresh();
                    reset();
                })
            }}>
                Try Again
            </button>
        </div>
    )
}

export default Error
