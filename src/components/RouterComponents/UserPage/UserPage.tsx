import styles from './UserPage.module.css';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import type { SelectedUserData } from '../../types';

export default function UserPage() {

    const {id} = useParams();

    const [userData, setUserData] = useState<SelectedUserData>();
      
        useEffect(() => {
            
            api.get(`/users/${id}/statistic`).then((response) => {
            const postData = response.data.data;
            setUserData(postData);
            });
        }, [setUserData, id]);

    return (
        <div className={styles.userContentWrapper}>
            {userData &&
            <div className={styles.userAvatar}>
                <FontAwesomeIcon icon={faFaceSmile} size='4x' />
            </div>}
            {userData &&
            <div className={styles.userStatistics}>
                <span className={styles.username}>User: {userData.username}</span>
                <span>Rating: {userData.statistic.rating}</span>
                <span>Snippets: {userData.statistic.snippetsCount}</span>
                <span>Comments: {userData.statistic.commentsCount}</span>
                <span>Likes: {userData.statistic.likesCount}</span>
                <span>Dislikes: {userData.statistic.dislikesCount}</span>
                <span>Questions: {userData.statistic.questionsCount}</span>
                <span>Correct Answers: {userData.statistic.correctAnswersCount}</span>
                <span>Regular Answers: {userData.statistic.regularAnswersCount}</span>
            </div>}
        </div>
    )
}