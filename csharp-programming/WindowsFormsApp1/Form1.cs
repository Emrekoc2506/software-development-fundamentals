using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            int ilkSayi = int.Parse(textBox1.Text);

            int orgSayi = ilkSayi;

            int sayiUzunlugu = textBox1.Text.Length;

            int armstrong = 0;

            int remainder = 1;

            int k = 1;

            while (ilkSayi > 0)
            {
                k = 1;

                remainder = ilkSayi % 10;

                for (int   i= 1; i<= sayiUzunlugu; i++)
                {
                    k *= remainder;
    }

                armstrong += k;

                ilkSayi = ilkSayi / 10;
            }

            if (orgSayi == armstrong)
            {
                MessageBox.Show("This number is an Armstrong number");
            }
            else
            {
                MessageBox.Show("This number is not an Armstrong number.");
            }

        }
    }
}
