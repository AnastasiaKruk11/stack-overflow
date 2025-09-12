import styles from './SideMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPerson, faNewspaper, faCircleQuestion, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function SideMenu() {

    const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route);
    }

    return (
        <div className={styles.sideMenuWrapper}>
            <div className={styles.btnsWrapper}>
                <button onClick={() => handleClick('/home')}><FontAwesomeIcon icon={faHouse} />   Home</button>
                <button onClick={() => handleClick('/account')}><FontAwesomeIcon icon={faPerson} />   My Account</button>
                <button onClick={() => handleClick('/create-post')}><FontAwesomeIcon icon={faNewspaper} />   Post snippet</button>
                <button><FontAwesomeIcon icon={faNewspaper} />   My snippets</button>
                <button onClick={() => handleClick('/questions')}><FontAwesomeIcon icon={faCircleQuestion} />   Questions</button>
                <button onClick={() => handleClick('/users')}><FontAwesomeIcon icon={faUsers} />   Users</button>
            </div>
        </div>
    )
}