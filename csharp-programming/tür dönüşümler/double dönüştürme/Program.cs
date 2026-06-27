using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace double_dönüştürme
{
    internal class Program
    {
        static void Main(string[] args)
        {

        // DOUBLE VERİ TİPİNDEN İNT VERİ TİPİNE DÖNÜŞTÜRME

            double sayi = 5.11;

            int a = Convert.ToInt32(sayi);

        // int b = int.parse(sayi); 
        // BU KOMUT ÇALIŞMAZ ÇÜMKÜ PARSE KULLANMAK İÇİN İLK ÖNCE DOUBLE VERİ TİPİNİ STRİNG VERİ TİPİNE DÖNÜŞTÜRMEMİZ LAZIM DAHA SONRA İNT VERİ TİPİNE DÖNÜŞTÜRE BİLİRİZ
         
            Console.WriteLine(a);
            Console.WriteLine(a.GetType());
            Console.ReadLine(); ;

        // NOT : DOUBLE VERİ TİPİNDE ONDALIKLI BİR SAYIYI İNT VERİ TİPİNE ÇEVİRİRSEK ONDALIKLI KISIM GİDER YANİ 5.11 SAYISI 5 YAZDIRIR KOMUT EKRANI

        }
    }
}
