import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { ElementLight } from './screens/ElementLight';
import { Login } from './screens/Auth/Login';
import { Signup } from './screens/Auth/Signup';
import { BookCall } from './screens/BookCall/BookCall';
import { AdminPanel } from './screens/Admin/AdminPanel';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ElementLight />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/book-call" element={<BookCall />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute adminOnly>
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#0D0D0D',
                color: '#fff',
                border: '1px solid #222222',
              },
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;