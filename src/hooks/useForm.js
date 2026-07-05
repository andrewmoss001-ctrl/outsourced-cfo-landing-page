import { useState } from 'react';

export const useForm = (initialState = {}, onSubmit = null) => {
  const [values, setValues] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!values.name?.trim()) newErrors.name = 'Full name is required';
    if (!values.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) newErrors.email = 'Email is invalid';
    if (!values.company?.trim()) newErrors.company = 'Company name is required';
    if (!values.title) newErrors.title = 'Please select your job title';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    t
    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(values);
    } else {
      // Fallback: just log
      console.log('✅ Lead Captured:', values);
    }
    setIsSubmitted(true);
    
  };

  return { values, handleChange, handleSubmit, isSubmitted, errors };
};