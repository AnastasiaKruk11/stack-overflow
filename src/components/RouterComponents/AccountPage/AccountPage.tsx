import styles from './AccountPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import api from '../../api';


export default function AccountPage() {

    const [data, setData] = useState();
    const accessToken = '';
  
    useEffect(() => {
        api.get('/me', {
            headers: {
            'Authorization': `Bearer ${accessToken}`}
        }).then((resp) => {
        const meData = resp.data.data;
        setData(meData);
        });
    }, [setData]);

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.headerWrapper}>Welcome, anastasia</div>
            <div className={styles.userContent}>
                <div className={styles.user}>
                    <div className={styles.userAvatar}><img src='/user.png' width='180px'/></div>
                    <div className={styles.userInfo}>
                        <div className={styles.info}>
                            <span>anastasia</span>
                            <span>id: {}</span>
                            <span>role: {}</span>
                        </div>
                        <div className={styles.userBtns}>
                            <button><FontAwesomeIcon icon={faRightFromBracket} /></button>
                            <button><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                </div>
                <div className={styles.statistics}>
                    <span>Rating: {}</span>
                    <span>Snippets: {}</span>
                    <span>Comments: {}</span>
                    <span>Likes: {}</span>
                    <span>Dislikes: {}</span>
                    <span>Questions: {}</span>
                    <span>Correct Answers: {}</span>
                    <span>Regular Answers: {}</span>
                </div>
            </div>
            <div className={styles.formsWrapper}>
                <div className={styles.userChange}>
                    <span className={styles.editText}>Edit your profile:</span>
                    <span className={styles.changeText}>Change your username:</span>
                    <input placeholder='New username'></input>
                    <button className={styles.confirmBtn}>SAVE</button>
                </div>
                <div>
                    <form className={styles.passwordChange}>
                        <span className={styles.changeText}>Change your password:</span>
                        <input placeholder='Old password'></input>
                        <input placeholder='New password'></input>
                        <input placeholder='Confirm password'></input>
                        <button className={styles.confirmBtn}>CHANGE PASSWORD</button>
                    </form>
                </div>
            </div>
        </div>
    )
}