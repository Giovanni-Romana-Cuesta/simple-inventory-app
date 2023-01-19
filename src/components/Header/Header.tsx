import HeaderLogo from '../../assets/images/HeaderLogo.png';
import UserPlaceholder from '../../assets/images/UserPlaceholder.png';
import { SignUpModel, StorageKeys } from '../../models/models';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const user: SignUpModel = JSON.parse(localStorage.getItem(StorageKeys.USER) || '');
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem(StorageKeys.LOGGED_IN);
    navigate('/login');
  };

  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={HeaderLogo} alt='header_logo' />
        <h1>Inventory System</h1>
      </div>
      <div className='user-info'>
        <img src={UserPlaceholder} alt='user_image' />
        <span>{user.name}</span>
      </div>
    </div>
  );
};

export default Header;
