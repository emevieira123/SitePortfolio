import { MainRoutes } from "./routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "./global.css";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <ToastContainer />
    </div>
  )
}

export default App
