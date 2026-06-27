using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace karar_yazpısına_giriş
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int not = 90;

            if (not > 50)
            {
                Console.WriteLine("Ögrenci bu dersten başarılı bir şekilde geçmiştir");
                Console.ReadLine();
            }

            else
            { 
             Console.WriteLine("Dersten başarısız aldunuz");
             Console.ReadLine();

            }


        }
    }
}
