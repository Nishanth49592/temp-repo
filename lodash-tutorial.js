const method =require('lodash');
const items=[1,[2,[3,[4,[5]]]]];
const setitems=method.flattenDeep(items);
console.log(setitems);