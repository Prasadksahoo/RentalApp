import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import SupplierHome from './components/SupplierHome';
import Header from './components/Header';

const App = () => {
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [checkedRefresh, setCheckedRefresh] = useState(false);

  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");
    const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

    // ✅ Only redirect if it's a true refresh and not already at "/"
    if (isReload && location.pathname !== "/") {
      setShouldRedirect(true);
    }

    // ✅ Mark that we've finished the reload check
    setCheckedRefresh(true);
  }, []); // ⛔ don't add location.pathname here, only run once

  // ⏳ Prevent flicker during check
  if (!checkedRefresh) return ;

  // 🔁 Redirect if needed
  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }

  return (
    
    <Routes>
       <Route path="/" element={<Header />} />
      
      <Route path="/Login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     
      <Route path="/Home" element={<Home/>} />
      <Route path="/SupplierHome" element={<SupplierHome/>} />
    </Routes>
  );
};

export default App;
