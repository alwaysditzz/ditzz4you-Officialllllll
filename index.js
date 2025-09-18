function generateImage() {
  const text = document.getElementById("textInput").value.trim();

  if (!text) {
    alert("Tolong isi teks dulu!");
    return;
  }

  // Encode teks supaya aman di URL
  const encodedText = encodeURIComponent(text);

  // API endpoint
  const apiUrl = `https://api.sxtream.xyz/maker/iqc?text=${encodedText}`;

  // Tampilkan hasil ke <img>
  const resultImg = document.getElementById("resultImg");
  resultImg.src = apiUrl;
}
