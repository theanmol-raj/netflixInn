import { Route, Routes } from "react-router-dom";
import Homescreen from "./Screen/Homescreen";
import LoginScreen from "./Screen/LoginScreen";


function App() {
  const user = true ;
  // import { redirect } from "react-router-dom";

  // const loader = async () => {
  //   const user = await getUser();
  //   if (!user) {
  //     return redirect("/login");
  //   }
  // };
  return (
    <div className="App bg-black">
        <Routes>
          <Route path="/" element={ user? <Homescreen /> : <LoginScreen /> } />
          <Route path="/login" element={<LoginScreen/>} />
        </Routes>
    </div>
  );
}

export default App;
