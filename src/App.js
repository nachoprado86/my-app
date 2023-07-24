import './App.css';
import HolaMundo from './holaMundo';
import Contador from './contador';
import ListaDeTareas from './listaDeTareas';
import RelojDigital from './relojDigital';


const App = () => {
  return (
    <div>
      <HolaMundo />
      <br />
      <Contador />
      <br />
      <ListaDeTareas />
      <br />
      <RelojDigital />
      <br />
    </div>
  );
};

export default App;
