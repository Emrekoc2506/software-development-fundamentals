import { useState, useEffect } from "react";

export default function LoginState() {
  const initialState = {
    email: "",
    password: ""
  }

  const [values, setValues] = useState(initialState)
  const [isEdited, setIsEdited] = useState({ email: false, password: false });

  const emailIsInvalid = isEdited.email && !values.email.includes("@")
  const passwordIsInvalid = isEdited.password && values.password.length < 6

  function handleSubmit(e){
    e.preventDefault()
    console.log(values)
    setValues(initialState)
  }

  function handleInputBlur(e) {
    const name = e.target.name;
    setIsEdited((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  useEffect(() => {
    console.log(isEdited);
  }, [isEdited]);

 function handleInputChange(e){
  const name = e.target.name;
  const value = e.target.value;

  setValues({
    ...values, 
    [name]: value,
  });
  setIsEdited((prev) => ({
  ...prev,
  [name]: false,
 }));
 } 
 
  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input 
        type="email" 
        className={`form-control ${emailIsInvalid ? 'is-invalid' : ''}`}
        id="email" 
        name="email"
        value={values.email} 
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        />
       {emailIsInvalid && <div className="invalid-feedback">Email is invalid</div>} 
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
         type="password" 
         className={`form-control ${passwordIsInvalid ? 'is-invalid' : ''}`} 
         id="password" 
         name="password"
        value={values.password}
         onChange={handleInputChange} 
         onBlur={handleInputBlur}
         />
         {passwordIsInvalid && <div className="invalid-feedback">Password is invalid</div>}
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
