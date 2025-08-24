export default class ErrorRepository { 
    constructor(){ 
        this.repository = new Map([
            [212, "SyntaxError: Invalid or unexpected token"],
            [213, "SyntaxError: missing ) after condition"],
            [214, "SyntaxError: unterminated string literal"],
            [215, "SyntaxError: Unexpected token '{'"],
        ]);
    }

    translate(code) {
        return this.repository.has(code) ? this.repository.get(code) : "Unknown error";
    }
}