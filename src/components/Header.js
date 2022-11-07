import { Link } from 'react-router-dom';
import './Header.css'
import logo from './logo.png';

function Header() {
   const title = 'الركشة عليك و الفيلم علينا'

   return  (
   <div className='lmj-banner'>
     <div onClick={() => window.scroll(0,0)} > <img src={logo} alt='الركشة عليك و الفيلم علينا' className='lmj-logo' /> </div> 
     <div onClick={() => window.scroll(0,0)}> <h1 className='lmg-title'>{title} </h1></div>
     
     <div className="sign-in-up">
        <Link to= '/Login'>Sign In</Link> 
        <Link to= '/Register'>Sign up</Link>
     </div>
   </div>
   );
}
export default Header;