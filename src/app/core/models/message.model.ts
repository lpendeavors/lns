import { Segment, Group } from ".";

export interface Message {
    id: string;
    name: string;
    type: string;
    smsText?: string;
    emailHtml?: string;
    segments?: Segment[];
    groups?: Group[];
    isPublished: boolean;
}