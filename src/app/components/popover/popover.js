import './popover.css';
import engine from '../../lib/engine/engine';
import popover from './popover.tmp';

export default class Popover {
    constructor(title, msg) {
        const html = engine(popover(title, msg));
        document.body.insertAdjacentHTML('beforeend', html);
        this.node = document.body.querySelector('.popover');
    }

    togglePopover(target) {
        this.node.classList.toggle('popover__active');
        const nodeCoords = this.node.getBoundingClientRect();

        const targetCoords = target.getBoundingClientRect();
        const nodeWidth = targetCoords.left + (targetCoords.width - nodeCoords.width) / 2;
        
        this.node.style.left = `${nodeWidth}px`;
        this.node.style.top = `${targetCoords.top - nodeCoords.height - 10}px`;
    }
}