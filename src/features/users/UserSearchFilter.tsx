import React, { useState } from 'react';
import { useDispatch } from 'react-redux';  // Import useDispatch
import { filterUsers } from './usersSlice';  // Import akcji filterUsers
import { AppDispatch } from '../../app/store';  // Import typu AppDispatch, jeśli jest konieczny

const UserSearchFilter: React.FC = () => {
  const [filters, setFilters] = useState({ name: '', username: '', email: '', phone: '' });
  const dispatch = useDispatch<AppDispatch>();  // Inicjalizacja dispatch

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    dispatch(filterUsers(filters));
  };

  return (
    <div>
      <input
        name="name"
        value={filters.name}
        onChange={handleInputChange}
        placeholder="Search by name"
      />
      <input
        name="username"
        placeholder="Search by username"
        value={filters.username}
        onChange={handleInputChange}
      />
      <input
        name="email"
        placeholder="Search by email"
        value={filters.email}
        onChange={handleInputChange}
      />
      <input
        name="phone"
        placeholder="Search by phone"
        value={filters.phone}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default UserSearchFilter;
