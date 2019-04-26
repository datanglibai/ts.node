import { of, forkJoin, throwError } from 'rxjs';
import { tap, mergeMap, finalize, catchError } from 'rxjs/operators';


forkJoin(
    of(1),
    of(2),
    throwError(new Error(' error!'))
).pipe(finalize( () => console.log('finalize!'))).subscribe(
    result => console.log('forkJoin: ' + result),
    error => console.log('forkJoin: ' + error),
    () => console.log('forkJoin: complelte!')
)
