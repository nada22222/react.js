import React from 'react';
import  Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import AdminWelcome from './EditorPages/AdminWelcome'; // Import your AdminWelcome component

const App = () => {
    const [showHeader, setShowHeader] = useState(true); // Initialize state variable
    const location = useLocation(); // Get current location

    useEffect(() => {
        // Hide header if AdminWelcome component is rendered
        setShowHeader(location.pathname !== '/login/admin');
    }, [location.pathname]); // Only re-run effect when location.pathname changes

    return (
        <div>
            {/* Conditionally render Header based on showHeader state */}
            {showHeader && <Header />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
