using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace while_döngüsü
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = 1;
            while (a <= 10) // a nın degerini 1 döngüde yerine yazıldıgında 10
            {
                Console.WriteLine(a);
                a++; // Burda a ya 1 ekleniyor

            }
            Console.ReadLine();
            /* a nın degerini 1 döngüde yerine yazıldıgında 10 dan küçük oldugu için döngü kabul eder ve
             döngüye alır fakat sonsuz 1 döngüsü olur a++ komutu ile  ya 1 ekler ve yeni degeri while döngüsüne yazar 10 a kadar devam eder */


        }
    }
}
