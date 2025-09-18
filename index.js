// Update foto profil dari URL
document.getElementById("profileUrl").addEventListener("change", function() {
  const url = this.value.trim();
  if (url) {
    document.getElementById("profilePic").src = url;
  }
});

// Update background dari URL
document.getElementById("bgUrl").addEventListener("change", function() {
  const url = this.value.trim();
  if (url) {
    document.body.style.background = `url('${url}') no-repeat center center/cover`;
  }
});

function generateImage() {
  const text = document.getElementById("textInput").value.trim();
  const resultBox = document.getElementById("resultBox");
  const resultImg = document.getElementById("resultImg");

  if (!text) {
    alert("Isi teks dulu!");
    return;
  }

  const encodedText = encodeURIComponent(text);
  const apiUrl = `https://api.sxtream.xyz/maker/iqc?text=${encodedText}`;

  resultImg.src = apiUrl;
  resultBox.style.display = "block";
}

function downloadImage() {
  const img = document.getElementById("resultImg");
  const link = document.createElement("a");
  link.href = img.src;
  link.download = "iphone-quote.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
