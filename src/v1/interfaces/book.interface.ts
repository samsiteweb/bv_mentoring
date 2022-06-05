
export interface createBookDTO {
    authorIds: number[];
    isbn: string;
    title: string;
    description: string;
    publishedDate: string;
    amount?: number;

}

export interface updateBookDTO {
    title: string;
    description: string;
    publishedDate: string;
    amount: number;

}


