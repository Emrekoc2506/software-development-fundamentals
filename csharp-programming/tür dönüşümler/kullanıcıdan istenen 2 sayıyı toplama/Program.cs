using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kullanıcıdan_istenen_2_sayıyı_toplama
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Kullanıcıdan alınan 2 sayıyı toplama
           
            Console.WriteLine("birinci sayıyı giriniz");
            string sayi1 = Console.ReadLine();

            Console.WriteLine("ikinci sayıyı giriniz");
            string sayi2 = Console.ReadLine();

            // strıng komudu ile yazılınca 2 sayı toplarsan yan tana yazılır aşagıdaki komut da string komudunu int e çevirir
            int sayi1Int = int.Parse(sayi1);
            int sayi2Int = int.Parse(sayi2);

            Console.WriteLine("İki sayinin toplama : " + (sayi1Int + sayi2Int));
            Console.ReadLine();

        }
    }
}
