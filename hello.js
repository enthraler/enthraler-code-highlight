/**
 * AMD JS Module Enthral Component.
 *
 * We use SystemJS to load components, and if it finds a valid AMD `define()` call it will treat this as an AMD module.
 * The `module`, `exports`, `require`, `global`, `__dirname` and `__filename` variables are all provided.
 *
 * https://github.com/systemjs/systemjs/blob/master/docs/module-formats.md#amd
 */

// Use an AMD module definition to define our imports, and export our components.
define(['enthral', 'jquery'], function (enthral, $) {
	var Hello = function(config) {
		this.container = $(config.container);
		this.render = function (authorData) {
			var greeting = "Hello " + authorData.name + ", I am an AMD JS module!";
			this.container.text(greeting);
		}
	};

	Hello.enthralPropTypes = {
		// name: enthral.PropTypes.number.isRequired
	}

	return Hello;
});
