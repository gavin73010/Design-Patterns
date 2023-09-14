export class Chocolate {
    private empty: boolean;
    private boiled: boolean;

    public constructor() {
        this.empty = true;
        this.boiled = false;
    }

    public fill(): void {
        if (this.isEmpty()) {
            this.empty = false;
            this.boiled = false;
        }
    }

    public boil(): void {
        if (!this.isEmpty() && !this.isBoiled()) {
            this.boiled = true;
        }
    }

    public drain(): void {
        if (this.isBoiled() && !this.isEmpty()) {
            this.empty = true;
        }
    }

    public isEmpty(): boolean {
        return this.empty;
    }

    public isBoiled(): boolean {
        return this.boiled;
    }
}

export class ChocolateSingleton {
    private empty: boolean;
    private boiled: boolean;

    private static instance: ChocolateSingleton;

    private constructor() {
        this.empty = true;
        this.boiled = false;
    }

    public static getInstance(): ChocolateSingleton {
        if (this.instance == null) {
            this.instance = new ChocolateSingleton();
        }

        return this.instance;
    }

    public fill(): void {
        if (this.isEmpty()) {
            this.empty = false;
            this.boiled = false;
        }
    }

    public boil(): void {
        if (!this.isEmpty() && !this.isBoiled()) {
            this.boiled = true;
        }
    }

    public drain(): void {
        if (this.isBoiled() && !this.isEmpty()) {
            this.empty = true;
        }
    }

    public isEmpty(): boolean {
        return this.empty;
    }

    public isBoiled(): boolean {
        return this.boiled;
    }
}