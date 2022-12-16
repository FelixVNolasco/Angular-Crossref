// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface Work {
    status: string;
    "message-type": string;
    "message-version": string;
    message: Message;
}

export interface Message {
    indexed: Created;
    "reference-count": number;
    publisher: string;
    issue: string;
    "content-domain": ContentDomain;
    "short-container-title": string[];
    DOI: string;
    type: string;
    created: Created;
    page: string;
    source: string;
    "is-referenced-by-count": number;
    title: string[];
    prefix: string;
    volume: string;
    author: Author[];
    member: string;
    "published-online": Issued;
    reference: { [key: string]: string }[];
    "container-title": string[];
    "original-title": any[];
    language: string;
    link: Link[];
    deposited: Created;
    score: number;
    resource: Resource;
    subtitle: any[];
    "short-title": any[];
    issued: Issued;
    "references-count": number;
    "journal-issue": JournalIssue;
    "alternative-id": string[];
    URL: string;
    relation: Relation;
    ISSN: string[];
    "issn-type": IssnType[];
    subject: string[];
    published: Issued;
}

export interface Author {
    given: string;
    family: string;
    sequence: string;
    affiliation: any[];
}

export interface ContentDomain {
    domain: any[];
    "crossmark-restriction": boolean;
}

export interface Created {
    "date-parts": Array<number[]>;
    "date-time": string;
    timestamp: number;
}

export interface IssnType {
    value: string;
    type: string;
}

export interface Issued {
    "date-parts": Array<number[]>;
}

export interface JournalIssue {
    issue: string;
    "published-online": Issued;
}

export interface Link {
    URL: string;
    "content-type": string;
    "content-version": string;
    "intended-application": string;
}

export interface Relation {
}

export interface Resource {
    primary: Primary;
}

export interface Primary {
    URL: string;
}
