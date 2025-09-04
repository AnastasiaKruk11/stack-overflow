import styles from './LoginPage.module.css';

export default function LoginPage() {
    return (
        <div className={styles['formWrapper']}>
            <form>
                <div className={styles['inputWrapper']}>
                    <label htmlFor='username'>Username</label>
                    <input  id='username'></input>
                </div>
                <div className={styles['inputWrapper']}>
                    <label htmlFor='password'>Password</label>
                    <input  id='password' type='password'></input>
                </div>
            </form>
            <button className={styles['confirmBtn']}>SEND</button>
        </div>
    )
}