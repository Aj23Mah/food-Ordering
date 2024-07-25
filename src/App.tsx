// import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  // const [Loading, setLoading] = useState(false)
  return (
    <>
        <Outlet />
    </>
  );
};

export default App;
