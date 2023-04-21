// import logo from './logo.svg';
import './App.css';
import Invitation from './Invitation/Invitation';

function App() {
  const subject="Birthday party Invitation "
  const To="jaGdish@gmail.com"
  const name="jaGdish"
  const party="birthday party"
  const person="Ritu , Saurabh , Kartik"
  const palace="Green field Avenue"
  const by=" JaGdish"

  return (
    <div className="App">
      <Invitation subject={subject} To={To} name={name} party={party} person={person} palace={palace} by={by}/>
      
    </div>
  );
}

export default App;
