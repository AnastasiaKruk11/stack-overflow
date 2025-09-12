import styles from './UsersPage.module.css';
import React, { useState, useEffect } from "react";
import Spinner from "../../Spinner/Spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import Pagination from '@mui/material/Pagination';
import api from '../../api';
import type { UserData, MetaData } from '../../types';

export default function UsersPage() {

    const [appState, setAppState] = useState<UserData[]>();
    const [meta, setMeta] = useState<MetaData>();

    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        api.get('/users', {
            params: {limit: 20, page: page}
        }).then((resp) => {
        const allUsers = resp.data.data.data;
        const meta = resp.data.data.meta;
        setAppState(allUsers);
        setMeta(meta);
        });
    }, [setAppState, page]);

    return (
        <div className={styles.usersWrapper}>
            {!appState && <Spinner />}

            <div className={styles.pages}>{appState && <Pagination count={meta?.totalPages} page={page} onChange={handleChange} />}</div>

            {appState?.map(user => (
            
            <div className={styles.userWrapper}>
                <div className={styles.userAvatar}><FontAwesomeIcon icon={faFaceSmile} size='3x' /></div>
                <div>User:  {user.username}</div>
                <div>Role:  {user.role}</div>
            </div>

        ))}
        </div>
    )
}