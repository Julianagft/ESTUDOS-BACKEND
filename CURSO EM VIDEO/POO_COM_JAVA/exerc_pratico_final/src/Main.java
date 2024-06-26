public class Main {
    public static void main(String[] args) {
        Video v[] = new Video[3];
        v[0] = new Video("Aula 1 de POO");
        v[1] = new Video("Aula 12 de PHP");
        v[2] = new Video("Aula 10 de HTML5");

        System.out.println(v[0].toString());

        Gafanhoto g[] = new Gafanhoto[3];

        g[0] = new Gafanhoto("Jubileu", 22, "M", "jubileu_das_gata");
        g[1] = new Gafanhoto("Jubilete", 23, "F", "juju_gatinha");
        g[2] = new Gafanhoto("Thor", 15, "F", "rei_do_trovão");

        System.out.println(g[0].toString());

    }
}