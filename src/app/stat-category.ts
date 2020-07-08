import { Stat } from "./stat";

export class StatCategory {
    constructor(
        public name: string,
        public stats: Stat[]
    ) {}
}
