import { Route, Routes } from "react-router-dom";
import Homescreen from "./Screen/Homescreen";
import LoginScreen from "./Screen/LoginScreen";


function App() {
  const user = true ;

  return (
    <div className="App bg-black">
        <Routes>
          <Route path="/" element={<Homescreen /> } />
          <Route path="/login" element={<LoginScreen/>} />
        </Routes>
    </div>
  );
}

export default App;
