using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bool
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool kontrol1 = true;

            bool kontrol2 = false;

            bool Sonuc = 10 > 5;
            bool sonuc2 = 10 > 18;

            bool ornek = (0 == 1);  // Bu false değerini verir çünkü 0 eşit değil 1'e


            Console.WriteLine(kontrol1);
            Console.WriteLine(kontrol2);
            Console.WriteLine(Sonuc);
            Console.WriteLine(sonuc2);
            Console.WriteLine(ornek);
            Console.ReadLine();

        }
    }
}
