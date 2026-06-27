
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace login_uygulaması
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // kullanıcı giriş sayfası uygulması yapılacak
            // Kullaanıcı adı ve şifresi dogru giririrse tebrikler başarılı bir şekilde giriş yaptınız
            // yanlış giririse hata verilir ve 3 tane hak tanımlı olucak kullanacı yanlış giridigi sürece döngü devam eder

            int hak_sayısı = 3;
            while (true)
            {
                Console.WriteLine("Lütfen kullanıcı adınızı giriniz");
                string kullaniciAdi = Console.ReadLine();

                Console.WriteLine("Lütfen şifrenizi giriniz");
                string sifre = Console.ReadLine();

                if (kullaniciAdi == "Emre" && sifre=="1453")
                {
                    Console.WriteLine("Tebrikler başarılı bir şekilde giriş yaptınız");
                    break;
                }
                else
                {
                    Console.WriteLine("kullanıcı adınız veya şifreniz yanlış !");
                    if (hak_sayısı>0)
                        {
                        hak_sayısı -= 1;
                        }
                    if (hak_sayısı == 0)

                    {
                        Console.WriteLine("Hakkınız dolmuştur dahada giriş yapamazsın");
                        break ;
                    }
                }
            }



        }
    }
}
