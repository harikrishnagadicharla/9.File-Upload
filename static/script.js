document.getElementById("uploadForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    let formData = new FormData(this);
    let response = await fetch("/upload", {
        method: "POST",
        body: formData
    });

    let result = await response.json();
    document.getElementById("message").innerText = result.info || "Upload failed!";
});
