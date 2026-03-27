document.addEventListener('DOMContentLoaded', () => {
    const perfis = document.querySelectorAll('.perfil');

    perfis.forEach(perfil => {
        perfil.addEventListener('click', (event) => {
            // Obter o nome do perfil
            const nomeElement = perfil.querySelector('.nome-perfil');
            const nome = nomeElement ? nomeElement.textContent : '';

            // Obter a imagem do perfil
            const imgElement = perfil.querySelector('img');
            const imagem = imgElement ? imgElement.src : '';

            // Armazenar no localStorage
            localStorage.setItem('perfilAtivoNome', nome);
            localStorage.setItem('perfilAtivoImagem', imagem);

            // Permitir a navegação para o catálogo
        });
    });
});