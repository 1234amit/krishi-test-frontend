import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nid: '',
    division: '',
    district: '',
    thana: '',
    address: '',
    tradelicense: '',
    password: '',
    role: 'supersaler'
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ecommerce-client-backend.onrender.com/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Registration successful!'); // Set success message
        setFormData({ // Clear form fields
          name: '',
          email: '',
          phone: '',
          nid: '',
          division: '',
          district: '',
          thana: '',
          address: '',
          tradelicense: '',
          password: '',
          role: 'supersaler'
        });
      } else {
        console.error('Error:', data);
        setSuccessMessage('Registration failed. Please try again.'); // Set error message
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('An error occurred. Please try again.'); // Set error message
    }
  };

  return (
    <div>
      {successMessage && <p>{successMessage}</p>} {/* Display success message */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="nid" placeholder="NID" value={formData.nid} onChange={handleChange} required />
        <input type="text" name="division" placeholder="Division" value={formData.division} onChange={handleChange} required />
        <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} required />
        <input type="text" name="thana" placeholder="Thana" value={formData.thana} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="tradelicense" placeholder="Trade License" value={formData.tradelicense} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;