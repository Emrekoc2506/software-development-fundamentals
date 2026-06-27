
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iç_içe_döngü_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for (int i = 10; i>=3; i--)
            {

                for(int j = 1; j<=i; j++)
                {
                    Console.Write("*");
                }
                Console.WriteLine();
            }
            Console.ReadLine();
        }
    }
}
