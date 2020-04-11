function speak()
{
    alert("Done.");
}

function page(int)
{
    for (let i = 1; i <= 5; i++)
    {
        with (document.querySelector("#pages>input[value='" + i + "']").style)
        {
            if (i === int)
            {
                fontSize = "12pt";
                fontWeight = "bold";
            }
            else
            {
                fontSize = "10pt";
                fontWeight = "normal";
            }
        }
    }
}

function toggleStar(int)
{
    with (document.querySelector("[onclick='toggleStar(" + int + ")']"))
    {
        if (alt === "Star")
        {
            src = "../../img/icons/5.png";
            alt = "Unstar";
        }
        else
        {
            src = "../../img/icons/6.png";
            alt = "Star";
        }
    }
}