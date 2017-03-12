/**
 * "Hello World" example for creating an Enthraler as an AMD JS module.
 *
 * This is an example of creating a component as an AMD module, using plain JS.
 * No compiler like Webpack, Typescript or Haxe is necessary.
 *
 * jQuery is used here as an example of how to load dependencies, but it is not required.
 *
 * For information about AMD and the RequireJS loader we use, see:
 * http://requirejs.org/
 *
 * The code in this template is released into the public domain, you are free to use it as you wish.
 */

// Use an AMD module definition.
// We will import jQuery, enthraler, and local CSS.
define(['enthraler', 'jquery', 'css!hello'], function (enthraler, $) {
	var Hello = function(environment) {
		this.header = $("<h1>").appendTo(environment.container);
		this.render = function (authorData) {
			var greeting = "Hello " + authorData.name + ", I am an AMD JS module!";
			this.header.text(greeting);

			// Resize the iframe to fit the new height.
			environment.requestHeightChange();
		}
	};

	Hello.enthralerPropTypes = {
		// name: enthraler.PropTypes.number.isRequired
	}

	return Hello;
});
