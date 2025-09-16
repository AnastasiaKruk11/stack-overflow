import styles from "./QuestionsPage.module.css";
import { useState, useEffect } from "react";
import Spinner from "../../Spinner/Spinner";
import Question from "../../Question/Question";
import api from "../../api";
import type { QuestionData, MetaData } from "../../types";
import Pagination from '@mui/material/Pagination';

export default function QuestionsPage() {

    const [appState, setAppState] = useState<QuestionData[]>();
    const [meta, setMeta] = useState<MetaData>();

    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        api.get('/questions', {
            params: {limit: 4, page: page}
        }).then((resp) => {
        const allQuestions = resp.data.data.data;
        const meta = resp.data.data.meta;
        setAppState(allQuestions);
        setMeta(meta);
        });
    }, [setAppState, page]);

    return (
        <div className={styles.questionsWrapper}>
        {!appState && <Spinner />}

        {appState &&
        <div className={styles.pages}>{appState && <Pagination count={meta?.totalPages} page={page} onChange={handleChange} />}</div>}
        
        {appState?.map(item => (
            <Question
            key={item.id}
            item={item}
            />
        ))}
        </div>
    )
}