import Popover from '../components/popover/popover';
const message = 'holla bruh holla bruh holla bruh holla bruh holla bruh';

export default class Controller {
    constructor() {
        const button = document.querySelector('.popover__button');
        this.popover = new Popover('Bruh Greetings', message, button);

        button.addEventListener('click', () => {
            this.popover.togglePopover(button);
        })
    }
}
