import axios from "axios";
import { useState, useEffect } from "react";
import Post from '../../Post/Post';
import Spinner from "../../Spinner/Spinner";
import styles from './HomePage.module.css';
import type { SnippetData } from "../../types";


export default function HomePage() {

    const [appState, setAppState] = useState<SnippetData[]>();
  
    useEffect(() => {
        axios.get('/snippets').then((resp) => {
        const allUsers = resp.data;
        setAppState(allUsers.data.data);
        });
    }, [setAppState]);

     
  return (
    <div className={styles['postsWrapper']}>
      {!appState && <Spinner />}
      {appState &&
      <div className={styles['welcomeSection']}>
        <div>Welcome to codelang!</div>
        <div><img src='/icon.png' width='40px'/></div>
      </div>}
      {appState?.map(item => (
        <Post
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );

}