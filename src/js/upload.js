function setup()
{
    window.onload = () => window.onresize = () => resize();
}

function chooseImage()
{
    document.querySelector("[type=file]").click();
}

function updateForm()
{
    const file = document.querySelector("[type=file]").files.item(0);
    for (const node of document.querySelectorAll("form>*:nth-child(n+2)"))
        node.style.display = (file === null) ? "none" : "block";

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
    {
        with (document.querySelector("form>img"))
        {
            src = reader.result;
            alt = file.name;
        }
        resizeImage();
    }
}

function resize()
{
    resizeImage();
    resizeTextArea();
}

function resizeImage()
{
    document.querySelector("form>img").style.maxWidth
        = document.querySelector("form>div").scrollWidth + "px";
}

function resizeTextArea()
{
    document.querySelector("form textarea").style.maxWidth
        = Math.min(document.querySelector("form>div").scrollWidth, 623) + "px";
}