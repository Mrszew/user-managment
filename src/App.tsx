import React from 'react';
import './App.css';
import UserTable from './features/users/UsersTable';

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
        <UserTable></UserTable>
    </div>
  );
}

export default App;
