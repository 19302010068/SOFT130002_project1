function updateCities()
{
    hideAll();
    switch (document.querySelector("[name=country]>select").value.toString())
    {
        case "Any":
            showAny();
            break;
        case "China":
            showChina();
            break;
        case "Japan":
            showJapan();
            break;
        case "Italy":
            showItaly();
            break;
        case "US":
            showUS();
            break;
    }
}

function hideAll()
{
    document.querySelector("[name=city-any]").style.display = "none";
    document.querySelector("[name=city-china]").style.display = "none";
    document.querySelector("[name=city-japan]").style.display = "none";
    document.querySelector("[name=city-italy]").style.display = "none";
    document.querySelector("[name=city-us]").style.display = "none";
}

function showAny()
{
    document.querySelector("[name=city-any]").style.display = "inline-block";
}

function showChina()
{
    document.querySelector("[name=city-china]").style.display = "inline-block";
}

function showJapan()
{
    hideAll();
    document.querySelector("[name=city-japan]").style.display = "inline-block";
}

function showItaly()
{
    hideAll();
    document.querySelector("[name=city-italy]").style.display = "inline-block";
}

function showUS()
{
    hideAll();
    document.querySelector("[name=city-us]").style.display = "inline-block";
}