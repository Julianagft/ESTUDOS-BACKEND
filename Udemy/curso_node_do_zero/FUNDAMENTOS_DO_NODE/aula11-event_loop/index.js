// EVENT LOOP: É um recurso da arquitetura do node;

// O Node.js executa uma linha por vez, e de cima para baixo do código escrito;
// Isso nos ajuda a evitar problemas de concorrência, garantindo a execução do código;
// Precisamos apenas cuidar com bloqueios no fluxo, como loops infinitos;

function a() {
    console.log(`Executando a()`);
}
;
function b() {
    console.log(`Executando b()`);
};

function c() {
    console.log(`Executando c()`);
    a()
    b()
};

c(); // Primeiro vai executar c, para em seguinda executar a e depois b como manda a função.


// Basicamente garante que a execução do código seja SEQUENCIAL;