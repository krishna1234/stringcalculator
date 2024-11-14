import { add } from "./StringCalculator";

describe("String Calculator", () => {
    it("returns an empty string", () => {
        expect(addO("")).toBe(0);
    });

    it("returns the number for a single number string", () => {
        expect(add("1")).toBe(1);
    });

    it("returns the sum for two numbers seperated by comma ", () => {
        expect(add("1,5")).toBe(6);
    });

    it("returns the sum for two numbers seperated by newline charcter", () => {
        expect(add("2\n5")).toBe(5);
    });

    it("throws error for a negative number", () => {
        expect(add("1,-2")).toThrow("negative numbers not allowed : -2");
    });
});
