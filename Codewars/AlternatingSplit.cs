using System.Linq;
using System.Text;

namespace Codewars
{
    public class AlternatingSplit
    {
        public static string Encrypt(string text, int n)
        {
            var resultStr = text;
            if (resultStr is null || resultStr == string.Empty)
            {
                return resultStr;
            }
            
            for (var loopIndex = 0; loopIndex < n; loopIndex++)
            {
                var firstStr = resultStr.Where(((c, i) => i % 2 == 0));
                var secondStr = resultStr.Where(((c, i) => i % 2 == 1));
                resultStr = new string(secondStr.Concat(firstStr).ToArray());
            }

            return resultStr;
        }
  
        public static string Decrypt(string encryptedText, int n)
        {
            var resultStr = encryptedText;
            if (resultStr is null || resultStr == string.Empty)
            {
                return resultStr;
            }
            
            for (var loopIndex = 0; loopIndex < n; loopIndex++)
            {
                var mid = resultStr.Length / 2;
                var firstStr = resultStr.Substring(0, mid);
                var secondStr = resultStr.Substring(mid, resultStr.Length - mid);

                var counter = 0;
                var stringBuilder = new StringBuilder();
                stringBuilder.Append(firstStr);
                foreach (var secondStrChar in secondStr)
                {
                    stringBuilder.Insert(counter, secondStrChar);
                    counter += 2;
                }

                resultStr = stringBuilder.ToString();
            }

            return resultStr;
        }
    }
}