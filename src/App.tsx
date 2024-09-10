import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import UserSearchFilter from './features/users/UserSearchFilter';
import UserTable from './features/users/UsersTable';
import { AppDispatch } from './app/store';

function App() {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  return (
    <div className="App">
      <h1>User Management</h1>
        <UserSearchFilter />
        <UserTable></UserTable>

    </div>
  );
}

export default App;
