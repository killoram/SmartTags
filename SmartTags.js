//SMARTTAGS - by Seth Vandebrooke
/*
SmartTags is a system for dynamic data output. By asigning data values with custom HTML tags you can make data outputting an easy task.
SmarTags is written entirely as a short javascript function and uses 1 array for assigning values to tagnames.
*/
/* --------------------------- SMARTTAGS LICENSE --------------------------

  The MIT License (MIT)

  Copyright (c) 2015 Seth Vandebrooke

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  */

//HELP
/*
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

*/

function SmartTags(Tags) {
	for (var i = 0; i < Tags.length; i++) {
		var tag = Tags[i].split("|");
		var x = document.getElementsByTagName(tag[0]);
		for (var y = 0; y < x.length; y++) {
			x[y].innerHTML = tag[1];
		}
	}
}