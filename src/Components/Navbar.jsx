import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from './login';



export default function  Navbar(){
    return (
        <>
              <div className="flex flex-row justify-between p-7">
       <p>Home</p>
       <p><FontAwesomeIcon className="px-2" icon={faUser} />Prasad K</p>
    </div>
    <Login/>
        </>
    )
}