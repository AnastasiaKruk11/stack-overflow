import styles from './Comment.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Comment( {item} ) {
    console.log(item)
    return (
        <div className={styles['commentWrapper']}>
            <div className={styles['upperPart']}><FontAwesomeIcon icon={faUser}  />{item.user.username}</div>
            <div className={styles['lowerPart']}>{item.content}</div>
        </div>
    )
}