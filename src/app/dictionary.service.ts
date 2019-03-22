import {Injectable} from '@angular/core';

@Injectable()

export class DictionaryService {

    constructor() {
    }

    private words: IWord[] = [
        {key: 'service', mean: 'dichvu'},
        {key: 'service provider', mean: 'nha cung cap dich vu'},
        {key: 'dark', mean: 'den'},
        {key: 'snow', mean: 'tuyet'}
    ];
    search(word: string){
        if(!word) return '';
        const w = this.words.find(item=>item.key === word.toLowerCase());
        if (w) return w.mean;
        return 'Not Found';
    }
    getAll(): IWord[] {
        return this.words;
    }
}

export interface IWord {
    key: string;
    mean: string
}
