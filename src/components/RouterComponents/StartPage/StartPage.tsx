import styles from './StartPage.module.css';
import { useNavigate } from 'react-router-dom';


export default function StartPage() {

    const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route);
    }
    
    return (
        <div className={styles.wrapper}>
            <button onClick={() => handleClick('/register')}>Register</button>
            <button onClick={() => handleClick('/login')}>Login</button>
            <button onClick={() => handleClick('/home')}>Home Page</button>
        </div>
    )
}