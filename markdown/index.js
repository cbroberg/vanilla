import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import MarkdownFile from './markdown.md'

export default class extends Component {
	state = { text: 'Loading' }

	componentDidMount() {
		fetch(MarkdownFile)
			.then(response => response.text())
			.then(text => this.setState({ text }))
	}

	render() {
		const { text } = this.state

		return (
			<ReactMarkdown source={text} />
		)
	}
}
