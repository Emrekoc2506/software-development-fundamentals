using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace do_while_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = 1;
            int toplam = 0;

            do
            {
                toplam += a; // toplam = toplam + a; aynı şey
                a++;

            } while (a <= 100);
            Console.WriteLine(" 1 den yüze kadar sayıların toplamı :" + toplam);
            Console.ReadLine();
        }
    }
}
