/**
 * AMD JS Module Enthral Component.
 *
 * This is an example of creating a component as an AMD module, using plain JS.
 * No compiler like Webpack, Typescript or Haxe is necessary.
 *
 * For information about AMD and the RequireJS loader we use, see:
 * http://requirejs.org/
 */

// Use an AMD module definition to define our imports, and export our component.
define(['enthral', 'jquery', 'css!hello'], function (enthral, $) {
	var Hello = function(config) {
		this.header = $("<h1>").appendTo(config.container);
		this.render = function (authorData) {
			var greeting = "Hello " + authorData.name + ", I am an AMD JS module!";
			this.header.text(greeting);
		}
	};

	Hello.enthralPropTypes = {
		// name: enthral.PropTypes.number.isRequired
	}

	return Hello;
});
