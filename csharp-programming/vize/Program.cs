using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vize
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int toplam, k, sayac;
            toplam = 0;
            k = 0;
            sayac = 5;
            while (sayac > k)
            {
                toplam = toplam + k;
                k = k + 1;
                Console.WriteLine(toplam);
            }
            Console.ReadLine();
        }
    }
}
