import React,{ useState } from 'react'
import Link from 'next/link'
import Router from 'next/router.js'
import Icon from '@mui/material/Icon';
//Mui
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faTv, faCheck, faTimes, faAngleLeft, faUsers } from '@fortawesome/free-solid-svg-icons'

//import { view } from '@risingstack/react-easy-state'

import { signIn } from "next-auth/react"

// i18next
import { useTranslation } from 'react-i18next'

import Button from '@mui/material/Button';


import Frame from '../components/Frame'
//import { display } from '../stores'
//import { useSess } from '../lib/auth/auth.js'

function Login()  {
  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation()

/**
  static async getInitialProps({ query }) {
    const displayId = query && query.display
    return { displayId }
  }

  componentDidMount() {
    const { displayId } = this.props
    display.setId(displayId)
  }
*/


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const performLogin = () => {
    const { username, password } = this.state
    //const { displayId } = this.props

    signIn("credentials", { redirect: false,username:username, password:password})
      .then(({ok,url, error, status }) => {
        console.log('Error : ',error, 'OK : ', ok, 'URL : ',url, ' Status : ', status)
      if(ok) {
        setAlert({alert:'success'})
        Router.push('/screens')
      }else{
        console.log(error)
        setAlert({ alert: 'error' })
        Router.push('/login')
    }
    })
  }

  const usernameChangeHandler = event => {
    setUsername(event.target.value)
  }

  const passwordChangeHandler = event => {
    setPassword(event.target.value)
  }
  return (
    

      <div className='formContainer'>
        <div className='logo'>
          <div className='icon'>
            <Icon fontSize="small">tv</Icon>
          </div>
        </div>
        <div className='title'>
            <h1>{t('login.title')}</h1>
        </div>
        <form
          className='form'
          onSubmit={event => {
            event.preventDefault()
            performLogin()
            return false
          }}
        >
          {alert && (
            <div className={`alert-${alert}`}>
              <span className={'alert-text'}>
                {alert == 'success'
                  ? t('login.alert.success')
                  : t('login.alert.error')}
              </span>
            </div>
          )}
          <TextField id="outlined-basic" label={t('login.username.name')} variant="outlined" />
          <input
            type='text'
            className='username'
            id='username'
            placeholder= {t('login.username.placeholder')}
            onChange={usernameChangeHandler}
          />

          <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          <TextField id="outlined-basic" label={t('login.password.name')} variant="outlined" />
          <input
            type='password'
            className='password'
            id='password'
            placeholder= {t('login.password.placeholder')}
            onChange={passwordChangeHandler}
          />
          <Button variant="contained">{t('login.submit')}</Button>
        </form>
        <Link href='/join'>
          <span className='join'>
            {t('login.join')}
          </span>
        </Link>
        <Link href='/'>
          <span className='back'>
            {t('login.back')}
          </span>
        </Link>

      <style jsx>
        {`
          h1 {
            font-family: 'Open Sans', sans-serif;
            font-size: 24px;
            color: #4f4f4f;
            margin: 0px;
          }
          .logo {
            display: flex;
            flex-direction: row;
            margin-top: 20px;
            margin-bottom: 20px;
            padding-right: 10px;
            padding-left: 10px;
            align-self: center;
          }
          .logo .icon {
            min-width: 3em;
            min-height: 3em;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: scale(2);
          }
          .title{
            color: white;
            margin-left: 8px;
            text-align: center
          }
          .form {
            background: white;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            padding: 24px;
            font-family: 'Open Sans', sans-serif;
          }
          .formContainer {
            max-width: 640px;
            margin: auto;
            display: flex;
            flex-direction: column;
          }
          .form input[type='text'],
          .form input[type='password'] {
            outline: none;
            background: #ededed;
            border-radius: 8px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 400;
            font-size: 16px;
            color: #928f8f;
            border: none;
            padding: 8px;
            height: 32px;
            min-width: 256px;
            vertical-align: middle;
            -webkit-appearance: none;
            margin-bottom: 16px;
          }
          .form button {
            outline: none;
            background: #7bc043;
            border-radius: 8px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            font-size: 18px;
            color: #ffffff;
            text-align: center;
            border: none;
            padding: 4px;
            height: 48px;
            vertical-align: middle;
            padding-left: 16px;
            padding-right: 16px;
            -webkit-appearance: none;
          }
          .form label {
            padding-bottom: 16px;
          }
          .back {
            display: inline-block;
            margin: 16px;
            font-family: 'Open Sans', sans-serif;
            color: #6f6e6e;
            font-size: 14;
            cursor: pointer;
          }
          .join {
            display: inline-block;
            margin: 16px;
            font-family: 'Open Sans', sans-serif;
            color: #6f6e6e;
            font-size: 14;
            cursor: pointer;
          }
          .alert-error {
            background: #e74c3c;
            border-radius: 6px;
            margin-bottom: 16px;
            padding: 16px;
          }
          .alert-info {
            background: #3ca9e7;
            border-radius: 6px;
            margin-bottom: 16px;
            padding: 16px;
          }
          .alert-success {
            background: #7bc043;
            border-radius: 6px;
            margin-bottom: 16px;
            padding: 16px;
          }
          .alert-text {
            color: white;
            margin-left: 8px;
          }
        `}
      </style>
    </div>
  )
}


export default Login
