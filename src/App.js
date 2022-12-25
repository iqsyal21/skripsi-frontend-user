import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Akun from './components/Akun/Akun';
import Verifikasi from './components/Akun/Verifikasi';
import Home from './components/Home/Home';
import PendaftaranVaksinasi from './components/Home/PendaftaranVaksinasi/PendaftaranVaksinasi';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/akun" component={Akun} />
        <Route path="/verifikasi" component={Verifikasi} />
        <Route path="/vaksinasi" component={PendaftaranVaksinasi} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
