import { Contact } from "./contact.model";

export class Company {
    id: string;
    name: string;
    users: string[];
    admin: string;
    contactGroups?: Contact[];
}