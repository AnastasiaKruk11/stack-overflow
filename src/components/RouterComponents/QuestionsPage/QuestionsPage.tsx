import styles from "./QuestionPage.module.css";
import { useState, useEffect } from "react";
import Spinner from "../../Spinner/Spinner";
import Question from "../../Question/Question";
import api from "../../api";
import type { QuestionData } from "../../types";

export default function QuestionsPage() {

    const [appState, setAppState] = useState<QuestionData[]>([]);

    useEffect(() => {
        api.get('/questions').then((resp) => {
        const allQuestions = resp.data.data.data;
        setAppState(allQuestions);
        });
    }, [setAppState]);

    return (
        <div className={styles.questionsWrapper}>
        {!appState && <Spinner />}
        
        {appState?.map(item => (
            <Question
            key={item.id}
            item={item}
            />
        ))}
        </div>
    )
}