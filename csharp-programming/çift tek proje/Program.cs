using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace çift_tek_proje
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Bir sayı giriniz");
            int sayi = Convert.ToInt32(Console.ReadLine());
            if (sayi % 2 == 0)
            {
                Console.WriteLine("sayınız çifttir");
            }
            else
            {
                Console.WriteLine("Sayınız tektir");
            }


        }
    }
}
