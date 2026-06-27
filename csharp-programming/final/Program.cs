using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n, toplam = 0;
            int i = 1;
            Console.Write("bir sayi giriniz");
            n  = Convert.ToInt32(Console.ReadLine());
            while (i <= n)
            {
                toplam += i;
                i++;
            }
            Console.WriteLine($"1den{ n} kadar olan sayıları toplamı :{toplam}" );
        }
    }
}
