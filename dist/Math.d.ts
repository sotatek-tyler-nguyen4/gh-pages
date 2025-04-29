/**
 * Class provide basic math operations
 */
export declare class MathLib {
    /**
     * Add two numbers
     * @param a - First number
     * @param b - Second number
     * @returns Sum of two numbers
     *
     * @example
     * ```typescript
     * const math = new Math();
     * const sum = math.add(5, 3); // Result: 8
     * ```
     */
    add(a: number, b: number): number;
    /**
     * Subtract two numbers
     * @param a - First number
     * @param b - Second number
     * @returns Difference of two numbers
     *
     * @example
     * ```typescript
     * const math = new Math();
     * const difference = math.subtract(5, 3); // Result: 2
     * ```
     */
    subtract(a: number, b: number): number;
    /**
     * Multiply two numbers
     * @param a - First factor
     * @param b - Second factor
     * @returns Product of two numbers
     *
     * @example
     * ```typescript
     * const math = new Math();
     * const product = math.multiply(5, 3); // Result: 15
     * ```
     */
    multiply(a: number, b: number): number;
    /**
     * Divide two numbers
     * @param a - Dividend
     * @param b - Divisor
     * @returns Quotient of two numbers
     * @throws {Error} If divisor is 0
     *
     * @example
     * ```typescript
     * const math = new Math();
     * const quotient = math.divide(6, 3); // Result: 2
     * ```
     */
    divide(a: number, b: number): number;
    /**
     * Calculate power
     * @param base - Base
     * @param exponent - Exponent
     * @returns Result of power
     *
     * @example
     * ```typescript
     * const math = new Math();
     * const power = math.power(2, 3); // Result: 8
     * ```
     */
    power(base: number, exponent: number): number;
    /**
     * Calculate square root
     * @param value - Value to calculate square root
     * @returns Square root of value
     * @throws {Error} If value is negative
     *
     * @example
     * ```typescript
     * const math = new Math();
     * const sqrt = math.squareRoot(16); // Result: 4
     * ```
     */
    squareRoot(value: number): number;
    /**
     * Calculate absolute value
     * @param value - Value to calculate absolute value
     * @returns Absolute value of value
     *
     * @example
     * ```typescript
     * const math = new Math();
     * const abs = math.absolute(-5); // Result: 5
     * ```
     */
    absolute(value: number): number;
}
//# sourceMappingURL=Math.d.ts.map