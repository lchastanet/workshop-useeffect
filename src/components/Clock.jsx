import { useState } from "react"

function Clock () {

const [date, setDate] = useState(new Date());

return (
    
    <div>
        <p>{date.toString()}</p>
    </div>    
    
)

}

export default Clock