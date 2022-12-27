import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthCountext, FirebaseContext } from '../../store/Context';
function Header() {
  const history=useHistory()
  const {user}=useContext(AuthCountext)
  const {firebase}=useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div  className="brandName btn" onClick={()=>{history.push('/')}}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>

        <div className="loginPage" >
          <span className='btn' onClick={()=>{
            if(!user){
              history.push('/login')
            }
          }}>{user ? `Welcome ${user.displayName}` :'Login'}</span>
          <hr />
        </div>
         {user && <span className='btn' onClick={()=>{
          firebase.auth().signOut().then(()=>{
          history.push('/login')
          })
        
         }}>LogOut</span>} 

        <div className="sellMenu" onClick={()=>{history.push('/create')}}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
