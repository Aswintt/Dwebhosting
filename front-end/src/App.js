import './App.css';
import Main from "./components/Main"
import Landy from './layouts/Landy';
import QRGenerator from './comp/qrcode/qrcode';
import Zipdrive from './comp/zipdrive/Zipdrive';
import Homeinfo from './comp/Homeinfo';
import Singledrive from './comp/singledrive/Singledrive';
import MyComponent from './comp/copy/cp';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Landy />} />
      <Route path="/home" element={<Homeinfo />} />    
      <Route path="/webhost" element={<Main />} />    
      <Route path="/qrcode" element={<QRGenerator />} />    
      <Route path="/zipdrive" element={<Zipdrive />} />    
      <Route path="/singledrive" element={<Singledrive />} />    
      <Route path="/cp" element={<MyComponent />} />    
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
