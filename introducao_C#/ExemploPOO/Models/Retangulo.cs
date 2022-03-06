namespace ExemploPOO.Models
{
    public class Retangulo
    {
        private double comprimento;
        private double largura;
        private bool valido;

        public void DefinirMedidas(double comprimento, double largura)
        {
            if (comprimento > 0 && largura > 0)
            {
            this.comprimento = comprimento;
            this.largura = largura;
            valido = true;
            }
            else
            {
                System.Console.WriteLine("Valores inválidos");;
                
            }
            
        }

        public override bool Equals(object obj)
        {
            return obj is Retangulo retangulo &&
                   valido == retangulo.valido;
        }

        public double ObterArea()
        {
            if(valido)
            {
                return comprimento * largura;
            }
            else
            {
                System.Console.WriteLine("Preecha valores validos");
                return 0;
            }
            
        }

        public override int GetHashCode()
        {
            throw new System.NotImplementedException();
        }
    }
}