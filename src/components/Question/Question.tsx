import styles from './Question.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardQuestion, faEye } from '@fortawesome/free-solid-svg-icons';

const Question: React.FC = ( { item } ) => {

    return (
        <div className={styles['mainWrapper']}>
            <div className={styles['upperPart']}>
                <div className={styles['questionIcon']}><FontAwesomeIcon icon={faClipboardQuestion} size='2x' /></div>
                <div>
                    <div className={styles['questionTitle']}>{item.title}</div>
                    <div className={styles['userName']}>Asked by user: {item.user.username}</div>
                </div>
            </div>
            <div className={styles['questionContent']}>{item.description}</div>
            <button className={styles['openContentBtn']}><FontAwesomeIcon icon={faEye} size='2x' /></button>
        </div>
    )
}

export default Question;