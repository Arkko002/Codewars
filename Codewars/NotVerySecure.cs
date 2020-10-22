using System.Text.RegularExpressions;

namespace Codewars
{
    public class NotVerySecure
    {
        public static bool Alphanumeric(string str)
        {
            if (str.Length == 0) return false;

            return !Regex.IsMatch(str, @"[^a-zA-Z0-9]");
        }
    }
}