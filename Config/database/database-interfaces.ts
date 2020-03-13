// Generated by https://quicktype.io

export interface IConifg {
    path?: string;
    schema?: Schema[];
    schemaVersion?: number;
}
export interface ISchemaJSON {
    schemaVersion: number;
    schemas: Schema[];
}

export interface Schema {
    name: string;
    primaryKey: string;
    properties: Properties;
}

export interface Properties {
    ID?: string;
    Token?: FirstLetterEng;
    Gurmukhi?: string;
    Updated?: string;
    Bani?: FirstLetterEng | string;
    BaniShabadID?: string;
    Seq?: string;
    English?: string;
    Shabad?: string;
    Verse?: string;
    Custom?: string;
    header?: string;
    MangalPosition?: string;
    existsSGPC?: string;
    existsMedium?: string;
    existsTaksal?: string;
    existsBuddhaDal?: string;
    Paragraph?: string;
    Ceremony?: string;
    VerseRange?: string;
    RaagID?: string;
    RaagGurmukhi?: string;
    RaagEnglish?: string;
    StartID?: string;
    EndID?: string;
    RaagWithPage?: string;
    ShabadID?: string;
    SourceID?: string;
    SourceGurmukhi?: string;
    SourceEnglish?: string;
    Translations?: string;
    Writer?: string;
    Raag?: string;
    PageNo?: FirstLetterEng;
    LineNo?: string;
    Source?: string;
    FirstLetterStr?: FirstLetterEng;
    MainLetters?: string;
    Visraam?: string;
    FirstLetterEng?: FirstLetterEng;
    FirstLetterLen?: FirstLetterEng;
    Shabads?: string;
    WriterID?: string;
    WriterEnglish?: string;
    WriterGurmukhi?: string;
}

export interface FirstLetterEng {
    type: string;
    indexed: boolean;
}
