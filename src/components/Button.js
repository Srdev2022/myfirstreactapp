import React from "react";

export default function Button() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <div>current count is: {count}</div>
            <br/>
            <button
             onClick={e => {
                 console.log(e)
                 setCount(count + 1)
             }}
            >Increase</button>
            
        </div>
    )
}