using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace int_ve_string_dönüştürme
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // STRİNG VERİ TİPİNDE İNT  VERİ TİPİNE DÖNÜŞTÜRME 

            // 1. yol
            string sayi1 = "1";
            string sayi2 = "2";

            int a = int.Parse(sayi1);
            int b = int.Parse(sayi2);
            Console.WriteLine(a + b);

            // 2. yol
            string sayi9 = "1";
            string sayi8 = "2";

            int x = Convert.ToInt32(a);
            int y = Convert.ToInt32(b);
            Console.WriteLine(x + y);

        }
    }
}
