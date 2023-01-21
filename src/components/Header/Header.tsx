import HeaderLogo from '../../assets/images/HeaderLogo.png';
import { StorageKeys } from '../../models/models';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem(StorageKeys.LOGGED_IN);
    navigate('/login');
  };

  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={HeaderLogo} alt='header_logo' />
        <h1>Manage System</h1>
      </div>
      <div className='user-info'>
        <button onClick={logOut} className='logout-button'>
          Log Out
          <i className='fa-solid fa-right-from-bracket'></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
