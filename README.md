jquery-create-checkall
============
jQuery plugin that creates an intelligent "All" option for a group of checkboxes.<br>
By "intelligent" I mean that it will:
- Check all of its related checkboxes when checked
- Uncheck all of its related checkboxes when unchecked
- Become checked when all of its related checkboxes are manually checked
- Become unchecked if at least one of its related checkboxes is unchecked

Installation:
------------
Just add the jquery-checkall.js to your project and include it anywhere in your HTML (after jQuery).
```
<script src="path/to/jquery-create-checkall.js"></script>
```

Usage:
------------
Use the plugin as follows:
```
$('.list-of-checkboxes').createCheckAll();
```
This will create a new checkbox input an its label using the default options. They are:
- **breakAfter**: adds a ```<br>``` after the new element. Boolean, defaults to _false_.
- **classes**: list of classes to be added to the new element. String, defaults to _null_.
- **id**: id of the new element. String, defaults to _null_.
- **label**: text for the new element's label. String, defaults to _"All"_.
- **position**: position of the new element realtive to the list passed to the plugin. String, accepts _"before"_ or _"after"_ and defaults to _"before"_.

There is a special option:
- **allSelector**: this one permits you to pass the selector of an already existent checkbox element that'll be used as the "select all". This option ignores all of the others. String, defaults to _null_. Usage:
```
$('.list-of-checkboxes').createCheckAll({
	allSelector: '#id-of-the-one-i-want-to-use'
});
```