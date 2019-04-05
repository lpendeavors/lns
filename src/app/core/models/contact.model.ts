export interface Contact {
    id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    whatsApp?: string;
    group: string;
    customFields?: CustomField[];
}

export interface CustomField {
    id: string;
    name: string;
    value: any;
}