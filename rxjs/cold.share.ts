import { interval, of, defer, concat } from 'rxjs';
import { publish, tap, publishReplay,share,  shareReplay, delay, refCount} from 'rxjs/operators';

const source$ = of(1,2,3,4);
//.pipe(share());
source$.subscribe(i => console.log('first subscription',i)); 
setTimeout(() => source$.subscribe(j => console.log('second subscription',j)), 
2000);