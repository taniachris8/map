export default class ErrorRepository { 
    constructor(){ 
        this.repository = new Map();
        this.repository.set(212, "SyntaxError: Invalid or unexpected token");
        this.repository.set(213, "SyntaxError: missing ) after condition");
        this.repository.set(214, "SyntaxError: unterminated string literal");
        this.repository.set(215, "SyntaxError: Unexpected token '{'");
    }

    translate(code) {
        return this.repository.has(code) ? this.repository.get(code) : "Unknown error";
    }
}