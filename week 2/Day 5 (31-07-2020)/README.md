#https://docs.google.com/document/d/1AB04kg6FD9UuJgfW3P9Ml_Ol9tFCNJRVT2mx4jPKK3U/edit

js is not object oriented
its is object based

Data abstraction:
-definition (hiding)
-working of a car
-inbuilt functions
-array implemnation(how the data is stored)

Data encapsulation:
-encapsulate two variable into a single entity and give it a new name
-combining of two things

Inheritance
-inheriting child class from base class

Javascript is by default public and does not have any access specifiers
There is no support of data protection

class person{
    constructor(a)
    {
        this.age=a;
    }
    set age(a) //setter
    {
        if(a<100 && a>0)
        this.age=a;
        else
        return -1;
    }
    get age() //getter
    {
        return this.age;
    }
}
p1=new person(10);
//p1.age=20;
p1.age(50);
p1.age();

extends keyword is used to inherit a class
in js the lowest call will be called and then it will move towards upper parent

Class and object hoisting
-classes are never hoisted in js
-functions are hoisted in js

Global execution context

call() and apply() was introduced in es3
call and apply ->immediate - instant
and bind ->use later - function object

arguments (JSON) ES5 == rest (Array) ES6 - Array methods

recap:
-object structure k:variable
-copy by value
-XMLHttpRequest - Async,CORS,Auth
-Hoisting 
-Functions and anomyous function

ES5 & ES6 - Basics
------------
1. Object struc - K:V
2. Copy by value - Ref
3. XMLhttpreq - Async , CORS ,AUTH - Key , OAUTH
4. Hoisting - Varible & Fucntion (not value, Properties , class)
5. Fucntion - Anony ,IIFE - pass & return (callbacl) , Arrow (Imp) , Array meth MRF
6. OOPS - Prototype , Class 
7. This & execution context 
8. Call Apply Bind
9. Spread rest arguments 
10.Desturuting

