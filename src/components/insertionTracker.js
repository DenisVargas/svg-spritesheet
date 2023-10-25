class InsertionTracker {
    constructor(elementsToInsert = 0) {
        this.insertedSVGElements = elementsToInsert;
    }

    removeInsertion() {
        this.insertedSVGElements--;
        if(this.insertedSVGElements == 0) {
            document.dispatchEvent(new CustomEvent('svg-inserted'));
        }
    }
}

export { InsertionTracker };
