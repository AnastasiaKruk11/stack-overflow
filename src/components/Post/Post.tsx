import styles from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileCode, faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { useMemo } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { useNavigate, generatePath } from 'react-router-dom';
import type { SnippetData } from '../types';

interface PostProps {
    item: SnippetData
}

const Post: React.FC<PostProps> = ( { item } ) => {

    const {likes, dislikes} = useMemo(() => {
        const result =  {likes: 0, dislikes: 0};
        item.marks.forEach((mark: { type: string }) => {
            if(mark.type === 'like') {
                result.likes++;
            } else {
                result.dislikes++;
            }
        })
        return result;
    }, [item.marks])

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(generatePath('/post/:id', {id: item.id}));
    }

    return (
        <div className={styles['post']}>
            <div className={styles['headPart']} onClick={handleClick}>
                <div><FontAwesomeIcon icon={faUser} />{item.user.username}</div>
                <div><FontAwesomeIcon icon={faFileCode} />{item.language}</div>
            </div>
            <div className={styles['middlePart']} onClick={handleClick}>
                <div className={styles['code']}>
                    <MonacoEditor
                        width="1050"
                        height="200"
                        language={item.language}
                        theme="vs"
                        value={item.code}
                    />
                </div>
            </div>
            <div className={styles['bottomPart']}>
                <div className={styles['marks']}>
                    <button className={styles['likes']}>{likes} <FontAwesomeIcon icon={faThumbsUp} /></button>
                    <button className={styles['dislikes']}>{dislikes} <FontAwesomeIcon icon={faThumbsDown} /></button>
                </div>
                <button className={styles['comments']} onClick={handleClick}>{item.comments.length} <FontAwesomeIcon icon={faComment} /></button>
            </div>
        </div>
    )
}

export default Post;