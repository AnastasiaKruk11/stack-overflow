export interface UserData {
    id: string;
    username: string;
    role: string;
}

export interface MarksData {
    id: string;
    type: string;
    user: UserData
}

export interface SnippetData {
    id: string;
    language: string;
    code: string;
    user: UserData;
    marks?: MarksData;
    //onChange?: void;
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
    user: UserData
}

export interface QuestionData {
    id: string;
    title: string;
    description: string;
    attachedCode?: string;
    answers: AnswerData[];
    isResolved?: boolean;
    onClick?: void;
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

export interface UserStatisticsData {
    commentsCount: number;
    correctAnswersCount: number;
    dislikesCount: number;
    likesCount: number;
    questionsCount: number;
    rating: number;
    regularAnswersCount: number;
    snippetsCount: number;
}

export interface SelectedUserData {
    id: string;
    role: string;
    statistic: UserStatisticsData;
    username: string
}
