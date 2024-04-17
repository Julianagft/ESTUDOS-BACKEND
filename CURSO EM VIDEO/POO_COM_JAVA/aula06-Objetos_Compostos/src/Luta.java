// REGRAS DA LUTA:
// 1. Só pode ser marcada entre lutadores da mesma categoria;
// 2. Desafiado e desafiante devem ser lutadores diferentes;
// 3. Só pode ter como resultado a vitória de um pos lutadores ou empate;

import java.util.Random;

public class Luta {
    private Lutador desafiado;
    private Lutador desafiante;
    private int rounds;
    private boolean aprovada;

   public void marcarLuta(Lutador l1, Lutador l2) {
        if (l1.getCategoria().equals(l2.getCategoria()) && l1 != l2) {
                this.aprovada = true;
                this.desafiado = l1;
                this.desafiante = l2;
        } else {
            this.aprovada = false;
            this.desafiado = null;
            this.desafiante = null;
        }
   }

   public void lutar() {
       if (this.aprovada) {
           System.out.println("________ QUE COMECE O COMBATE NA CATEGORIA " + this.desafiado.getCategoria() + " ________");
           System.out.println(" ");
           System.out.println("### DESAFIADO ###");
           this.desafiado.apresentar();
           System.out.println(" ");
           System.out.println("### DESAFIANTE ###");
           this.desafiante.apresentar();

           Random aleatorio = new Random();
           int vencedor = aleatorio.nextInt(3); // Ele irá gerar três possíveis resultado (0, 1 ou 2);
           System.out.println("------------------------------------------");
           switch(vencedor) {
               case 0: // Empate;
                   System.out.println("Empatou!");
                   this.desafiado.empatarLuta();
                   this.desafiante.empatarLuta();
               case 1: // Desafiado vence;
                   System.out.println("Vitória de " + this.desafiado.getNome());
                   this.desafiado.ganharLuta();
                   this.desafiante.perderLuta();
               case 2: //Desafiante vence;
                   System.out.println("Vitória de " + this.desafiante.getNome());
                   this.desafiante.ganharLuta();
                   this.desafiado.perderLuta();
           }
       } else {
           System.out.println("A luta não foi aprovada.");
       }
   }


   // GETTERS AND SETTERS

    public Lutador getDesafiado() {
        return desafiado;
    }

    public void setDesafiado(Lutador desafiado) {
        this.desafiado = desafiado;
    }

    public Lutador getDesafiante() {
        return desafiante;
    }

    public void setDesafiante(Lutador desafiante) {
        this.desafiante = desafiante;
    }

    public int getRounds() {
        return rounds;
    }

    public void setRounds(int rounds) {
        this.rounds = rounds;
    }

    public boolean getAprovada() {
        return aprovada;
    }

    public void setAprovada(boolean aprovada) {
        this.aprovada = aprovada;
    }
}
