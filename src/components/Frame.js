/**
 * @fileoverview Frame layout for the general admin pages (includes a left
 * sidebar and content on the right)
 */


//import Sidebar from './Sidebar'
//import { display } from '../../stores'
// <Sidebar loggedIn={props.loggedIn} display={display.id} />

const Frame = props => (
  <div className='container'>
    <div className='content'>{props.children}</div>
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: row;
          flex: 1;
        }
        .content {
          padding: 40px;
          background: #f4f4f4;
          flex: 1;
        }
      `}
    </style>
  </div>
)

export default Frame
