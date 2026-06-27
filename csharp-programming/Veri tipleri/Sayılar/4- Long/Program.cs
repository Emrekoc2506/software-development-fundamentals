using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Long
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // 19 basamaklıdır ve tc no gibi veriler için kullanılır bunun nedeni int en fazla 10 basamaklı olmasıdır 

            long BirinciDegisken = 99999999;
            long İkinciDegişken = -999999999;

            long MaxDeger = long.MaxValue;
            long MinDeger = long.MinValue;

            Console.WriteLine(BirinciDegisken);
            Console.WriteLine(İkinciDegişken);

            Console.WriteLine(MaxDeger);
            Console.WriteLine(MinDeger);

            Console.ReadLine();
        }
    }
}
