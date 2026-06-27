using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace @int
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // İnt veri tipi -2.143.483.648 - 2.143.483.647 deger depolayabilir


            int birinciDegisken = 150000;

            int ikinciDegisken = -500000;


            int MaxDeger = int.MaxValue;
            int MinDeger = int.MinValue;

            Console.WriteLine(birinciDegisken);
            Console.WriteLine(ikinciDegisken);

            Console.WriteLine(MaxDeger);
            Console.WriteLine(MinDeger);

            Console.ReadLine();

        }
    }
}
