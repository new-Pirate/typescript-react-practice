import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavLink to='/users' >Пользователи</NavLink>
          <NavLink to='/todos' >Туду</NavLink>
        </div>
        <Routes>
          <Route path={'/users'} element={<UserPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
          <Route path={'/todos/:id'} element={<TodoItemPage />} />
        </Routes>
      </BrowserRouter>
      <EventsExample />
      <Card width='200px' height='200px' variant={CardVariant.primary}
        onClick={(num) => console.log('click', num)}
      ></Card>
    </div>
  )
};

export default App;
