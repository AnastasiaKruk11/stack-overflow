import styles from './RegisterPage.module.css';

export default function RegisterPage() {
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
                <div className={styles['inputWrapper']}>
                    <label htmlFor='pass-confirmation'>Confirm Password</label>
                    <input  id='pass-confirmation' type='password'></input>
                </div>
            </form>
            <button className={styles['confirmBtn']}>SEND</button>
        </div>
    )
}