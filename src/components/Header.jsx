import Login from './Login';
import Logout from './Logout';


const Header = () => {
  return (
    <header className='Header'>
      <div className='Logo'>Neto Social</div>
      {/* <Login /> */}
      <Logout />
    </header>
  )
}

export default Header;