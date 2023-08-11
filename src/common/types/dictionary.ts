export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'pronoun'
  | 'preposition'
  | 'conjunction'
  | 'interjection';

export type Dictionary = {
  head: {};
  def: Word[];
};

export type Word = {
  text: string;
  pos?: PartOfSpeech;
  ts?: string; // транскрипция
  tr: Translation[]; // массив переводов
};

export type Translation = {
  text: string;
  pos?: PartOfSpeech;
  gen?: string; // Род существительного для тех языков, где это актуально (может отсутствовать).
  fr?: number;
  syn?: Translation[]; // массив синонимов
  mean?: {text: string}[]; // массив значений
  ex?: any[]; // массив примеров
  num?: string; // число pl
};
