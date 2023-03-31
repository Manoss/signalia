import { useState } from 'react'
import Link from 'next/link'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faTv, faCheck, faTimes, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'
// i18next
import { useTranslation } from 'react-i18next'

//import { display } from '../stores'
//import { addUser } from '../actions/user.js'

//Mui
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
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


function Register(){


    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState('')
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
  const navigateToHome = () => {
    Router.push('/')
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const performJoin = () => {
    //const { username, password, email } = this.state
    const user = {
      username: username,
      email: email,
      password: password
    }
    addUser({user})
    .then(resp => {
      console.log('ADDUSER : ', resp.data)
      if (resp.data.error) {
        console.log('ERROR : ', resp.data.error)
        setMessage({message: resp.data.error.message})
        throw new Error()
      } else {
        setAlert({ alert: 'success' })
        Router.push('/')
      }
    })
    .catch(() => {
      setAlert({ alert: 'error' })
    })
  }

  const usernameChangeHandler = event => {
    setUsername({
      username: event.target.value
    })
  }

  const passwordChangeHandler = event => {
    setPassword({
      password: event.target.value
    })
  }

  const emailChangeHandler = event => {
    setEmail({
      email: event.target.value
    })
  }
    return (
      <Box sx={{ '& .MuiTextField-root': { mb: 5},'& button':{mt:2}, p: 2, border: '1px dashed grey'}}
    display="flex"
    justifyContent="center"
    alignItems="center"
    > 
        <Card>
        <CardContent>
        <div className='formContainer'>
          <div className='logo'>
            <div className='icon'>
            <Icon fontSize="small">tv</Icon>
              
            </div>
          </div>
          <div className='title'>
              <h1>{t('join.title')}</h1>
          </div>
          <form
            className='form'
            onSubmit={event => {
              event.preventDefault()
              performJoin()
              return false
            }}
          >
            {alert && (
              <div className={`alert-${alert}`}>
                <span className={'alert-text'}>
                  {alert == 'success'
                    ? t('join.alert.success')
                    : t('join.alert.error')}
                </span>
              </div>
            )}
            {message && (
              <div className={`message-${message}`}>
                <p>{message}</p>
              </div>
            )}
            <TextField
              required 
              id="outlined-basic" 
              label={t('join.username.name')} 
              variant="outlined"
              placeholder= {t('join.password.placeholder')}
              onChange={usernameChangeHandler}
              />
              <TextField
              required 
              id="outlined-basic" 
              label={t('join.email.name')} 
              variant="outlined"
              placeholder= {t('join.email.placeholder')}
              onChange={emailChangeHandler}
              />
            <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{t('join.password.name')} </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              placeholder= {t('join.username.placeholder')}
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
          <Button type='submit' variant="contained">{t('join.submit')}</Button>
          </form>
          </div>
          </CardContent>
          <CardActions>
          <Link href='/'>
            <span className='back'>
              {t('join.back')}
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
              text-align: center;
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
            .form input[type='email'],
            .form input[type='password'] {
              outline: solid;
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

      </Card>
      </Box>
    )
}


export default Register
