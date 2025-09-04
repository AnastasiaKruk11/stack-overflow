export interface UserData {
    id: string;
    username: string;
    role: string;
}

export interface SnippetData {
    id: string;
    language: string;
    code: string;
    user: UserData;
    marks?: any;
    onChange?: any;
    comments: CommentData[]
}

export interface CommentData {
    id: string;
    content: string;
    user: UserData;
}