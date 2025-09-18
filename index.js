const textInput = document.getElementById("textInput");
const charCounter = document.getElementById("charCounter");
const resultBox = document.getElementById("resultBox");
const resultImg = document.getElementById("resultImg");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const maxLength = 180;

// Auto expand + counter
textInput.addEventListener("input", function() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
  charCounter.textContent = `${this.value.length} / ${maxLength}`;
});

// Generate gambar
generateBtn.addEventListener("click", function() {
  const text = textInput.value.trim();

  if (!text) {
    alert("Isi teks dulu!");
    return;
  }

  let finalText = text;
  if (text.length > maxLength) {
    alert("Teks terlalu panjang, hanya " + maxLength + " karakter pertama yang dipakai!");
    finalText = text.substring(0, maxLength);
  }

  const encodedText = encodeURIComponent(finalText).replace(/%0A/g, "%0A");
  const apiUrl = `https://api.sxtream.xyz/maker/iqc?text=${encodedText}`;

  resultImg.src = apiUrl;
  resultBox.style.display = "block";
});

// Download gambar
downloadBtn.addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = resultImg.src;
  link.download = "quote.png";
  link.click();
});
