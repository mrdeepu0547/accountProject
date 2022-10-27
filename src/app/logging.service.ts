import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusChange(status: string) {
    console.log('account status'+status);
  }

  constructor() { }
  logToConsole(status:string){
 console.log('account status'+status);
  }
}
