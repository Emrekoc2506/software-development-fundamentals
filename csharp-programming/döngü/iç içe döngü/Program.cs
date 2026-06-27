using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iç_içe_for_döngüsü
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // i= 1 ( 1 den başla demek)
            // i <= 5 ( 5 e kadar demek )
            // i++ ( birer birer demek )

            for (int i = 1; i <= 5; i++)
            {
              for (int j = 1; j<=i; j++ )
                {
                    Console.Write(j); /* buraya ne koyarsan onu dönüye alır j koydugunda sayıları ardışık yazar
                                       1 yazarsan ardışık gidern sayıların yerin e 1 yazmış olursun */
                }
                Console.WriteLine(); // bu komut yerni satır ekler
            }
            Console.ReadLine();

        }

    }
}
