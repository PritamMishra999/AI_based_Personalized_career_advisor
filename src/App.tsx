import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { Dashboard } from './components/dashboard/Dashboard';

const AuthFlow: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return <Dashboard />;
  }

  return isSignUp ? (
    <SignUp onToggleMode={() => setIsSignUp(false)} />
  ) : (
    <SignIn onToggleMode={() => setIsSignUp(true)} />
  );
};

function App() {
  return (
    <AuthProvider>
      <AuthFlow />
    </AuthProvider>
  );
}

export default App;