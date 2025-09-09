const mensagens = [
  "Você é mais forte do que imagina (☞ﾟヮﾟ)☞❤🤢",
  "Nunca se esqueça: sua vida importa (¬‿¬)",
  "Você não está sozinho, estamos juntos (*/ω＼*)",
  "Acredite: dias melhores virão ༼ つ ◕_◕ ༽つ",
  "Sempre existe esperança 💖"
];

document.getElementById("btnMensagem").addEventListener("click", () => {
  const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("mensagem").innerText = aleatoria;
});
