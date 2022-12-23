
import './App.css';
import AllRoutes from './Components/AllRoutes';
import NavBar from './Components/Navbar/NavBar';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <AllRoutes/>

    </div>
  );
}

export default App;
