import React,{ useState } from 'react'
import Link from 'next/link'
import Router from 'next/router.js'
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
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
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import { signIn } from "next-auth/react"

// i18next
import { useTranslation } from 'react-i18next'

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
    console.log('performLogin username : ', username, ' Password : ', password)
    /**
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
    })*/
  }

  const usernameChangeHandler = event => {
    setUsername(event.target.value)
  }

  const passwordChangeHandler = event => {
    setPassword(event.target.value)
  }
  return (
    
    <Box sx={{ '& .MuiTextField-root': { mb: 5},'& button':{mt:2}, p: 2, border: '1px dashed grey'}}
    display="flex"
    justifyContent="center"
    alignItems="center"
    > 
      <Card sx={{ maxWidth: 'sm' }}>
        <CardContent>
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
            <TextField
              required 
              id="outlined-basic" 
              label={t('login.username.name')} 
              variant="outlined"
              placeholder= {t('login.password.placeholder')}
              onChange={usernameChangeHandler}
              />
            <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              placeholder= {t('login.username.placeholder')}
              onChange={passwordChangeHandler}
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
            
            <Button type='submit' variant="contained">{t('login.submit')}</Button>
          </form>
        </CardContent>
        <CardActions>
          <Link href='/register'>
            <span className='join'>
              {t('login.join')}
            </span>
          </Link>
          <Link href='/'>
            <span className='back'>
              {t('login.back')}
            </span>
          </Link>
        </CardActions>

      <style jsx>
        {`
          h1 {
            font-family: 'Open Sans', sans-serif;
            font-size: 24px;
            color: #4f4f4f;
            margin: 0px;
          }
          .logo {
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
    </Card>
  </Box>
  )
}


export default Login
