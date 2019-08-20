#!/Users/mcnally/.nvm/versions/node/v10.15.1/bin/node
var year = 2019;
var month = 8;
var day = 29;

var today = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());
var endDate = new Date(year,month,day);
var days = Math.abs(Math.round(today-endDate)/(1000*60*60*24));

var daysString = (days === 1) ? 'día' : 'días';
var emoji = (days <= 3) ? '😞' : '😀';
var color = (days <= 3) ? 'red' : 'white';

console.log(`En ${days} ${daysString} termina el sprint ${emoji}|color:${color}`);
