export interface WorkByAgency {
    status: string;
    "message-type": string;
    "message-version": string;
    message: Message;
}

export interface Message {
    DOI: string;
    agency: Agency;
}

export interface Agency {
    id: string;
    label: string;
}
