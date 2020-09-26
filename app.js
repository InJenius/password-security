function assessSettings()
{
    var lowercase = 26;
    var uppercase = 26;
    var numeric = 10;
    var punctuation = 10;

    //Max is 165
    var length = 8

    var combinations = 0;
    var choices = [lowercase, uppercase];
    var options = 0;
    for (const number of choices)
    {
        options += number;
    }

    baseCombinations = Math.pow(options,length);
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

    //500,000 passwords a second
    //Time in seconds
    timeToCrack = combinations * 0.000002 / 2 / 60;
    let time = secondsToString(timeToCrack);

    console.log("Selected: " + choices.length);
    console.log("Combinations: " + numberWithCommas(combinations));
    console.log("Base Combinations: " + numberWithCommas(baseCombinations));
    console.log("Difference: " + numberWithCommas(baseCombinations - combinations));
}

//https://stackoverflow.com/questions/8211744/convert-time-interval-given-in-seconds-into-more-human-readable-form
function secondsToString(seconds)
{
    var numyears = Math.floor(seconds / 31536000);
    var numdays = Math.floor((seconds % 31536000) / 86400); 
    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
    return numyears + " years, " +  numdays + " days, " + numhours + " hours, " + numminutes + " minutes, " + numseconds + " seconds";
}

//https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) 
{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

assessSettings();