using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kullanıcıdan_deger_alma___console.readline_
{
    internal class Program
    {
        static void Main(string[] args)
        {
                        Console.WriteLine("lütfen adınızı girininiz");

            string isim = Console.ReadLine();

            Console.WriteLine("Soy isminizi giriniz");

            string soyisim = Console.ReadLine();

            Console.WriteLine("kullanıcı isim" + isim);

            Console.WriteLine("kullanıcının soy ismi" + soyisim);

            Console.ReadLine();

        }
    }
}
