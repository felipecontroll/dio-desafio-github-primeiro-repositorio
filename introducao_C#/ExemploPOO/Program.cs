﻿using System;
using ExemploPOO.Models;

namespace ExemploPOO
{
    class Program
    {
        static void Main(string[] args)
        {
            Corrente c = new Corrente();
            c.Creditar(100);

            c.ExibirSaldo();
            
            
            
            // Calculadora calc = new Calculadora();
            // System.Console.WriteLine("Resultado da primeira soma:" + calc.Somar(10,10));
            // System.Console.WriteLine("Resultado da primeira soma:" + calc.Somar(10,10,10));
            
            //  Aluno p1 = new Aluno();

            //  p1.Nome = "Bob";
            //  p1.Idade = 20;
            //  p1.Nota = 10;
            //  p1.Documento = "123456789";
            //  p1.Apresentar();

            // Professor p2 = new Professor();
 
            // p2.Nome = "Felipe";
            // p2.Idade = 35;
            // p2.Documento = "123";
            // p2.Salario = 2000.00;
            // p2.Apresentar();


           
            // Valores Validos
            // Retangulo r = new Retangulo();
            // r.DefinirMedidas(30, 30);
            // System.Console.WriteLine($"Área: {r.ObterArea()}");

            // Valores invalidos
            // Retangulo r2 = new Retangulo();
            // r2.DefinirMedidas(0, 0);
            // System.Console.WriteLine($"Área: {r2.ObterArea()}");
            

        }
    }
}
