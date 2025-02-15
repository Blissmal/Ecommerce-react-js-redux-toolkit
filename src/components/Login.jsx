import React from 'react'

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form action="">
        <div>
            <label htmlFor="">Email</label>
            <input type="email" />
        </div>

        <div>
            <label htmlFor="">Password</label>
            <input type="password" />
        </div>

        <div>
            <label htmlFor="">
                <input type="checkbox" />
                <span>Remember Me</span>
                <a href="">Forgot Password ?</a>
            </label>
        </div>

        <div>
            <button>Login</button>
        </div>
      </form>
      <div>
        <span>Don&#39;t have any account ?</span>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
