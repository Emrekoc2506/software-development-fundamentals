using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basit_Hesap_Makinesi
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // "İşlem seç (+, -, *, /): " double kullancaz $"Sonuç: {s1 + s2}
            Console.WriteLine("1. sayı gir");
            double sayi1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("2. sayi gir");
            double sayi2 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("İşlem seç (+, -, *, /): ");
            string islem = Console.ReadLine();

            if (islem == "+")
            {
                Console.WriteLine();
            }
            else if (islem == "-")
            {
                Console.WriteLine();
            }
            else if (islem == "*")
            {
                Console.WriteLine();
            }
            else if (islem == "/")
            {
                Console.WriteLine();
            }
            else {
                Console.WriteLine("geçersiz eşlem");




        }
    }
}
