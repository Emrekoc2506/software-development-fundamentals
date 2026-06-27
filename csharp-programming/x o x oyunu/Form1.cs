using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace x_o_x_oyunu
{
    public partial class Form1 : Form
    {
        bool sirakimde = true;
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (sirakimde == true)
            {
                button1.Text = "x";
                sirakimde = false;
            }
            else
            {
                button1.Text = "o";
                sirakimde = true;
            }
            button1.Enabled = false;





        }

        private void button6_Click(object sender, EventArgs e)
        {
            if (sirakimde == true)
            {
                button6.Text = "x";
                sirakimde = false;
            }
            else
            {
                button6.Text = "o";
                sirakimde = true;
            }
            button6.Enabled = false;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (sirakimde == true)
            {
                button2.Text = "x";
                sirakimde = false;
            }
            else
            {
                button2.Text = "o";
                sirakimde = true;
            }
            button2.Enabled = false;
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (sirakimde == true)
            {
                button3.Text = "x";
                sirakimde = false;
            }
            else
            {
                button3.Text = "o";
                sirakimde = true;
            }
            button3.Enabled = false;
        }

        private void button5_Click(object sender, EventArgs e)
        {
            if (sirakimde == true)
            {
                button5.Text = "x";
                sirakimde = false;
            }
            else
            {
                button5.Text = "o";
                sirakimde = true;
            }
            button5.Enabled = false;
        }

        private void button4_Click(object sender, EventArgs e)
        {
            if (sirakimde == true)
            {
                button4.Text = "x";
                sirakimde = false;
            }
            else
            {
                button4.Text = "o";
                sirakimde = true;
            }
            button4.Enabled = false;
        }

        private void button9_Click(object sender, EventArgs e)
        {
            if (sirakimde == true)
            {
                button9.Text = "x";
                sirakimde = false;
            }
            else
            {
                button9.Text = "o";
                sirakimde = true;
            }
            button9.Enabled = false;
        }

        private void button8_Click(object sender, EventArgs e)
        {
            if (sirakimde == true)
            {
                button8.Text = "x";
                sirakimde = false;
            }
            else
            {
                button8.Text = "o";
                sirakimde = true;
            }
            button8.Enabled = false;
        }

        private void button7_Click(object sender, EventArgs e)
        {
            if (sirakimde == true)
            {
                button7.Text = "x";
                sirakimde = false;
            }
            else
            {
                button7.Text = "o";
                sirakimde = true;
            }
            button7.Enabled = false;
        }
    }
}
