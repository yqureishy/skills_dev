import Name from './Components/Name'
import Friends from './Components/Friends'

function App() {
  let names = ["Manal", "Masood", "Mikael", "Maisum"]
  return (
    <div className="App">
      <p>Name</p>
      <Name firstName="Younus" lastName="Qureishy" />
      <Friends allFriends={names} />

    </div>
  );
}

export default App;
