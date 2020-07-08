const LETTERS = ["F", "D", "C", "B", "A", "S"];
const SUBSYMBOL = ["-", "", "+"];

// Default to 'C' rank
export const STAT_DEFAULT_VALUE = 8;
export const MIN_STAT_VALUE = 0;
export const MAX_STAT_VALUE = (LETTERS.length * SUBSYMBOL.length * 2) + 2;

export class Stat {
    private _value: number;
    public name: string;

    constructor(name: string, value: number = STAT_DEFAULT_VALUE) {
        this.name = name;
        this.value = value;
    }

    public get value() {
        return this._value;
    }

    public set value(value : number) {
        // Clamp the value be between 0 and 38 (inclusively)
        this._value = Math.max(Math.min(value, MAX_STAT_VALUE), MIN_STAT_VALUE);
    }

    public toRank() {
        if(this.value == 38) {
            return "EX";
        }
        else if(this.value == 37) {
            return "EX-";
        }
        else if(this.value == 0) {
            return "--";
        }
        else {
            // If the rank exceeds F- to S+, aka. 18, then prepend "Ex:", otherwise leave empty
            let rank = (this.value > (LETTERS.length * SUBSYMBOL.length)) ? "Ex:" : "";

            // Append the corresponding letter depending on ((value - 1) / 3) (each letter has 3 subsymbols to account for) mod 7.
            rank += LETTERS[Math.floor((this.value - 1) / SUBSYMBOL.length) % LETTERS.length];
            
            // Append the corresponding subsymbol depending if the value is (0, 1, or 2) mod 3.
            rank += SUBSYMBOL[(this.value - 1) % SUBSYMBOL.length];

            return rank;
        }
    }
}
