/**
 * Class provide basic math operations
 */
export class MathLib {
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
  public add(a: number, b: number): number {
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
  public subtract(a: number, b: number): number {
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
  public multiply(a: number, b: number): number {
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
  public divide(a: number, b: number): number {
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
  public power(base: number, exponent: number): number {
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
  public squareRoot(value: number): number {
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
  public absolute(value: number): number {
    return Math.abs(value);
  }
}
