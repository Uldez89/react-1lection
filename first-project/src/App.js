
import Calendar from './components/Calendar';
import './App.css';
import './css/main.css'
function App() {
  let now = new Date();
  return (
    < Calendar date={now} />
    );
}

export default App;
