import styles from './StartPage.module.css';
import { useNavigate } from 'react-router-dom';


export default function StartPage() {

    const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route);
    }
    
    return (
        <div className={styles['wrapper']}>
            <button>Register</button>
            <button>Login</button>
            <button onClick={() => handleClick('/home')}>Home Page</button>
        </div>
    )
}