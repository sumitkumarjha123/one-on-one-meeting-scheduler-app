import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import { Container } from 'react-bootstrap';
import EmployeesTable from './TableComponent/EmployeesTable';
function App() {
  return (
    <Container className="mt-5 ">
      <EmployeesTable/>
    </Container>
  );
}

export default App;
