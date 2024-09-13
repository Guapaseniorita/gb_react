import logo from './logo.svg';
import './App.css';
import Message1 from './components/hw1/message1';
import Message2 from './components/hw1/message2';

function App() {
  return (
    <div className="App">
      <Message1 info="Всем привет"/>
      <Message1 info="На улице светит Солнце"/>
      <Message2 info1="Идем купаться на море" />
      <Message2 info1="Море сегодня спокойное" />
    </div>
  );
}

export default App;
