import { Contact } from "./contact.model";

export class Company {
    id: string;
    name: string;
    users: string[];
    admin: string;
    contactGroups?: Contact[];
    customFields?: CustomContactField[]
}

export interface CustomContactField {
    id: string;
    name: string;
    type: string;
    required: boolean;
}