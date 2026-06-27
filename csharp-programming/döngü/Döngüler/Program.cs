using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Döngüler
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //1 den 10 a teker teker
            
          for(int i = 1 ; i <=10 ; i++)
            {
                Console.WriteLine(i);
            }
          Console.ReadLine();

            //0 dan 10 a ikişer ikişer 

          for (int a = 0; a <= 10; a=a+2)
            {
                Console.WriteLine(a);
            }
          Console.ReadLine();

        }
    }
}
