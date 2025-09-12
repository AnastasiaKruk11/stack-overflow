import styles from './Question.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardQuestion, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import type { QuestionsData } from '../types';

const Question: React.FC<QuestionsData> = ( { item } ) => {
    console.log(item)
    const[state, setState] = useState(item.answers?.reduce((acc, curr) => {
        acc[curr.id] = false;
        return acc;
    }, {} as Record<string, boolean>));


    return (
        <div className={styles.mainWrapper}>
            <div className={styles.upperPart}>
                <div className={styles.questionIcon}><FontAwesomeIcon icon={faClipboardQuestion} size='2x' /></div>
                <div>
                    <div className={styles.questionTitle}>{item.title}</div>
                    <div className={styles.userName}>Asked by user: {item.user.username}</div>
                </div>
            </div>
            <div className={styles.questionContent}>{item.description}</div>
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