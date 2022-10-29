import { useState } from "react"

function form() {
    const [title, setTitle] = useState("")
    return (
        <form>
            Title:<input value={title}></input>
        </form>
    )
}