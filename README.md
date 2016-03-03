# SmartTags
SmartTags is a javascript framework for dynamic data output in HTML documents.
By asigning data values with custom HTML tags you can make data outputting an easy task.
SmarTags is written entirely as a short javascript function and uses 1 array for assigning values to tagnames.

SmartTag Syntax: Tagname|Value


Create an array like so:

var Tags = new Array(); //Declare the Tags array

Tags[0] = "name|John Doe"; // Assign the value "John Doe" to the tagname "name"

Tags[1] = "job|Programmer"; //Assign the value "Programmer" to the tagname "job"


Output the data using the tagnames:

<name></name>

<job></job>


Call the SmartTags function at the end of the HTML document

<script>

SmartTags(Tags); //Use whatever Tags array you defined earlier

</script>

The output will look like this:
John Doe
Programmer
