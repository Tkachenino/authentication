import {useState} from 'react';

const Logout = () => {
   return (
    <div className='Logout'>
      <p>Hello, Ivan</p>
      <img className='Avatar' src='https://i.pravatar.cc/300' width='30' alt='avatar' />
      <button className='LogoutBtn'>Logout</button>
    </div>
  )
}

export default Logout;