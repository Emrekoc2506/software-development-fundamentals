using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace else_if
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Komut çalışırken ilk önce (İF) e bakar daha sonra (İF ELSE) ye bakar en son (ELSE) ye bakar

            Console.WriteLine(" Lütfen 1. notunuzu giriniz ");
            int birinci_not = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine(" Lütfen 2. notunuuz giriniz");
            int ikinci_not = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Lütfen 3. notunuzu giriniz");
            int ucuncu_not = Convert.ToInt32(Console.ReadLine());

            int sonuc = (birinci_not + ikinci_not + ucuncu_not) / 3;

            if (sonuc > 80 && sonuc < 100) // İf Efse gibi kodlarda (;) kullanılmaz
            {
                Console.WriteLine("Not Değeriniz : A+ ");
            }

            else if (sonuc > 60 && sonuc < 80)
            {
                Console.WriteLine("Not Değeriniz : A");
            }

            else if (sonuc > 40 && sonuc < 60)
            {
                Console.WriteLine("Not Değeriniz : B+ ");
            }

            else
            {
                Console.WriteLine("Not Değerini f dir");
            }
            Console.ReadLine();

        }
    }
}
