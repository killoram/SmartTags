//SMARTTAGS - by Seth Vandebrooke
/*
SmartTags is a system for dynamic data output. By asigning data values to custom HTML tags you can make data outputting an easy task.
The SmartTags Object handles all operations needed with its included methods.
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
SmartTag.newTag Syntax: Tagname,Value
The value can either be a string or a function

//Create a new tag:
SmartTags.newTag("username", function(){
  var result;
  //more lines of code
  //code that assigns a string value to the result variable
  return result;
});

//reassign the value of a tag
SmartTags.setTag("username", function(){
  var result;
  //more lines of code
  //code that assigns a string value to the result variable
  return result;
});

NOTE: Although the newTag and setTag function have the same parameters, they ARE NOT the same function and CANNOT be used interchangeably.

Use the tagnames to create HTML elements:
<username></username>

Call the SmartTags function at the end of the HTML document
<script>
SmartTags.run(); //Use the run method to add the values to the html elements
</script>

*/

var SmartTags = new Object();
SmartTags.list = [];

SmartTags.run = function() {
	for (var i = 0; i < SmartTags.list.length; i++) {
		var tag = SmartTags.list[i];
		var x = document.getElementsByTagName(tag.tagname);
		for (var y = 0; y < x.length; y++) {
      if (typeof tag.tagvalue=="string") {
        x[y].innerHTML = tag.tagvalue;
      } else {
        var output = tag.tagvalue();
        x[y].innerHTML = output;
      }
		}
	}
};

SmartTags.newTag = function(Tname,Tvalue) {
  if (Tname!==undefined) {
    if (Tvalue!==undefined) {
        if (typeof Tname=="string") {
          if (SmartTags.list.length==0&&SmartTags.list[0]==undefined) {
            SmartTags.list[0] = {tagname:Tname, tagvalue:Tvalue};
          } else {
            var index = SmartTags.list.length;
            SmartTags.list[index] = {tagname:Tname, tagvalue:Tvalue};
          }
        } else {
          return "The name must be a string";
        } 
    } else {
      return "Requires Value";
    }
  } else {
    return "Requires Name";
  }
};

SmartTags.setTag = function(Tname,Tvalue) {
  if (Tname!==undefined) {
    if (Tvalue!==undefined) {
        if (typeof Tname=="string") {
          for (var i = 0; i < SmartTags.list.length; i++) {
            if (SmartTags.list[i].tagname==Tname) {
              var index = i;
            }
          }
          SmartTags.list[index] = {tagname:Tname, tagvalue:Tvalue};
        } else {
          return "The name must be a string";
        }
        } else {
      return "Requires Value";
    }
  } else {
    return "Requires Name";
  }
};

SmartTags.exist = function(Tname) {
  for (var i = 0; i < SmartTags.list.length; i++) {
    if (SmartTags.list[i].tagname==Tname) {
      var index = i;
    }
  }
  if (index!==undefined) {
    return true;
  } else {
    return false
  }
}

SmartTags.reset = function() {
  SmartTags.list = [];
};

SmartTags.testALL = function() {
  for (var i = 0; i < SmartTags.list.length; i++) {
    document.body.innerHTML += "<"+SmartTags.list[i].tagname+"></"+SmartTags.list[i].tagname+"><br>";
  }
  SmartTags.run();
};
