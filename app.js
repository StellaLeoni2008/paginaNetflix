const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há um tema salvo no localStorage, se não tem usa 'dark-mode' como padrão
const currentTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(currentTheme);

// Adiciona evento de clique ao botão
const toggleButton = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

toggleButton.addEventListener("click", function () {
  const isDarkMode = document.body.classList.contains("dark-mode");
  
  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    icon.textContent = "🌙";
    localStorage.setItem('theme', 'light-mode');
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
    localStorage.setItem('theme', 'dark-mode');
  }
});
