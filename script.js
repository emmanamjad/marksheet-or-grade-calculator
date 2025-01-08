function generateresult() {
    // Get value from input fields
    let name = document.getElementById("name").value;
    let val1 = Number(document.getElementById("sub1").value);
    let val2 = Number(document.getElementById("sub2").value);
    let val3 = Number(document.getElementById("sub3").value);

    // Check if any field is empty or marks are not valid numbers
    if (name === "" || isNaN(val1) || isNaN(val2) || isNaN(val3)) {
        alert("Please fill all fields correctly!");
        return;
    }

    // Calculate total and percentage
    let total = val1 + val2 + val3;
    let totalmarks = 300;  // Total marks for 3 subjects
    let percentage = (total / totalmarks) * 100;

    // Determine grade and status
    let grade;
    let status;

    if (percentage >= 90) {
        grade = "A*";
        status = "Pass";
    } else if (percentage >= 80) {
        grade = "A";
        status = "Pass";
    } else if (percentage >= 70) {
        grade = "B";
        status = "Pass";
    } else if (percentage >= 60) {
        grade = "C";
        status = "Pass";
    } else if (percentage >= 50) {
        grade = "D";
        status = "Pass";
    } else if (percentage >= 40) {
        grade = "-";
        status = "Fail";
    } else {
        grade = "-";
        status = "Fail";
    }

    // Display the result
    let result = document.getElementById('result');
    result.innerHTML = `
        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>Total Marks:</strong> ${total} / ${totalmarks}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;
    result.style.display = 'block';  // Make result visible
}
