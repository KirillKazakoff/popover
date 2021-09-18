const popoverMessage = (msg) => ({
    block: 'div',
    cls: 'popover__message',
    content: `${msg}`,
})

const popoverTitle = (title) => ({
    block: 'div',
    cls: 'popover__title',
    content: `${title}`,
})

const popover = (title, msg) => ({
    block: 'div',
    cls: 'popover',
    content: [popoverTitle(title), popoverMessage(msg)],
})

export default popover;