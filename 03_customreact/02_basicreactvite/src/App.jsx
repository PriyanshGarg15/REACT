import Chai from "./chai"
function App() {

  const username="chai aur code"
  return (
    <div>
    <Chai/>
    <h1>{username}</h1> 
    {/* here  {username}  evaluated expression */}
    </div>
  )
}

export default App
