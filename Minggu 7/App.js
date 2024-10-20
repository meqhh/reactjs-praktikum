import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='/*' element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;