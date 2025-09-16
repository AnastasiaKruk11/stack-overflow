import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route)
    }

    return (
        <>
        <div className={styles.wrapper}>
            <button className={styles.mainBtn} onClick={() => handleClick('/')}><img src='/icon.png' width="25px"/>CODELANG</button>
            <div className={styles.rightWrapper}>
                <button className={styles.signBtn} onClick={() => handleClick('/login')}>SIGN IN</button>
                <button className={styles.languageBtn}><img src='/lang.png' width='30px'/></button>
            </div>
        </div>
        </>
    )
}