using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Do_while_döngüsü
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = 1;
            do
            {
                Console.WriteLine(a);
                a++;

            } while (a<= 10);
            Console.WriteLine();
        }
    }
}
