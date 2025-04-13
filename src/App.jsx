import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import LabInterface from './components/LabInterface';
import LabDashboard from './components/LabDashboard';
import MultiAnalysisLabForm from './components/MultiAnalysisLabForm';
import MultiAnalysisDynamic from './components/MultiAnalysisDynamic';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/signup" element={<Layout><Signup /></Layout>} />
        <Route path="/reset-password" element={<Layout><ResetPassword /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/lab" element={<Layout><LabInterface /></Layout>} />
        <Route path="/lab-dashboard" element={<Layout><LabDashboard /></Layout>} />
        <Route path="/lab-analyses" element={<Layout><MultiAnalysisLabForm /></Layout>} />
        <Route path="/saisie-analyse" element={<Layout><MultiAnalysisDynamic /></Layout>} />

      </Routes>
      

    </Router>
  );
}
