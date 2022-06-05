export interface createAuthorDTO {
    firstName: string;
    lastName: string;
    biography: string;
    dob: string;
    educations?: string[];
    isbn: string;

    title?: string;
    description?: string;
    publishedDate?: string;
    amount?: number;

}

export interface updateAuthorDTO {
    firstName: string;
    lastName: string;
    biography: string;
    dob: string;
    educations?: string[];

}