
import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    
    axios.post('http://localhost:5000/signup/', {
    "firstName": values.firstName,
    "lastName": values.lastName,
    "email": values.email,
    "username": values.username,
    "password": values.password,
    
}).then((res) => console.log('This is the res from the handlesubmit', res))
.catch(err => console.log(err));
  };
  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;