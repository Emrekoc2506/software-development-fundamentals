using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tür_dönüşümler
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Her iki tarafta aynı veri tipinde olmalıdır 
            // örk : int a = 5

            int a = 255; 
            byte b  = (byte)a; // burdaki a degerini al ve byte tipine dönüştür 
            // Eşitligin her 2 tarafı aynı tip olmalı 
            Console.WriteLine(b.GetType()); // GetType kodu b tanımının tütünü gösteriyor
            Console.WriteLine(b);
            Console.ReadLine();











        }
    }
}
