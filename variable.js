var sub="javascript";
var wish=`welcome to ${sub}`;
console.log(wish);

var tbl_name="employee";
var sal=5000;
var sql_query=`select * from ${tbl_name} where salary>${sal}`;
console.log(sql_query);

var uname="subhasis";
var upwd="Pinku@01";
var sql_query=`select * from ${tbl_name} where name='${uname}' and pwd='${upwd}'`;
console.log(sql_query);

var $data;
console.log($data);

var _data;
console.log(_data);

//var 123data; //invalid

var _123data;
console.log(_123data);

console.log(10 =="10");
console.log(10 ==="10");
console.log(10=="ten");
console.log(10==="ten");
