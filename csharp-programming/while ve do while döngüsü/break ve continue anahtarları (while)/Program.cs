using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace break_ve_continue_anahtarları__while_
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for (int a = 1; a <= 10; a++)
            {
                if (a == 7)
                {
                    break; // break kodu 7 ye geldigin zaman dur demek 7 dahil degil
                // continue;  kodu 7 yi atla demek
                }
                Console.WriteLine("a` nın degeri :" + a);
            }
            Console.ReadLine();
        }

    }
}
