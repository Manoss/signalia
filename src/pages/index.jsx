import React, {useState} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Button from '@mui/material/Button';
//import DropdownButton from '../components/DropdownButton'

// i18next
import { useTranslation } from 'react-i18next'

//import { getDisplays } from '../actions/display'

function Index()  {
  const [displays, setDisplays] = useState()
  const {t, ready } = useTranslation()


  const navigateToDisplay = id => {
    Router.push('/display/' + id)
  }

  return (
  <div className='home'>
    <p>{t('index.home')}</p>
    <div className='btn-group'>
      <Link href='/login' style={{ margin: 20 }}>
        <Button variant="outlined">{t('index.button.admin')}</Button>
      </Link>
      <div style={{ margin: 20 }}>
        
      </div>
    </div>
    <style jsx>
      {`
        .home {
          font-family: 'Open Sans', sans-serif;
          padding: 40px;
          max-width: 960px;
          margin: auto;
          text-align: center;
        }
        .home p {
          margin-bottom: 20px;
        }
        .btn-group {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .btn {
          background: lightgray;
          padding: 20px;
          text-decoration: none;
          text-transform: uppercase;
          color: white;
          border-radius: 4px;
          margin: 20px;
          font-size: 16;
        }
        .btn.admin {
          background: #03a9f4;
        }
        .btn.home {
          background: #8bc34a;
        }
      `}
    </style>
  </div>
)



const styles = {
  btn: {
    padding: 20,
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderRadius: 4,
    fontSize: 16
  },
  btnAdmin: {
    background: '#03a9f4'
  }
}
}
export async function getServerSideProps({req}){
  const host =
    req && req.headers && req.headers.host ? 'http://' + req.headers.host : window.location.origin
  const displayList = ['Menu 1', 'Menu 2', 'Menu 3']//await getDisplays(host)
  return { props: {displays: displayList, host: host }}

}

export default Index
