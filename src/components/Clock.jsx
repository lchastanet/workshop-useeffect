import { useState, useEffect } from "react"

function Clock () {

const [date, setDate] = useState(new Date());

useEffect(() => {
    console.log("setting up interval")
    const interval = setInterval(() => {
        setDate(new Date())
        console.log("date updated")
    }, 1000);
    return () => {
        console.log("clearing interval");
        clearInterval(interval)
    }
}, [] )

return (
    
    <div>
        <p>{date.toString()}</p>
    </div>    
    
)

}

export default Clock