//The Node runtime does not ship with its own type definitions, 
//so we need to import those types separately. 
//They are in npm but need to be installed separately. 
//npm install @types/node --save-dev



//currently express, jquery and etc. their type def is not ship with lib.

//let rp = require('request-promise');
import * as rp from 'request-promise';

// why Promise can be used here, who define it?
const resp: Promise<string> = rp.get('http://www.miit.gov.cn/');
resp.then(res => console.log(res));

