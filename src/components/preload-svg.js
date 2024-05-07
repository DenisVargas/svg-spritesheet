import { SVG } from '@svgdotjs/svg.js';
import { InsertionTracker } from './insertionTracker.js';

class preloadSVG extends HTMLElement {
    // static observedAttributes = ['src'];

    constructor() {
        super();
        window.SVG = SVG;
    }

    connectedCallback() {
        this.srcPath = this.getAttribute('src');

        if (!this.srcPath) {
            //imprimir un warning
            console.warn('No se ha especificado el path del svg');
            return;
        }

        // console.log(`preload-svg funciona!, src: ${this.srcPath}`);

        document.addEventListener('DOMContentLoaded', () => {
            fetch(this.srcPath, { mode: 'no-cors' })
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Network response was not ok.');
            })
            .then(svgContent => {;
                const svgElement = SVG().addTo('body'); // Reemplaza '#contenedor' con el selector de tu contenedor SVG
                svgElement.id('svg-spritesheet');
                const svgDocument = new DOMParser().parseFromString(svgContent, 'image/svg+xml');
                const symbols = svgDocument.querySelectorAll('symbol');
                const svg = document.getElementById('svg-spritesheet');
                symbols.forEach(symbol => {
                    svg.appendChild(symbol);
                });

                document.insertionTracker = new InsertionTracker(document.querySelectorAll('insert-svg').length);
                document.dispatchEvent(new CustomEvent('svg-loaded', { detail: { spritesheet: svgElement.node }}));
                this.remove();
            })
            .catch(error => {
                console.error('Error al cargar el archivo SVG:', error);
            });
        });
    }
}

export { preloadSVG };