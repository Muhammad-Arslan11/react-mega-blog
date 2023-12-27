import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { appwriteService } from "./components/index";
import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom'
import { logout } from "./Store/authSlice";

function App() {
  //make a state loading for tracking of laoding
  const [loading, setLoading] = useState(true);
  // make dispatch method
  const dispatch = useDispatch();

  //  use useEffect, get access of Current user from appwriteService and use then() method with access of userData in it
  useEffect(() => {
    appwriteService
      .getCurrentUser()
      .then((userData) => {
        // if get access of userData then dispatch data or dispatch logout method
        if (userData) {
          dispatch(userData);
        } else {
          dispatch(logout());
        }
      })

      // after that, use finally() method to update state
      .finally(() => setLoading(false));
  }, []);

  // if !loading then return jsx else return null
  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            TODO: <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;
