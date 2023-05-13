import sanitizeHtml from 'sanitize-html';

export const sanitizeContent = (content: string) => {
	// const formattedContent = content.replace(/(\r\n|\n|\r)/gm, '<br>');
	const sanitizedContent = sanitizeHtml(content);
	return sanitizedContent;
};

export const removeNewLines = (content: string | undefined) => {
	if (!content) return '';
	return content.replace(/(\r\n|\n|\r)/gm, ' ');
};

export const removeHTMLTags = (content: string) => {
	const strippedContent = sanitizeHtml(content, {
		allowedTags: [],
		allowedAttributes: {}
	});
	return removeNewLines(strippedContent);
};
