//import { setDoc, doc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import { auth } from 'src/services/firebase';

const Dashboard = () => {
  const { logout } = useAuth();
  useEffect(() => {
    if (auth.currentUser) {
      ///setDoc(doc(db, 'users', auth.currentUser.uid), {});
      //auth.currentUser.getIdTokenResult(true).then((res) => console.log(res.claims.admin ? 'Admin' : 'User'));
    }
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Sign out</button>
    </div>
  );
};

export { Dashboard };
