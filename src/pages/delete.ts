function convertBase(
    value: string,
    fromBase: number,
    toBase: number,
    precision: number,
    signed: boolean
): string {
    // Parse value
    let num = parseInt(value, fromBase);
    if (isNaN(num)) {
        throw new Error(`Invalid number '${value}' for base ${fromBase}`);
    }

    // Handle signed interpretation (two's complement input)
    if (signed) {
        const maxUnsigned = Math.pow(2, precision - 1) * 2 - 1;
        if (num > maxUnsigned) {
            throw new Error(`Value '${value}' cannot be represented with ${precision} digits in base ${toBase}`);
        }
        if (num >= Math.pow(2, precision - 1)) {
            num -= Math.pow(2, precision);
        }
    }

    // Convert to target base
    const absNum = Math.abs(num);
    let converted = absNum.toString(toBase).toUpperCase();

    // Check if output fits in specified digits
    if (converted.length > (signed ? precision - 1 : precision)) {
        throw new Error(`Converted value exceeds ${precision} digits`);
    }

    // Pad output to match precision
    converted = converted.padStart(precision - (signed ? 1 : 0), (num < 0 ? "1" : "0"));

    // Add sign bit for signed output
    if (signed && toBase === 2) {
        const signBit = num < 0 ? "1" : "0";
        return `${signBit},${converted}`;
    }
    if (signed && toBase === 10) {
        const sign = num < 0 ? "-" : "";
        return `${sign}${converted}`;
    }
    return converted;
}

console.log(
    convertBase("-110", 10, 2, 11, true)
);