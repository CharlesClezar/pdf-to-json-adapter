class LegacyRectangle {
    draw(x1: number, y1: number, x2: number, y2: number) {
        console.log(`Desenhando um retângulo de (${x1}, ${y1}) até (${x2}, ${y2})`);
    }
}

class ClientRectangle {
    constructor(private width: number, private height: number) {}

    displayRectangle() {
        console.log(`Desenhando um retângulo de largura ${this.width} e altura ${this.height}`);
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }
}

class RectangleAdapter extends ClientRectangle {
    private legacyRectangle: LegacyRectangle;

    constructor(width: number, height: number) {
        super(width, height);
        this.legacyRectangle = new LegacyRectangle();
    }

    displayRectangle() {
        const x1 = 0, y1 = 0;
        const x2 = this.getWidth(), y2 = this.getHeight();

        this.legacyRectangle.draw(x1, y1, x2, y2);
    }
}

const modernRectangle = new RectangleAdapter(30, 50);
modernRectangle.displayRectangle();