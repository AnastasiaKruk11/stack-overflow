import styles from "./QuestionPage.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "../../Spinner/Spinner";
import Question from "../../Question/Question";

export default function QuestionsPage() {

    const [appState, setAppState] = useState();

    useEffect(() => {
        axios.get('/questions').then((resp) => {
        const allUsers = resp.data.data.data;
        console.log(allUsers)
        setAppState(allUsers);
        });
    }, [setAppState]);

    return (
        <div className={styles['questionsWrapper']}>
        {!appState && <Spinner />}
        
        {appState?.map(item => (
            <Question
            key={item.id}
            item={item}
            id={item.id}
            />
        ))}
        </div>
    )
}