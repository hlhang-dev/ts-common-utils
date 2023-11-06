class NumberUUIDGenerator {
    private static instance: NumberUUIDGenerator;
    private digits: string;

    private constructor() {
        this.digits = '0123456789';
    }

    public static getInstance(): NumberUUIDGenerator {
        if (!NumberUUIDGenerator.instance) {
            NumberUUIDGenerator.instance = new NumberUUIDGenerator();
        }
        return NumberUUIDGenerator.instance;
    }

    private generateRandomNumber(length: number): string {
        let result = '';

        for (let i = 0; i < length; i++) {
            result += this.digits.charAt(Math.floor(Math.random() * this.digits.length));
        }

        return result;
    }

    private shuffleString(str: string): string {
        let array = str.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }

    public generateCustomUUID(length: number): string {
        const timestamp = Date.now().toString();
        const randomNumber = this.generateRandomNumber(length - timestamp.length);
        const mixedString = this.shuffleString(timestamp + randomNumber);
        return mixedString;
    }
}

export {
    NumberUUIDGenerator
}
