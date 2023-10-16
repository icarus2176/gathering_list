import "./AuthForm.css"

export function AuthForm(){
  return(
    <form>
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" name="email" />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}