import Name from './Components/Name'
import Friends from './Components/Friends'
import Header from './Components/Header'

function App() {
  // let names = ["Manal", "Masood", "Mikael", "Maisum"]
  return (
    <div className="App">
      {/* <p>Name</p>
      <Name firstName="Younus" lastName="Qureishy" />
      <Friends allFriends={names} /> */}
      <Header />
    </div>
  );
}

export default App;
