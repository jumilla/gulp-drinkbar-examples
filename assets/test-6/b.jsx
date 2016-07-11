
var React = require('react')

var CommentBox = React.createClass({
	displayName: 'CommentBox',

	render: function() {
		return <div class="comment-box">Hello, world! I am a CommentBox.</div>
	}
})

React.render(
	<CommentBox/>,
	document.getElementById('container')
)
