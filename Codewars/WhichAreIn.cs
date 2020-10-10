using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;

namespace Codewars
{
    class WhichAreIn
    {
        public static string[] inArray(string[] array1, string[] array2)
        {
            HashSet<string> result = new HashSet<string>(array1.Where(x =>
                {
                    foreach (string s in array2)
                    {
                        if (s.Contains(x))
                        {
                            return true;
                        }
                    }

                    return false;
                }
            ));

            return result.OrderBy(x => x).ToArray();
        }
    }
}
