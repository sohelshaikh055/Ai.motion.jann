document.getElementById("generateBtn").onclick = () => {
    const file = document.getElementById("inputImage").files[0];

    if (!file) {
        alert("Please select an image first!");
        return;
    }

    let output = document.getElementById("output");
    output.innerHTML = "<p>Processing... Please wait 10 sec...</p>";

    setTimeout(() => {
        output.innerHTML = `
            <h3>Motion Generated ✔</h3>
            <video controls autoplay loop width="100%">
                <source src="https://cdn.pixabay.com/video/2019/08/01/26719-357001897_large.mp4" type="video/mp4">
            </video>
        `;
    }, 3000);
};
