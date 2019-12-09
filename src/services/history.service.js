import { BehaviorSubject } from 'rxjs';

export default class HistoryHandler {
    static _historyH = new BehaviorSubject("");

    static setHistory(history) {
        console.log("this", this)
      this._historyH.next(history)
    }
    
    static getHistory() {
      return this._historyH;
    }
  }