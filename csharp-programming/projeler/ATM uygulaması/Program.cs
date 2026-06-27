using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ATM_uygulaması
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Kullanıcıya sorulucak nasıl bir işlem yapmak istendigini 
            1- Bakiye Görüntüleme
            2- Para Çekme
            3- Para Yatırma
            q ya basarsa çıkış yapma.*/

            int bakiye = 1000;

            Console.WriteLine("ATM ye hoş geldiniz.");
            Console.WriteLine("1 - Bakiye Görüntüleme. ");
            Console.WriteLine("2 - Para Çekme.");
            Console.WriteLine("3 - Para Yatırma. ");
            Console.WriteLine("q ya basarsa çıkış yapma.");
            Console.WriteLine("Yapmak istediniz İşlemi lütfen seçiniz.");
            string secim = Console.ReadLine();

            if (secim == "1")
            {
                Console.WriteLine("Şu anki bakiyeniz : " + bakiye);
                Console.ReadLine();

            }
            else if (secim == "2")
            {
                Console.WriteLine("Çekmek istediniz tutarı giriniz");
                int cekecek_tutar = Convert.ToInt32(Console.ReadLine());

                if (cekecek_tutar <= bakiye)
                {
                    Console.WriteLine("Kalan Tutar : " + (bakiye - cekecek_tutar));
                    Console.ReadLine();
                }
                else
                {
                    Console.WriteLine("Mevcut Bakiyenizden fazla para çekemezsiniz");
                    Console.ReadLine();
                }
            }
            else if (secim == "3")
            {
                Console.WriteLine("Yatırmak istediniz tutarı giriniz");
                int yatirilacak_tutar = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Yeni Bakiyeniz :" + (bakiye + yatirilacak_tutar));
                Console.ReadLine();

            }
            else if (secim == "q")
            {
                Console.WriteLine("ATM den Çıkış yapılıyor");
                Console.WriteLine("Çıkış Yapıldı İyi Günler ... ");
                Console.ReadLine();


            }
            else
            {
                Console.WriteLine("Yanlış bir seçim yaptınız");
            }



        }
    }
}
