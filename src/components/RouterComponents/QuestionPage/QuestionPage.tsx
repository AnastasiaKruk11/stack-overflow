import styles from './QuestionPage.module.css';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from '../../api';
import MonacoEditor from 'react-monaco-editor';
import Spinner from '../../Spinner/Spinner';
import type { QuestionData } from '../../types';

export default function QuestionPage() {

    const {id} = useParams();
    
    const [questionData, setQuestionData] = useState<QuestionData>();

    useEffect(() => {
            
        api.get(`/questions/${id}`).then((response) => {
        const questionData = response.data.data;
        console.log(questionData)
        setQuestionData(questionData);
        });
    }, [setQuestionData, id]);

    return (
        <div className={styles.questionWrapper}>
            {!questionData && <Spinner />}

            {questionData &&
            <div className={styles.infoWrapper}>
                <span className={styles.questionHeader}>Question - asked by {questionData.user.username}</span>
                <span>{questionData.title}</span>
                <span>{questionData.description}</span>
            </div>}
            {questionData &&
            <div className={styles.editorWrapper}>
                <MonacoEditor
                    width="1050"
                    height="200"
                    theme="vs"
                    value={questionData.attachedCode}
                />
            </div>}
            {questionData && <span>Answers given:</span>}
            {questionData?.answers.map(answer => (
                
                <div className={styles.answerWrapper}>
                    <span>Answered by {answer.user.username}:</span>
                    <div>- {answer.content}</div>
                </div>
            ))}
        </div>
    )
}