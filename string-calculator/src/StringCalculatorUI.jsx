import { useState } from "react";
import { add } from "./StringCalculator";
import styles from "./stringcalculator.module.css";

export default function StringCalculatorUI() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    function handleCalculate() {
        try {
            const sum = add(input);
            setResult(sum);
        } catch (error) {
            setResult(error.message);
        }
    }

    return (
        <div styles={styles.container}>
            <h1>String Calculator</h1>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Enter Numbers"
                className={styles.input}
            />
            <button onClick={handleCalculate} className={styles.button}>
                Calculate
            </button>
            <h3 className={styles.result}>{result}</h3>
        </div>
    );
}
