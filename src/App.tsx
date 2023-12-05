import {useForm} from 'react-hook-form'
import './App.css'
function App() {
  const { register, handleSubmit } = useForm()

  const onSubmit =handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <div className="h">DevCrew FrontEnd Test02 : Form</div>
      <div className="container">
      <div className="user-details">
      <div>
        <label>First Name</label>
        <input placeholder ="First Name" type="text" {...register("firstname")} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" placeholder ="Last Name" {...register("lastname")} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" placeholder ="Email" {...register("email")} />
      </div>
      <div>
        <label>User Name</label>
        <input type="text" placeholder ="User Name" {...register("username")} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder ="Password"{...register("password")} />
      </div>
      </div>

      {/* //-------------------------------------- */}
      <div  className="interest">
      <label>Interest</label>
        <div>
          <label>
          <input type="checkbox"value="Next.js" {...register("interest")} />
            React
          </label>
        </div>
        <div>
          <label>
          <input type="checkbox"value="Next.js" {...register("interest")} />
            Next.js
          </label>
        </div>
        <div>
          <label>
          <input type="checkbox" value="Laravel" {...register("interest")} />
            Laravel
          </label>
        </div>
        <div>
          <label>
          <input type="checkbox"value="GraphQL" {...register("interest")} />
            GraphQL
          </label>
        </div>
        <div>
          <label>
          <input type="checkbox"value="Nest.js" {...register("interest")} />
            Nest.js
          </label>
        </div>
      </div>
      <div>
        <input className ="submit" type="submit" value="Submit" />
      </div>
      </div>
    
    </form>
  );
}

export default App
