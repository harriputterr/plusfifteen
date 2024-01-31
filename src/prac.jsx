import React, {useState, useEffect, useRef } from 'react'

export default function App(){
    const [name, setName] = useState('');
    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        console.log(renderCount.current)
    })

    return ( 
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
        </>
    )
}