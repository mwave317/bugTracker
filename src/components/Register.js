import React from 'react';
import useForm from "./UseForm";
import validate from './Validation';
import { useSelector, useDispatch } from 'react-redux';

const Form = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(validate);

 

  return (
    <div className="section">
      <h2>Bug Tracker</h2>
      <div className="container">
        <div>
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">First Name</label>
                <div>
                  <input autoComplete="new-password" className={`input ${errors.password && 'error-box'}`} type="name" name="firstName" onChange={handleChange} value={values.firstName || ''} required />
                </div>
                {errors.firstName && (
                  <p className="error">{errors.firstName}</p>
                )}
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div>
                  <input autoComplete="new-password" className={`input ${errors.password && 'error-box'}`} type="name" name="lastName" onChange={handleChange} value={values.lastName || ''} required />
                </div>
                {errors.lastName && (
                  <p className="error">{errors.lastName}</p>
                )}
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <div>
                  <input autoComplete="email" className={`input ${errors.email && 'error-box'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="error">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">username</label>
                <div>
                  <input autoComplete="username" type="text" className={`input ${errors.username && 'error-box'}`} name="username" onChange={handleChange} value={values.username || ''} required />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div>
                  <input autoComplete="new-password" className={`input ${errors.password && 'error-box'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="error">{errors.password}</p>
                )}
              </div>
              <div className="field">
                <label className="label">ReEnter Password</label>
                <div>
                  <input autoComplete="reenter-password" className={`input ${errors.password && 'error-box'}`} type="password" name="reenterPassword" onChange={handleChange} value={values.reenterPassword || ''} required />
                </div>
                {errors.password && (
                  <p className="error">{errors.password}</p>
                )}
              </div>
              <button type="submit" className="button createUser">Create User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;