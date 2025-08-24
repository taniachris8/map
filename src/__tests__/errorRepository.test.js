import ErrorRepository from "../ErrorRepository";

const errorRepository = new ErrorRepository();

test("Should return an error related to a specific code", () => {
    expect(errorRepository.translate(212)).toEqual(
        "SyntaxError: Invalid or unexpected token"
    );
    expect(errorRepository.translate(213)).toEqual(
        "SyntaxError: missing ) after condition"
    );
    expect(errorRepository.translate(214)).toEqual(
        "SyntaxError: unterminated string literal"
    );
    expect(errorRepository.translate(215)).toEqual(
        "SyntaxError: Unexpected token '{'"
    );
});

test("Should return 'Unknown error' if error code doesn't exist", () => { 
    expect(errorRepository.translate(300)).toEqual("Unknown error");
});