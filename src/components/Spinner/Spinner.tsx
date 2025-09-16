import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Spinner.module.css';

export default function Spinner() {
    return (
        <div className={styles.spinnerWrapper}>
            <FontAwesomeIcon icon={faSpinner} spin size="5x" />
        </div>
    )
}