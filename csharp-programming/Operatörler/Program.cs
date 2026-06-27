using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Operatörler
{
    internal class Program
    {
        static void Main(string[] args)
        {

            int sayi1 = 10; 
            int sayi2 = 5;
            int sayi99 = 20;
            int sayi88 = 20;
            int a = 30;

            int sonuc1 = sayi1 + sayi2;                       // Toplama : +
                                                              
            int sonuc2 = sayi1 - sayi2;                       // çıkartma : -
                                                              
            int sonuc3 = sayi1 * sayi2;                       // carpma : *
                                                              
            int sonuc4 = sayi1 / sayi2;                       // bölme : /
                                                              
            int sonuc5 = sayi1 % sayi2;                       // Bölme de kalan deger : %
                                                              
                                                              
                                                              
            bool sonuc6 = sayi1 == sayi2;                     // eşittir : == (bool 2 verinin birbirine eşit oldugunu kontrol eder)
                                                              
            bool sonuc7 = sayi1 != sayi2;                     // eşit degil : !=
                                                              
            bool sonuc8 = sayi1 < sayi2;                      // büyüktür : <
                                                              
            bool sonuc9 = sayi1 <= sayi2;                     // büyük eşit : <=

            bool sonuc10 = sayi1 > sayi2;                     // kücük : >

            bool sonuc11 = sayi1 >= sayi2;                    // kücük eşit : >=

            bool sonuc12 = sayi1 == sayi2 && sayi1 < sayi2;   // VE baglacı = && (True olması için her durumun dogru olması lazım)

            bool sonuc13 = sayi1 <= sayi2 || sayi1 >= sayi2;  // VEYA baglacı = ## (1 tane True olması yeterli çıktı True olur)

            bool sonuc14 = true;                              // Degildir : ! (var olan bir şeyi tersine çevirir) ( (!sonuc14); olarak yazılır)


            a += 5;                                           // a ile 5 i toplama anlamına gelmekte bu aynı 
            //a = a + 5 (aynı anlama gelmekte)

            // +=     a += 5;  
            // -=     a -= 5;  
            // /=     a /= 5;  
            // *=     a *= 5;  



            sayi99++;
            sayi88--;

            Console.WriteLine(sonuc1);
            Console.WriteLine();
            Console.WriteLine(sonuc2);
            Console.WriteLine();
            Console.WriteLine(sonuc3);
            Console.WriteLine();
            Console.WriteLine(sonuc4);
            Console.WriteLine();
            Console.WriteLine(sonuc5);
            Console.WriteLine();
            Console.WriteLine(sayi99);
            Console.WriteLine();
            Console.WriteLine(sayi88);
            Console.WriteLine();
            Console.WriteLine(sonuc6);
            Console.WriteLine();
            Console.WriteLine(sonuc7);
            Console.WriteLine();
            Console.WriteLine(sonuc8);
            Console.WriteLine();
            Console.WriteLine(sonuc9);
            Console.WriteLine();
            Console.WriteLine(sonuc10);
            Console.WriteLine();
            Console.WriteLine(sonuc11);
            Console.WriteLine();
            Console.WriteLine(sonuc12);
            Console.WriteLine();
            Console.WriteLine(sonuc13);
            Console.WriteLine();
            Console.WriteLine(!sonuc14);
            Console.WriteLine();
            Console.WriteLine("a ' nın degeri :"+a);
            Console.ReadLine();

        }
    }
}
