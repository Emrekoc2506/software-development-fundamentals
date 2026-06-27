using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace diziler
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] sayilar= new int[4]; // [] işareti diziyi ifade eder ve int[4] ifadeside dizinin içinde kaç index oldunu belirtir

            sayilar[0] = 10;
            sayilar[1] = 20;
            sayilar[2] = 30;
            sayilar[3] = 40;
            
            for (int i = 0; i < sayilar.Length; i++) // sayilar.Length komutu kodun nerde biticegimni belirler biz 4 index istedimiz için 4 taneneden sonra durdurdu
            {
                Console.WriteLine(sayilar[i]); // yazır komutu
            }
            Console.ReadLine();
        }
    }
}
