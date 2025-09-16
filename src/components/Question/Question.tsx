import styles from './Question.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardQuestion, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import type { QuestionsData } from '../types';
import { useNavigate, generatePath } from 'react-router-dom';

const Question: React.FC<QuestionsData> = ( { item } ) => {
    
    const[state, setState] = useState(item.answers?.reduce((acc, curr) => {
        acc[curr.id] = false;
        return acc;
    }, {} as Record<string, boolean>));

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(generatePath('/question/:id', {id: item.id}));
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.upperPart} onClick={handleClick}>
                <div className={styles.questionIcon}><FontAwesomeIcon icon={faClipboardQuestion} size='2x' /></div>
                <div>
                    <div className={styles.questionTitle}>{item.title}</div>
                    <div className={styles.userName}>Asked by user: {item.user.username}</div>
                </div>
            </div>
            <div className={styles.questionContent} onClick={handleClick}>{item.description}</div>
            <button className={styles.openContentBtn} onClick={() => {
                setState((prev) => ({
                    ...prev,
                    [item.id]: !prev[item.id]
                }))
            }}><FontAwesomeIcon icon={faEye} /></button>
            {state[item.id] && <div className={styles.answersWrapper}>
                {item.answers?.map(answer => {
                    return (
                    <div className={styles.answerContent}>- {answer.content}</div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Question;