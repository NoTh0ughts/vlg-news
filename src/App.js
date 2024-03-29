import './App.css';
import {Route, Routes} from "react-router-dom";
import { Layout } from './Layout';
import {Home} from './Home';
import { Tonality } from './Tonality';
import { OtherService } from './OtherService';

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path='/' element={ <Home/> }/>
          <Route path='/ton' element={ <Tonality/> }/>
          <Route path='/other' element={ <OtherService/> }/>
        </Routes>
      </Layout>
    </div>
  );
}

App.displayName = App.name