import { useState } from 'react';

export default function Register() {
  
  const [passwordNotEqual, setPasswordNotEqual] = useState(false)

  function handleSubmit(e){
    e.preventDefault()

    const formData = new FormData(e.target);

    console.log(formData.get("email"))
    console.log(formData.get("password"))
    console.log(formData.get("repassword")) 
    console.log(formData.get("FullName"))
    console.log(formData.get("cars"))
    console.log(formData.get("books"))
    console.log(formData.get("movies"))

    if(formData.get("password") !== formData.get("repassword")){
      setPasswordNotEqual(true)
    }
    else{
      setPasswordNotEqual(false)
    }

    setPasswordNotEqual(false)

    e.target.reset()
  }  
  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Register</h1>
        <p>Please enter your info!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="FullName" className="form-label">
          Name
        </label>
        <input 
        type="text" 
        className="form-control" 
        id="FullName" 
        name="FullName"
        required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input 
        type="email" 
        className="form-control" 
        id="email" 
        name="email"
        required
        />
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
           type="password" 
           className="form-control" 
           id="password" 
           name="password"
           required
           minLength={6}
           />
        </div>
        <div className="col-6">
          <label htmlFor="repassword" className="form-label">
            Re-Password
          </label>
          <input
           type="password" 
           className="form-control" 
           id="repassword" 
           name="repassword" 
           required
           minLength={6}
           />
           {passwordNotEqual && <div className="invalid-feedback d-block">Passwords do not match</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="hobbies" className="form-label">
            Hobbies
          </label>
          <div className="card card-body text-bg-light">
            <div className="form-check">
              <input 
               type="checkbox"
               className="form-check-input"
               name="cars" 
               id="cars" 
               value="cars"
               />

             <label htmlFor="cars" className="form-check-label">arabalar</label>

             
          </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="books" id="books" value="books" /> 
             <label htmlFor="books" className="form-check-label">kitaplar</label>
           </div>
           <div className="form-check">
              <input type="checkbox" className="form-check-input" name="movies" id="movies" value="movies" /> 

             <label htmlFor="movies" className="form-check-label">sinema</label>
          </div>
           </div>
        </div>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-outline-warning me-2">Submit</button>
        <button type="reset" className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
