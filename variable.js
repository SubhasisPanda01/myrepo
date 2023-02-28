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


var decimalnum=100;
var doublenum=100.123;
var hexadecimalnum=0x123456789ABCDEF;
var octalnum=0o1234567;
var binarynum=0b10011010;
console.log(decimalnum,doublenum,hexadecimalnum,octalnum,binarynum);

var flag=true;
console.log(flag);

var arr1=[10,20,30,40,50];
arr1.forEach(function(element,index){
console.log(element,index);
});


var front_end=["Angular","ReactJS","vueJS"];
var databases=["Oracle","MySQL","MongoDB"];
front_end.forEach((element,index)=>{
    console.log(element,databases[index]);
});


var obj={sub_one:"Angular11",
         sub_two:"NodeJS",
         sub_three:"MongoDB"
        };
console.log(obj.sub_one,obj.sub_two,obj.sub_three);


for (var key in obj) {
    console.log(key,obj[key]);
     };





