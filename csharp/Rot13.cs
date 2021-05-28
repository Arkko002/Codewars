using System.Linq;
using System.Text;

namespace Codewars
{
    public class Rot13
    {
        public static string Encrypt(string message)
        {
            return new string(message.Select(x =>
                {
                    var asciiValue = (int) x;
                    if (!((asciiValue >= 65 && asciiValue <= 90) || (asciiValue >= 97 && asciiValue <= 122)))
                    {
                        return x;
                    }
                    
                    if (asciiValue + 13 > 122)
                    {
                        x = (char)(asciiValue - 13);
                        return x;
                    }

                    if (asciiValue + 13 > 90 && asciiValue < 97)
                    {
                        x = (char)(asciiValue - 13);
                        return x;
                    }

                    x = (char)(asciiValue + 13);
                    return x;
                }).ToArray());
        }
    }
}