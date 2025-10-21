import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MasterGoalScreen } from './screens/MasterGoalScreen';
import { HealthInsuranceFormScreen } from './screens/HealthInsuranceFormScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/master-goal" replace />} />
        <Route path="/master-goal" element={<MasterGoalScreen />} />
        <Route path="/health-insurance" element={<HealthInsuranceFormScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;