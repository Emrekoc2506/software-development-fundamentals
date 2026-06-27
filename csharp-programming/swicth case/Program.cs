using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace swicth_case
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int bakiye = 1000;
            Console.WriteLine("ATM ye hoş geldiniz");
            Console.WriteLine("1- Bakiye görüntüreme");
            Console.WriteLine("2- Para yatırma");
            Console.WriteLine("3- Para çekme");
            Console.WriteLine("q Çıkış yapma");

            string secim = Console.ReadLine();

            switch (secim)
            {


                case "1":
                    Console.WriteLine("Bakiyeniz: " + bakiye);
                    Console.ReadLine();
                    break;


                case "2":
                    Console.WriteLine("Çekmek isteniniz tutarı giriniz");
                    int cekilecek_tutar = Convert.ToInt32(Console.ReadLine());

                    if (cekilecek_tutar > bakiye)
                    {
                        Console.WriteLine("Mevcut Bakiyenizden fazla para çekemezsiniz");
                        Console.ReadLine();
                    }
                    else
                    {
                        Console.WriteLine("Güncel bakiyeniz" + (bakiye - cekilecek_tutar));
                        Console.ReadLine();
                    }
                    break;

                case "3":
                    Console.WriteLine("Yatırılıcak tutarı giriniz");
                    int yatıracak_tutar = Convert.ToInt32(Console.ReadLine());

                    Console.WriteLine("Yeni Bakiyeniz" + (yatıracak_tutar + bakiye));
                    Console.ReadLine();
                    break;

                case "q":
                    {
                        Console.WriteLine("ATM den çıktınız iyi günler");
                        Console.ReadLine();
                    }
                    break;

                default:
                    Console.WriteLine("Lütfen geçerli  bir deger giriniz");
                    Console.ReadLine();
                    break ;

                

            }
        }
    }
}
