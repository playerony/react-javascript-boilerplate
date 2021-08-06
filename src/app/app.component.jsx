import React from 'react';

import cls from './app.styles.css';

export const App = () => {
  console.log(cls);

  return <h1 className={cls.title}>react-javascript-boilerplate</h1>;
};
