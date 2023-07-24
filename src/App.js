import logo from './logo.svg';
import './App.css';
import HolaMundo from './holaMundo';
import Contador from './contador';
import ListaDeTareas from './listaDeTareas';
import RelojDigital from './relojDigital';


const App = () => {
  return (
    <div>
      {/* Aquí puedes renderizar los componentes que quieras probar */}
      {/* Ejemplo: */}
      <HolaMundo />
      <Contador />
      <ListaDeTareas />
      <RelojDigital />
    </div>
  );
};

export default App;
