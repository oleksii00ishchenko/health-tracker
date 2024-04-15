import { PrivateRoute } from 'src/navigation/PrivateRoute';
import { Chat } from 'src/pages/Chat';
import { Dashboard } from 'src/pages/Dashboard';
import { Login } from 'src/pages/Login';
import { AuthProvider } from 'src/providers/authProvider';
import { Route, Routes } from 'react-router-dom';
import { Signup } from 'src/pages/Signup';
import { store } from 'src/stores/stores';
import { Provider } from 'react-redux';
import { Profile } from 'src/pages/Profile';
import { Challenges } from 'src/pages/Challenges';

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/challenges" element={<Challenges />} />
          </Route>
        </Routes>
      </Provider>
    </AuthProvider>
  );
};

export default App;
