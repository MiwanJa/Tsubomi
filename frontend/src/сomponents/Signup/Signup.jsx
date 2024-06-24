import React from 'react'
import './Signup.css'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]:input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/users";
            const {data:res} = await axios.post(url, data);
            navigate("/login")
            console.log(res.message);
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
    <div className={signup_container}>
      <div className="signup_form_container">
        <div className="left">
            <h2 className="h2">Добро пожаловать</h2>
            <Link to="/login">
                <button
                    type='button'
                    className='form__btn'
                >
                    Войти
                </button>
            </Link>
        </div>
        <div className="right">
            <form className='form__container' onSubmit={handleSubmit}>
                <h2 className='h2'>Создать аккаунт</h2>
                <input 
                    type="text"
                    placeholder='First Name'
                    name='firstName'
                    onChange={handleChange}
                    value={data.firstName}
                    required
                    className='input__form'
                />
                <input 
                    type="text"
                    placeholder='Last Name'
                    name='lastName'
                    onChange={handleChange}
                    value={data.lastName}
                    required
                    className='input__form'
                />
                <input 
                    type="email"
                    placeholder='Email'
                    name='lastName'
                    onChange={email}
                    value={data.email}
                    required
                    className='input__form'
                />
                <input 
                    type="password"
                    placeholder='Password'
                    name='password'
                    onChange={password}
                    value={data.password}
                    required
                    className='input__form'
                />
                {error && <div className={error_msg} > {error} </div>}
                <button
                    type='submit'
                    className='form__btn'
                >
                    Зарегистрироваться
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
