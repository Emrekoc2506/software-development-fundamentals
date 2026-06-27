using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kullanıcıdan_alınan_sayıya_kadar_toplayıp_moduna_göre_işlem_yapma
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Kullanıcıdan bir sayı alıncak 0 ' dan başlayıp  aldımız sayıya kadar toplayacagız ve 
            ve girdigi sayıyı bölecegiz eger ortalama  50 den büyük ise ortalama 50 den büyüktür  
            degilse ortalama 50 den küçüktür  yadırırcak  */


            Console.WriteLine("lütfen bir sayı giriniz");
            int sayi = Convert.ToInt32(Console.ReadLine());
            int toplam = 0;
            for (int i = 1; i<= sayi; i++)
            {
                toplam += i;
            }

            double ortalama = toplam / sayi;
            
            if(ortalama < 50)
            {
                Console.WriteLine("Ortalaman 50 den küçük");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine("Ortalamanın 50 den büyük");
                Console.ReadLine();
            }

        }
    }
}
