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
    ///marks?: any;
    //onChange?: any;
    comments: CommentData[]
}

export interface CommentData {
    id: string;
    content: string;
    user: UserData;
}

export interface CommentsData {
    item: CommentData;
}

export interface AnswerData {
    id: string;
    content: string;
    isCorrect?: boolean;
}

export interface QuestionData {
    id: string;
    title: string;
    description: string;
    attachedCode?: string;
    answers: AnswerData[];
    isResolved?: boolean;
    user: UserData;
}

export interface QuestionsData {
    item: QuestionData;
}

export interface MetaData {
    currentPage: number;
    itemsPerPage: number;
    sortBy: string[];
    totalItems: number;
    totalPages: number;
}
