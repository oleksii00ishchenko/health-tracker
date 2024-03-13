import { PrivateRoute } from 'src/navigation/PrivateRoute';
import { Chat } from 'src/pages/Chat';
import { Dashboard } from 'src/pages/Dashboard';
import { Login } from 'src/pages/Login';
import { AuthProvider } from 'src/providers/authProvider';
import { Route, Routes } from 'react-router-dom';
import { Signup } from './pages/Signup';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
