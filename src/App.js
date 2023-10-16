import './App.css'
import Card from "./User-Profile-Card/userprofilecard"

function App() {
  

  return (
    <div className="App">
      <Card 
      imgSrc="https://picsum.photos/300/200" 
      imgAlt="Card Image" 
      title="Card Title"
      description="This is the card description. You can add more details about the card here."
      buttonText="Next"
      link="cardPage"
      />
    </div>
  )
}

export default App
