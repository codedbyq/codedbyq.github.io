export const OPTIONS = {
    'avacado': '../assets/ingredients/avacado.PNG',
    'beans': '../assets/ingredients/beans.png',
    'cheese': '../assets/ingredients/cheese.png',
    'ham': '../assets/ingredients/ham.png',
    'onion': '../assets/ingredients/onion.png',
    'pepper': '../assets/ingredients/pepper.png',
    'steak': '../assets/ingredients/steak.png',
    'tomato': '../assets/ingredients/tomato.png',
};

export const CUSTOMERS = {
    1: '../assets/characters/blue-spritesheet.png',
    2: '../assets/characters/purple-spritesheet.png',
    3: '../assets/characters/white-spritesheet.png',
    4: '../assets/characters/yellow-spritesheet.png'
}

export class Order {
    constructor(orderSize, duration) {
        this.orderSize = orderSize;
        this.duration = duration;
        this.order = [];

        this.generateCustomer();
        this.generateSpeechBubble();
        this.generateOrder();
        this.renderOrder();
    }

    generateOrder() {
        const options = Object.keys(OPTIONS);
        const numOptions = options.length;

        for (i = 1; i <= this.numItems; i++) {
            const idx = Math.floor(Math.random() * 5)
        }
    }
}