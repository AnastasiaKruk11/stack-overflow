import styles from './CreatePostPage.module.css';
import MonacoEditor from 'react-monaco-editor';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default function CreatePostPage() { 

    const [language, setLanguage] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };

    return (
        <div className={styles.snippetWrapper}>
            <div className={styles.header}>Create new snippet!</div>
            <div>
                <span className={styles.labelField}>Language of your snippet:</span>
                <div className={styles.selectWrapper}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="inputLabel">Language</InputLabel>
                            <Select
                                labelId="inputLabel"
                                id="inputSelect"
                                value={language}
                                label="Language"
                                onChange={handleChange}
                            >
                                <MenuItem value={'JS'}>Java Script</MenuItem>
                                <MenuItem value={'C#'}>C#</MenuItem>
                                <MenuItem value={'Python'}>Python</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <div>
                <span className={styles.labelField}>Code of your snippet:</span>
                <div className={styles.editorWrapper}>
                    <MonacoEditor
                        width="1100"
                        height="200"
                        language={language}
                        theme="vs"
                        //value={}
                        //onChange={}
                    />
                </div>
                <button className={styles.submitSnippetBtn}>CREATE SNIPPET</button>
            </div>
        </div>
    )
}