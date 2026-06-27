using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Byte
{
    internal class Program
    {
        static void Main(string[] args)
        {
            byte birinci = 5;

            byte ikinci = 25;

            byte maxDeger = byte.MaxValue;     //byte kodu 0 - 255 arasında olmalıdır 
            byte minDeger = byte.MinValue;

            Console.WriteLine(birinci);
            Console.WriteLine(ikinci);
            Console.WriteLine(maxDeger);
            Console.WriteLine(minDeger);
            Console.ReadLine();
        }
    }
}
