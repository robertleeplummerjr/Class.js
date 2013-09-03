Javacript-Is-A-Classy-Beast
===========================

JCB - A class (prototyping for humans) experiment for JavaScript; performant and resource light

Prototyping doesn't have to be hard, or at least this tiny lib tries to make it that way.

What you may be used to (this example is in C#, but generally it is very similar in most languages):
```c#
class MyClass
{
    public MyClass()
    {

    }
}
```
or
```c#
class MyClass extends OtherClass
{
    public MyClass()
    {

    }
}
```

So we have a certain order of creating classes.  If we were to break down the process it would be:
* I want to make a class
* I want to name it "MyClass"
* optionally I could extend MyClass with another class, in the above scenario it is "OtherClass"
* I want a certain method to be called when it is instantiated

Javascript really doesn't have this ability by itself, but by using some simple markup, we can preserve this exact order of programming.  Also, we can take advantage of javascript's prototyping.
Using JCB to create a basic object:
```javascript
//"MyClass" will be generated on the global context here, which is the "window" variable
Class('MyClass', {
    //"construct" is the method called on instantiation/construction
    construct: function() {
        alert('I am called when constructed');
    },
    //"otherMethod" is a generic method
    otherMethod: function() {
        alert('I am called when you want me to');
    }
});

//"MyClass" was generated, not lets instantiate a new instance of it
var myClass = new MyClass();
```
Extending (notice here that the anon function is going to be used as the construct function):
```javascript
Class('OtherClass', function() {});

Class('MyClass', function() {}, OtherClass);
```
So here we preserve the order of creating classes.  If we were to break down the process it would be:
* I want to make a class
* I want to name it "MyClass"
* optionally I could extend MyClass with another class, in the above scenario it is "OtherClass"
* I want a certain method to be called when it is instantiated

Anonymous extending:
```javascript
Class('OtherClass', function() {});
var MyClass = OtherClass.extend({
    construct: function() {
        alert('I am called when constructed');
    }
});

Parent - Child relationships (hierarchy not limited):

Class('OtherClass', function() {});
var MyClass = OtherClass.extend({
    construct: function() {
        alert(this.parent.typeOf);
    }
});
```
