
import Calendar from './components/Calendar';
import './App.css';
import './css/main.css'
function App() {
  const now = new Date('2023-07-13');
  return (
    < Calendar date={now} />
    );
}

export default App;
