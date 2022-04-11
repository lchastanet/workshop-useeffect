import "./styles/App.css"
import Clock from "./components/Clock"
import React from "react"

function App() {
  const [showClock, setShowClock] = React.useState(true)

  function handleShowClock() {
    setShowClock(!showClock)
  }

  return (
    <div className="App">
      {showClock ? <Clock /> : null}

      <button onClick={handleShowClock}>button</button>
    </div>
  )
}

export default App
