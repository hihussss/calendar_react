
import './App.css';
import { Calendare } from "./components/Calendare";

function App() {
  const options={
    year:"numeric",
    month:"long",
    day:"numeric",
    weekday:"long",
    timeZone:"UTC"
  }
  const now = new Date().toLocaleString("ru",options).replace(",","").split(' ');
  return (
    <Calendare date={now} />
  );
}

export default App;
