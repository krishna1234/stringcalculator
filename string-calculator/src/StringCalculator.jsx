export function add(numbers) {
    // handling if it is an empty string
    if (numbers === "") {
        console.log("Empty string");
        return 0;
    }

    // here is the delimeter pattern which is regex pattern to match either a comma or new line charcter
    const delimeter = /,|\n|;/;
    console.log(delimeter);

    // Split the numbers based on delimiters and convert to an array of numbers
    let numberList = numbers.split(delimeter).map(Number);
    console.log(numberList);

    // check for negative numbers
    const negativeNumber = numberList.filter((num) => num < 0);
    console.log(negativeNumber);

    if (negativeNumber.length > 0) {
        console.log("Error as negative numbers", negativeNumber);
        throw new Error(
            `negative numbers not allowed: ${negativeNumber.join(", ")}`
        );
    }

    // Calculate the sum
    const sum = numberList.reduce((sum, num) => sum + num, 0);
    console.log(sum);

    return sum;
}
