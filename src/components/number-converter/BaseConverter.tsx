import { useMemo, useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
    Chip,
} from "@mui/material";

interface Step {
    dividend: number;
    divisor: number;
    quotient: number;
    remainder: number;
}

interface ParseResult {
    ok: boolean;
    n: number;
    reason?: string;
}

function buildSteps(n: number, base: number): Step[] {
    const steps: Step[] = [];
    if (!Number.isFinite(n)) return steps;
    if (n === 0) {
        steps.push({dividend: 0, divisor: base, quotient: 0, remainder: 0});
        return steps;
    }
    let current = Math.floor(Math.abs(n));
    while (current > 0) {
        const quotient = Math.floor(current / base);
        const remainder = current % base;
        steps.push({dividend: current, divisor: base, quotient, remainder});
        current = quotient;
    }
    return steps;
}

function digitsToString(digits: number[]): string {
    const alphabet = "0123456789ABCDEFG";
    return digits.map((d) => alphabet[d]).join("");
}

export default function BaseConverter() {
    const [rawInput, setRawInput] = useState<string>();
    const [targetBase, setTargetBase] = useState<number>(2);

    const parsed: ParseResult = useMemo(() => {
        const trimmed = (rawInput ?? "").trim();
        if (!trimmed) return {ok: true, n: 0, reason: "Enter a number"};

        // Accept only decimal whole numbers for now (no commas, no spaces).
        if (!/^[0-9]+$/.test(trimmed)) {
            return {ok: false, n: 0, reason: "Only whole numbers (0-9)"};
        }

        const n = Number(trimmed);
        if (!Number.isSafeInteger(n)) {
            return {ok: false, n: 0, reason: "Out of safe integer range"};
        }
        return {ok: true, n: n};
    }, [rawInput]);
    // --------------------------------------

    const steps: Step[] = useMemo(() => {
        if (!parsed.ok) return [];
        return buildSteps(Math.abs(parsed.n), targetBase);
    }, [parsed, targetBase]);

    const result: string | null = useMemo(() => {
        if (!parsed.ok) return null;
        const digitsLSBFirst = steps.map((s) => s.remainder);
        const digitsMSBFirst = digitsLSBFirst.slice().reverse();
        const txt = digitsToString(digitsMSBFirst);
        return txt || "0";
    }, [parsed, steps]);

    const showError = !parsed.ok;

    return (
        <Box sx={{p: {xs: 2, sm: 4}, mx: "auto"}}>
            <Typography variant="h4" gutterBottom mt={2}>
                Base 10 Converter
            </Typography>

            <Card elevation={3} sx={{borderRadius: 4}}>
                <CardContent>
                    <Stack direction={{xs: "column", sm: "row"}} spacing={5} alignItems={"center"}>
                        <TextField
                            label="Number to convert"
                            variant="standard"
                            value={rawInput}
                            onChange={(e) => setRawInput(e.target.value)}
                            error={showError}
                            helperText={showError ? parsed.reason : "Whole numbers only"}
                            sx={{minWidth: 200, '& .MuiInputBase-input': {textAlign: {xs: 'center', sm: 'left'}}}}
                        />

                        <FormControl sx={{minWidth: 200}}>
                            <InputLabel id="base-label">Target base</InputLabel>
                            <Select
                                labelId="base-label"
                                value={targetBase}
                                label="Target base"
                                onChange={(e) => setTargetBase(Number(e.target.value))}
                            >
                                <MenuItem value={2}>2 (Binary)</MenuItem>
                                <MenuItem value={8}>8 (Octal)</MenuItem>
                                <MenuItem value={16}>16 (Hexadecimal)</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>

                    <Divider sx={{my: 2}} />

                    <Typography variant="h6" gutterBottom>
                        Steps
                    </Typography>

                    <Table size="small" aria-label="division steps">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Dividend ÷ Base</TableCell>
                                <TableCell align="right">Quotient</TableCell>
                                <TableCell align="right">Remainder</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {steps.map((s, idx) => (
                                <TableRow key={idx}>
                                    <TableCell align="left">
                                        {s.dividend} ÷ {s.divisor}
                                    </TableCell>
                                    <TableCell align="right">{s.quotient}</TableCell>
                                    <TableCell align="right">{digitsToString([s.remainder])}</TableCell>
                                </TableRow>
                            ))}
                            {steps.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        <Typography variant="body2" color="text.secondary">
                                            {showError
                                                ? "Cannot compute until input is a valid whole number."
                                                : "No steps yet — enter a number above."}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                    <Divider sx={{my: 2}} />

                    <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                        <Typography variant="h6">Result:</Typography>
                        <Typography variant="h6">
                            {parsed.ok ? (
                                <>
                                    ({Math.abs(parsed.n)})
                                    <Typography component="sub" sx={{fontWeight: "bold"}}>
                                        10
                                    </Typography> = ({result})
                                    <Typography component="sub" sx={{fontWeight: "bold"}}>({targetBase})</Typography>
                                </>
                            ) : (
                                "—"
                            )}
                        </Typography>
                    </Stack>

                    {steps.length > 0 && (
                        <Box sx={{mt: 1, textAlign: "center"}}>
                            <Typography variant="body2" color="text.secondary" gutterBottom mt={2}>
                                Remainders (LSB→MSB), reverse to get final digits:
                            </Typography>

                            {/* LSB Chips Row */}
                            <Stack direction="row" spacing={1} justifyContent="center" mb={1} mt={1} flexWrap="wrap">
                                {steps.map((s, i) => (
                                    <Chip key={i} label={digitsToString([s.remainder])} />
                                ))}
                            </Stack>
                            {/* Reverse Label */}
                            <Typography variant="body2" sx={{my: 1}}>
                                → reverse ←
                            </Typography>

                            {/* MSB Chips Row */}
                            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
                                {steps
                                    .map((s) => s.remainder)
                                    .slice()
                                    .reverse()
                                    .map((d, i) => (
                                        <Chip
                                            key={`rev-${i}`}
                                            label={digitsToString([d])}
                                            variant="outlined"
                                        />
                                    ))}
                            </Stack>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}
