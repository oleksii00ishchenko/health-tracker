import { isEmpty } from 'lodash';
import { useContext } from 'react';
import { AuthContext } from 'src/providers/authProvider';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (isEmpty(context)) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return { ...context };
};
