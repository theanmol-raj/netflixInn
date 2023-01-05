import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homescreen from "./Screen/Homescreen";
import LoginScreen from "./Screen/LoginScreen";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function App() {
  const schema = {email : "" , pass : ""} ;
  const [ cred  ,setCred ] = useState(schema) ;
  const [user ,setUser] = useState(null) ;




  
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




// import { redirect } from "react-router-dom";

  // const loader = async () => {
  //   const user = await getUser();
  //   if (!user) {
  //     return redirect("/login");
  //   }
  // };
