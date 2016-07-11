'use strict';

var React = require('react');

var CommentBox = React.createClass({
	displayName: 'CommentBox',

	render: function render() {
		return React.createElement(
			'div',
			{ 'class': 'comment-box' },
			'Hello, world! I am a CommentBox.'
		);
	}
});

React.render(React.createElement(CommentBox, null), document.getElementById('container'));
//# sourceMappingURL=b.js.map
