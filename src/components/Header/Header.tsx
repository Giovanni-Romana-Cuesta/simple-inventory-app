import './Header.css';
import HeaderLogo from '../../assets/images/HeaderLogo.png';
import UserPlaceholder from '../../assets/images/UserPlaceholder.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={HeaderLogo} alt='header_logo' />
        <h1>Inventory System</h1>
      </div>
      <div className='user-info'>
        <img src={UserPlaceholder} alt="user_image" />
        <span>Giovanni Romaña</span>
      </div>
    </div>
  );
};

export default Header;
