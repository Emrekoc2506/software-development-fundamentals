using System;
using System.Collections.Generic;
using System.Diagnostics.Tracing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vize1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("araban varmı evet , hayır");
            string araba = Console.ReadLine().ToLower().Trim();
            Console.WriteLine("ehliyetin varmı  evet , hayır ");
            string ehliyet = Console.ReadLine().ToLower().Trim();

            if (araba == "evet" && ehliyet == "evet")
            {
                Console.WriteLine("araba kullana bilirsin");
            }
            else if (araba == "evet" || ehliyet == "evet")
            {
                Console.WriteLine("yeterli sayıda ekipman yok");
            }
            else if (araba == "hayır" && ehliyet == "hayır")
            {
                Console.WriteLine("sen bir hiçsin");
            }

            else { Console.WriteLine("sadece evet yada hayır yazıcan bu kadar zor olamaz"); }
        }
    }
}
