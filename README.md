Class.js
===========================

A class & prototyping lib for JavaScript.  Performant and resource light.

Prototyping doesn't have to be hard in js, or at least this tiny lib tries to make it that way.

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

In c#, and in most programmatic languages, there is a certain order of creating classes.  Breaking down the process in order:
* I want to make a class
* I want to name it "MyClass"
* optionally I could extend MyClass with another class, in the above scenario it is "OtherClass"
* I want a certain method to be called when it is instantiated

Javascript really doesn't have this ability by itself, but by using Class.js, we can preserve this exact order of programming.  Also, we can take advantage of javascript's prototyping.
Using Class.js to create a basic object:
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

Class('MyClass', { extends: OtherClass,

    construct: function() {
        //this.parent === OtherClass
    }

});
```
In javascript with Class.js, we now gain the this ability and the order of creating classes.  Breaking down the process in order:
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
```

Parent - Child relationships (hierarchy not limited):
```javascript
Class('OtherClass', function() {});
var MyClass = OtherClass.extend({
    construct: function() {
        alert(this.parent.typeOf);
    }
});
```

Static properties and functions:
```javascript
Class('MyClass', {
	Static: {
		items: [true, true, true],
		getItems: function() {
			return MyClass.items;
		}
	},
	construct: function() {},
	method: function() {}
});

var items = MyClass.getItems();
```

Namespaces:
```javascript
Namespace('Project.Tools').
    Class('Hammer', {
        construct: function() {}
    }).
    Class('Nail', {
        construct: function() {}
    });

var hammer = new Project.Tools.Hammer(),
    nail = new Project.Tools.Nail();
```


"Class" & "Namespace" are fully compatible with apply and call for creating classes in whatever scope you like.
