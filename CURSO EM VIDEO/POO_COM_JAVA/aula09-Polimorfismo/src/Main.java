public class Main {
    public static void main(String[] args) {
        Mamifero m = new Mamifero();
        Reptil r = new Reptil();
        Peixe p = new Peixe();
        Ave a = new Ave();

        Canguru c = new Canguru();
        Cachorro dog = new Cachorro();

        m.locomover();
        System.out.println();
        c.locomover(); //por mais que c seja um mamifero ele consegue sobreescrever o metodo;
        System.out.println();
        m.emitirSom();
        System.out.println();
        dog.emitirSom(); // Vai emitir um som especifico;


    }
}