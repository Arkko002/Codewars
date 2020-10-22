using System;
using System.Linq;

namespace Codewars
{
    public class Parentheses
    {
        public static bool ValidParentheses(string input)
        {
            if (input.Length == 0)
            {
                return true;
            }

            var parenthesesStr = input.Where(x => x == '(' || x == ')');
            var parentheses = parenthesesStr as char[] ?? parenthesesStr.ToArray();
            if (!parentheses.Any())
            {
                return true;
            }

            var leftCounter = 0;
            var rightCounter = 0;
            foreach (var parenthesis in parentheses)
            {
                if (parenthesis == '(')
                {
                    leftCounter++;
                }
                else
                {
                    rightCounter++;
                }
                
                if (rightCounter > leftCounter)
                {
                    return false;
                }
            }

            return leftCounter == rightCounter;
        }
    }
}