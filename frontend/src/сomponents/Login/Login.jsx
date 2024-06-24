import React from 'react'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState("");


    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]:input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/auth";
            const {data:res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/"
        } catch (error) {
            if (error.response && 
                error.response.status >=- 400 && 
                error.response.status <= 500 
            ) {
                setError(error.response.data.message)
            }
        }
    }

  return (
    <div className={login_container}>
    <div className={login_form_container}>
      <div className={left}>
           <form className={form__container} onSubmit={handleSubmit}>
              <h2 className='h2'>Войдите в свой аккаунт</h2>
              <input 
                  type="email"
                  placeholder='Email'
                  name='lastName'
                  onChange={email}
                  value={data.email}
                  required
                  className={input__form}
              />
              <input 
                  type="password"
                  placeholder='Password'
                  name='password'
                  onChange={password}
                  value={data.password}
                  required
                  className={input__form}
              />
              {error && <div className={error_msg} > {error} </div>}
              <button
                  type='submit'
                  className={form__btn}
              >
                  Войти
              </button>
          </form>
      </div>
      <div className={right}>
        <h2 className="h2">Нет аккаунта?</h2>
                <Link to="/signup">
                    <button
                        type='button'
                        className={form__btn}
                    >
                        Зарегистрироваться
                    </button>
                </Link>
      </div>
    </div>
  </div>
  )
}

export default Login
