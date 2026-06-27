using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Float__ondalıklı_sayılar_
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Float veri tipini yazarken ondalıklı sayının sonuna f eklemeyi unutma !!!!

            float Birinci_Ondalıklı_Sayı = 35.87f;
            float İkinci_Ondalıklı_Sayı = 65.78f;

            float MaxDeger = float.MaxValue;
            float MinDeger = float.MinValue;


            Console.WriteLine(Birinci_Ondalıklı_Sayı);
            Console.WriteLine(İkinci_Ondalıklı_Sayı);

            Console.WriteLine(MaxDeger);
            Console.WriteLine(MinDeger);

            Console.ReadLine();
        }
    }
}
