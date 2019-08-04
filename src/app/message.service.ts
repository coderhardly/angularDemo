import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [ ];
  constructor() { }
  add(mess: string) {
   this.messages.push(mess);
  }
  clear() {
    this.messages = [];
  }
}
