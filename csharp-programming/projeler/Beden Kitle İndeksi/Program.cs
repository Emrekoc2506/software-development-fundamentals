using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Beden_Kitle_İndeksi
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Beden indeksi Heseplama Merkezine Hoş geldinzi.");
            Console.ReadLine();

            Console.WriteLine("Kilonuzu Giriniz");
            int kilo = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Boyunucu Giriniz");
            double boy = Convert.ToDouble(Console.ReadLine());

            double bke = kilo / (boy * boy);

            if (bke < 18)
            {
                Console.WriteLine("zayıfsınız...");
                Console.ReadLine();

            }
            else if (bke >= 18 && bke < 25) 
            {
                Console.WriteLine("Normalsiniz");
                Console.ReadLine();

            }
            else if (bke > 25)
            {
                Console.WriteLine("obezsiniz...");
                Console.ReadLine();
            }
        }
    }
}
