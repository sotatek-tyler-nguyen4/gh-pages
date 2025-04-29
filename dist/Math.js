"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathLib = void 0;
/**
 * Class provide basic math operations
 */
class MathLib {
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
    add(a, b) {
        return a + b;
    }
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
    subtract(a, b) {
        return a - b;
    }
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
    multiply(a, b) {
        return a * b;
    }
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
    divide(a, b) {
        if (b === 0) {
            throw new Error("Không thể chia cho 0");
        }
        return a / b;
    }
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
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
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
    squareRoot(value) {
        if (value < 0) {
            throw new Error("Không thể tính căn bậc hai của số âm");
        }
        return Math.sqrt(value);
    }
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
    absolute(value) {
        return Math.abs(value);
    }
}
exports.MathLib = MathLib;
//# sourceMappingURL=Math.js.map