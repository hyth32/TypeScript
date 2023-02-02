var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TypeScript';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'TypeScript'];
//tuple
var contact = ['Ivan', 1234567];
//any
var variable = 42; //any для возможности использования в другом типе
//..
variable = 'New string';
variable = [];
// --
function sayMyName(name) {
    console.log(name);
}
sayMyName('Heisenberg');
