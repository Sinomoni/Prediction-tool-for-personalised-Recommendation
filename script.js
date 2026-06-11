document.getElementById("marksForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get marks from form
    const maths = parseFloat(document.getElementById("maths").value);
    const physics = parseFloat(document.getElementById("physics").value);
    const biology = parseFloat(document.getElementById("biology").value);
    const geography = parseFloat(document.getElementById("geography").value);
    const english = parseFloat(document.getElementById("english").value);

    // Display the input values
    displayInputValues(maths, physics, biology, geography, english);
});

function displayInputValues(maths, physics, biology, geography, english) {
    const inputValuesDiv = document.getElementById("inputValues");
    inputValuesDiv.innerHTML = `
        <p>Mathematics: ${maths}</p>
        <p>Physical Sciences: ${physics}</p>
        <p>Life Sciences: ${biology}</p>
        <p>Geography: ${geography}</p>
        <p>English: ${english}</p>
    `;
}
