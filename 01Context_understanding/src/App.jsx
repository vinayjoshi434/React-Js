import { useState } from "react";
import Userprovider from "./Context/UsercontextProvider";
import Login from "./Component/Login";
import Profile from "./Component/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Userprovider>
      <h1 className="text-center text-3xl text-orange-500 font-medium my-6">
        Learning Context Api
      </h1>
      <Login />
      <Profile />
    </Userprovider>
  );
}

export default App;
