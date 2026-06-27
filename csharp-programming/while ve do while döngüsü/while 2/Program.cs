using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace while_2
{
    internal class Program
    {
        static void Main(string[] args)
            // 100 den 0 a çifter çifter
        {
            int a = 100;
           while (a>=0)
            {
                Console.WriteLine(a);
                a -= 2; // a=a-2 aynı şey
            }
           Console.ReadLine();

        }
    }
}
