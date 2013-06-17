Javacript-Is-A-Classy-Beast
===========================

JCB - A class (prototyping for humans) experiment for JavaScript; performant and resource light

Prototyping doesn't have to be hard, or at least this tiny lib tries to make it that way.

What you may be used to:
class MyClass
{
    public MyClass()
    {

    }
}

or

class MyClass extends OtherClass
{
    public MyClass()
    {

    }
}

Using JCB to create a basic object:

Class('MyClass', {
    construct: function() {
        alert('I am called when constructed');
    },
    otherMethod: function() {
        alert('I am called when you want me to');
    }
});

Instantiation:

var myClass = new MyClass();

Extending:

Class('OtherClass', function() {});

Class('MyClass', function() {}, OtherClass);

Anonymous extending:

Class('OtherClass', function() {});
var MyClass = OtherClass.extend({
    construct: function() {
        alert('I am called when constructed');
    }
});

Parent - Child relationships (depth not limited):

Class('OtherClass', function() {});
var MyClass = OtherClass.extend({
    construct: function() {
        alert(this.parent.typeOf);
    }
});