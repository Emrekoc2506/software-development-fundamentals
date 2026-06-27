using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Short
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Shote degişkeni -32768 -32367 arasında deger depolanabilir

            short birinciDegisken = -50;

            short ikinciDegisken = 25550;

            short ucuncuDegisken = 32000;


            short MaxDeger = short.MaxValue;
            short MinDeger = short.MinValue;

            Console.WriteLine(birinciDegisken);
            Console.WriteLine(ikinciDegisken);
            Console.WriteLine(ucuncuDegisken);

            Console.WriteLine(MaxDeger);
            Console.WriteLine(MinDeger);

            Console.ReadLine();
        }
    }
}
