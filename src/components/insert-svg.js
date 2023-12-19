import { SVG } from '@svgdotjs/svg.js';

// Exporta y crea el custom element insert-svg como una clase
class insertSVG extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        //Esta clase deberia tener una propiedad "data" que deberia referenciar a un id de un symbol.
        let symbol = this.getAttribute('symbol');
        if (!symbol) {
            console.warn('No se ha especificado el id del symbol');
            return;
        }
        let id = this.getAttribute('id');
        if (!id) {
            console.warn('No se ha especificado el id del elemento');
            return;
        }

        let width = this.getAttribute('width');
        let height = this.getAttribute('height');

        // console.log(`insert-svg funciona!, data: ${symbol}, id: ${this.id}`);

        document.addEventListener('svg-loaded', (event) => {
            // console.log("funciona");
            const spritesheet = event.detail.spritesheet;
            console.log(spritesheet);
            const symbolElement = spritesheet.querySelector(`#${symbol}`);

            const svg = SVG().id(this.id);
            if (width) {
                svg.width(width);
            }
            if (height) {
                svg.height(height);
            }
            svg.node.innerHTML = symbolElement.innerHTML;
            svg.node.setAttribute('viewBox', symbolElement.getAttribute('viewBox'));
            // svg.use(symbol);

            document.insertionTracker.removeInsertion();
            this.replaceWith(svg.node);
        });
    }
}

export { insertSVG };
