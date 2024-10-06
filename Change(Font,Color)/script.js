var head = document.getElementById('head1')
var color = document.getElementById('color')
var font = document.getElementById('font')
color.style.padding = "10px";
color.style.border = "none";
color.style.border = "1px solid #ccc";
font.style.padding = "10px"
font.style.border = "none"
font.style.border = "1px solid #ccc"
function ChangeFont() {
    head.style.fontFamily = 'Cascadia Code'
}
function ChangeColor() {
    head.style.color = "blue"
}