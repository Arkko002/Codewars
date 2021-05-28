using System.Collections.Generic;
using System.Text;

namespace Codewars
{
    public class RgbToHex
    {
        public static string Rgb(int r, int g, int b)
        {
            var rgbArr = new List<int>{r, g, b};
            var strBuilder = new StringBuilder();
            
            rgbArr.ForEach(x =>
            {
                if (x > 255)
                {
                    x = 255;
                }

                if (x < 0)
                {
                    x = 0;
                }

                var hexVal = x.ToString("X");
                if (hexVal.Length == 1) hexVal = hexVal.Insert(0, "0");
                strBuilder.Append(hexVal);
            });

            return strBuilder.ToString();
        }
    }
}