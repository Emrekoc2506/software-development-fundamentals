using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            
        {
            static void Main()
            {
                const int ROW = 3;
                const int COL = 3;
                int[,] mat = new int[ROW, COL];
                int[,] transpose = new int[COL, ROW];

                // Kullanıcıdan matris elemanlarını al
                Console.WriteLine("Enter the elements of the 3x3 matrix:");
                for (int i = 0; i < ROW; i++)
                {
                    for (int j = 0; j < COL; j++)
                    {
                        Console.Write($"mat[{i},{j}]: ");
                        mat[i, j] = int.Parse(Console.ReadLine());
                    }
                }

                // Transpoz matrisi oluştur
                for (int i = 0; i < ROW; i++)
                {
                    for (int j = 0; j < COL; j++)
                    {
                        transpose[j, i] = mat[i, j];
                    }
                }

                // Orijinal matrisi yazdır
                Console.WriteLine("\nOriginal Matrix:");
                for (int i = 0; i < ROW; i++)
                {
                    for (int j = 0; j < COL; j++)
                    {
                        Console.Write($"{mat[i, j]} ");
                    }
                    Console.WriteLine();
                }

                // Transpoz matrisi yazdır
                Console.WriteLine("\nTranspose Matrix:");
                for (int i = 0; i < COL; i++)
                {
                    for (int j = 0; j < ROW; j++)
                    {
                        Console.Write($"{transpose[i, j]} ");
                    }
                    Console.WriteLine();
                }
            }
        }

    }
}
}
