import React, { useState } from "react";
import agent from "../agent"

const searchBox = (id, onChange) => {
    const id = id
    const [input, setInput] = useState("")

    const handleChange = (value) => {
        setInput(value)
        if (value.length > 2) {
            onChange(value, (page) => agent.Items.byTitle(value, page), agent.Items.byTitle(value))
        }
    }

    return (
        <input
            key="search-bar"
            value={input}
            placeholder={"What is it that you truly desire?"}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
}

export default searchBox;