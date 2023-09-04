import NavBar1 from './components/NavBar1';
import Presentacion from './components/Presentacion';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
  <NavBar1/>
  <ItemListContainer greeting="Bienvenidos a Closset"/>
   <Presentacion name='Çlosset' description="proximamente mas prendas por mayor y menor" price={2024} img="https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/whatsapp_image_2023-08-31_at_13.46.44_1693681528.jpeg?itok=ZDRqquWM"/>
    </div>
  );
}

export default App;
