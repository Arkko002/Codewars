using System;
using System.Collections.Generic;
using System.Linq;

namespace Codewars
{
    public class PrimesInNumbers
    {
        public static String factors(int lst)
        {
            var primes = new List<int>();
            primes.Add(2);
            primes.Add(3);

            var resultDict = new Dictionary<int, int>();
            int divRes = lst;
            
            while (divRes != 1)
            {
                for (var i = 0; i < primes.Count; i++)
                {
                    int divRem;
                    int tempRes;
                    tempRes = Math.DivRem(divRes, primes[i], out divRem);

                    if (divRem == 0)
                    {
                        divRes = tempRes;
                        TryAddPrime(resultDict, primes[i]);
                        break;
                    }

                    if (i == primes.Count - 1)
                    {
                        CalculateNextPrime(primes);
                        break;
                    }
                }
            }

            return GenerateResultString(resultDict);
        }

        private static string GenerateResultString(Dictionary<int, int> dict)
        {
            var resStr = string.Empty;
            foreach (var pair in dict)
            {
                if (pair.Value == 1)
                {
                    resStr += $"({pair.Key.ToString()})";
                }
                else
                {
                    resStr += $"({pair.Key.ToString()}**{pair.Value.ToString()})";
                }
            }

            return resStr;
        }
        
        private static void TryAddPrime(Dictionary<int, int> dict, int prime)
        {
            if (dict.TryAdd(prime, 1))
            {
                return;
            }

            dict[prime]++;
        }

        private static void CalculateNextPrime(List<int> primes)
        {
            int nextCount = primes.Count + 1;
            int nextPrime = primes.Last() + 2;
            while (primes.Count < nextCount)
            {
                int sqrt = (int)Math.Sqrt(nextPrime);
                bool isPrime = true;
                for (int i = 0; primes[i] <= sqrt; i++)
                {
                    if (nextPrime % primes[i] == 0)
                    {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime)
                {
                    primes.Add(nextPrime);
                }
                nextPrime += 2;
            }
        }
    }
}