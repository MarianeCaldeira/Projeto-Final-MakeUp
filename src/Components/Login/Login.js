import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import Header from '../HeaderLogin';

import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
      <Header />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
