// Métodos Especiais
public class Aula03 {
    public static void main(String[] args) {
        //USANDO O MÉTODO CONSTRUTOR:
        Caneta c1 = new Caneta("CIS", "Rosa", 0.4f);
        c1.status();
        // Uso menos linhas de código;

        Caneta c2 = new Caneta("BIC", "Vermelha", 0.5f);
        c2.status();
        // Posso criar quantas canetas eu precisar;


        // c1.setModelo("BIC");
       //  c1.modelo = "BIC";
        // Na primeira linha eu usei o método acessor, na segunda eu usei o atributo. Ambos publicos;

        // c1.setPonta(0.5f); //se for 'float' tem sempre que colocar o f;
        // c1.ponta = 0.5f;
        // Aqui fiz a mesma coisa porém o método é público mas o atributo é privado. Chamando diretamente o atributo irá ocasionar um erro.

        // Mas se eu chamar usando o método de acesso funcionará;

        // System.out.println("Tenho uma caneta " + c1.getModelo() + " de ponta " + c1.getPonta());

    }
}

// Esses métodos protegem o acesso ao atributo, para que eles não sejam expostos livremente;