using System.Collections.Generic;
using System.Linq;

namespace Codewars
{
    public class ObservedPin
    {
        public static List<string> GetPINs(string observed)
        {
            var keypadDict = InitializeKeypadDictionary();
            var resList = new List<string>();

            var dictIndexList = observed.Select(digit => 0).ToList();
            
            while (true)
            {
                for (var i = 0; i < observed.Length; i++)
                {
                    if (dictIndexList[i] != keypadDict[observed[i].ToString()].Count)
                    {
                        continue;
                    }

                    if (i == dictIndexList.Count - 1)
                    {
                        return resList;
                    }
                        
                    dictIndexList[i + 1]++;
                    dictIndexList[i] = 0;
                }
                
                dictIndexList[0]++;
            }
        }

        private static void AddCurrentPermutation(List<string> resList, Dictionary<string, List<string>> keypadDict,
            string observed, List<int> dictIndexList)
        {
            var resStr = string.Empty;
            for (var currentIndex = 0; currentIndex < dictIndexList.Count; currentIndex++)
            {
                var index = dictIndexList[currentIndex];
                resStr += keypadDict[observed[currentIndex].ToString()][index];
            }

            resList.Add(resStr);
        }
        
        private static Dictionary<string, List<string>> InitializeKeypadDictionary()
        {
            var keypadDict = new Dictionary<string, List<string>>();
            keypadDict.Add("0", new List<string>() {"8", "0"});

            for (int i = 1; i <= 9; i++)
            {
                var possibleValues = new List<string>();
                possibleValues.Add(i.ToString());


                if (i - 1 > 0)
                {
                    if ((i - 1) % 3 != 0) possibleValues.Add((i - 1).ToString());
                }

                if (i + 1 < 10)
                {
                    if ((i + 1) % 3 != 1) possibleValues.Add((i + 1).ToString());
                }

                if (i - 3 > 0) possibleValues.Add((i - 3).ToString());
                if (i + 3 < 10) possibleValues.Add((i + 3).ToString());

                if (i == 8)
                {
                    possibleValues.Add("0");
                }

                keypadDict.Add(i.ToString(), possibleValues);
            }

            return keypadDict;
        }
    }
}
