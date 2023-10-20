import { Injectable } from '@angular/core';
import { debounceTime, filter, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyboardEventService {

  keydown$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    debounceTime(50),
    filter(e=>e.key === 'w' || e.key === 'a' || e.key === 's' || e.key === 'd' ||
              e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft')
  );

  constructor() {
    
   }
}
