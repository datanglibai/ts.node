let persons:string[] = ['a','b','c'];
let counters: number[] = [1,2,3];
//persons = counters;

type personOrCounter = (string | number)[];

let pOrc: personOrCounter = persons;
pOrc = counters;

pOrc = ['a',5,5,'b'];

interface Player {
    name: string;
    counter: number;
}



/*
type Tuple = [string, number, Player];

let players : Tuple = ['ahdh', 34, {name: 'dd', counter: 56}];

players.forEach(v=> console.log(v));
*/