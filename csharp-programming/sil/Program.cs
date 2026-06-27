using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UrunFiyatAnalizi
{
    // 1. Ürün Sınıfı
    public class Urun
    {
        public string UrunAdi { get; set; }
        public decimal Fiyat { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // 2. Ürün Listesi (Her biri farklı, fiyatlar rastgele verildi)
            List<Urun> urunler = new List<Urun>
            {
                new Urun { UrunAdi = "Bilgisayar", Fiyat = 17500 },
                new Urun { UrunAdi = "Telefon", Fiyat = 11000 },
                new Urun { UrunAdi = "TV", Fiyat = 9200 },
                new Urun { UrunAdi = "Ütü", Fiyat = 750 },
                new Urun { UrunAdi = "Buzdolabı", Fiyat = 13000 },
                new Urun { UrunAdi = "Klima", Fiyat = 8500 },
                new Urun { UrunAdi = "Mobilya", Fiyat = 14500 },
                new Urun { UrunAdi = "Masa", Fiyat = 2300 },
                new Urun { UrunAdi = "Koltuk", Fiyat = 6600 },
                new Urun { UrunAdi = "Tablo", Fiyat = 900 }
            };

            // 3. En ucuz ve en pahalı ürünü bul
            Urun enUcuz = urunler.OrderBy(u => u.Fiyat).First();
            Urun enPahali = urunler.OrderByDescending(u => u.Fiyat).First();

            // Ekrana yazdır
            Console.WriteLine("En Ucuz Ürün:");
            Console.WriteLine($"Ad: {enUcuz.UrunAdi}, Fiyat: {enUcuz.Fiyat} TL");

            Console.WriteLine("\nEn Pahalı Ürün:");
            Console.WriteLine($"Ad: {enPahali.UrunAdi}, Fiyat: {enPahali.Fiyat} TL");

            // Bonus: Tüm ürünleri ekrana yazdır
            Console.WriteLine("\nTüm Ürün Listesi:");
            foreach (var urun in urunler)
            {
                Console.WriteLine($"- {urun.UrunAdi} : {urun.Fiyat} TL");
            }

            Console.ReadLine(); // Konsol kapanmasın diye
        }
    }
}
