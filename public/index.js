/**
 * Created by wei on 12/27/16.
 */
import "./stylesheets/style.css"

import numeral from 'numeral';



const courseValue = numeral(1000).format('$0,0.00');
console.log('test');
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);
