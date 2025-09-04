import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../Post/Post";
import styles from "./PostPage.module.css";
import Comment from "../../Comment/Comment";
import Spinner from "../../Spinner/Spinner";
import type { SnippetData } from "../../types";

export default function PostPage() {
    
    const {id} = useParams();

    const [appState, setAppState] = useState<SnippetData>();
      
        useEffect(() => {
            
            axios.get(`/snippets/${id}`).then((resp) => {
            const postData = resp.data.data;
            setAppState(postData);
            });
        }, [setAppState, id]);

    return (
        <div className={styles['postWrapper']}>
            {!appState && <Spinner />}
            <div className={styles['postSection']}>
                {appState && <Post item={appState} />}
            </div>
            <div className={styles['commentsSection']}>
                {appState &&
                <div className={styles['newCommentWrapper']}>
                    <input type="text" placeholder="Leave a comment..."></input>
                    <button></button>
                </div>}
                {appState &&
                <div className={styles['commentsLabel']}>Comments:</div>}
                {appState && appState.comments.map(item => (    
                    <Comment key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}