import Player from "./component/Player"

function App() {


  return (
    <main>
      <div id="game-container">


        <ol id="players">
       
       <Player initialName="Player 1" symbol="X"/>
       <Player initialName="Player 2" symbol="O"/>
        </ol>
      </div>
      GAME BOARD
    </main>
  )
}

export default App
