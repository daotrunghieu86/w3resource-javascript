function str_char(str,char){
var result = str.match(new RegExp(char,"gi")).length;
return result;
}
console.log(str_char('w3resource.com', 'o'));