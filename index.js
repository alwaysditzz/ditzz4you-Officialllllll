function generateImage() {
  const text = document.getElementById("textInput").value.trim();
  const resultBox = document.getElementById("resultBox");
  const resultImg = document.getElementById("resultImg");

  if (!text) {
    alert("Isi teks dulu!");
    return;
  }

  // encode dengan ganti newline \n jadi %0A
  const encodedText = encodeURIComponent(text).replace(/%0A/g, "%0A");
  const apiUrl = `https://api.sxtream.xyz/maker/iqc?text=${encodedText}`;

  resultImg.src = apiUrl;
  resultBox.style.display = "block";
}
