import {useState} from 'react';

const Login = () => {
  const [form, setForm] = useState({
    login:'',
    password: ''
  })

  const changeField = ({target}) => {
    setForm(prevForm => ({...prevForm, [target.name]: target.value}))
  }

  return (
    <form className='Login'>
      <input
       name='login'
       placeholder='Username'
       value={form.login}
       onChange={changeField}
      />
      <input
        name='password'
        placeholder='Password'
        value={form.password}
        onChange={changeField}
      />
      <button className='LoginBtn'>Login</button>
    </form>
  )
}

export default Login;