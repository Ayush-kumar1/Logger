import './App.css';
import Navbar from './components/navbar/Navbar';
import Table from "./components/table/Table";
import CreatePost from './Pages/createpost/CreatePost';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Table/>
      {/* <CreatePost/> */}
    </div>
  );
} 

export default App;
