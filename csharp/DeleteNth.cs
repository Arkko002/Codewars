using System.Collections.Generic;
using System.Linq;

namespace Codewars
{
    public class DeleteNth
    {
        public static int[] Delete(int[] arr, int x)
        {
            if (x == 1) return arr.Distinct().ToArray();

            var occurrences = new Dictionary<int, int>();
            var resList = new List<int>();
            
            foreach (var i in arr)
            {
                if (occurrences.ContainsKey(i))
                {
                    occurrences[i] += 1;
                }
                else
                {
                    occurrences.Add(i, 1);
                }

                if (occurrences[i] <= x)
                {
                    resList.Add(i);
                }
            }

            return resList.ToArray();
        }
    }
}