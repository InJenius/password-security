var lowercase = 26;
var uppercase = 26;
var numeric = 10;
var punctuation = 10;
var length = 11;

var combinations = 0;

var choices = [lowercase, uppercase];
var options = 0;
for (const number of choices)
{
    options += number;
}

combinations = Math.pow(options,length);

//If greater than 1
if (choices.length > 1)
{
    for (let i = 0; i < choices.length; i++)
    {
        combinations -= Math.pow(choices[i],length);

        //If greater than 2
        if (choices.length > 2) { combinations -= Math.pow((options - choices[i]),length); }

        //If greater than 3
        if (choices.length > 3)
        {
            for (let j = i + 1; j < choices.length; j++)
            {
                combinations += Math.pow((choices[i] + choices[j]),length);
            }
        }
    }
}

console.log("Selected: " + choices.length);
console.log("Combinations: " + combinations);