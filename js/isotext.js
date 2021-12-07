function text3d(elemSelector, par1, par2, colorSide) {
    var text = document.getElementById(elemSelector);
    var shadow = "";
    for (var i = 0; i < par1; i++) {
        shadow += (shadow ? "," : "") + -i * 1 + "px " + i * par2 + colorSide;
    }
    text.style.textShadow = shadow;
}

text3d("title-3d", 12, 1, "px 0 #808080")
text3d("hey", 15, 1, "px 0 #808080")
text3d("web", 15, 1, "px 0 #808080")
text3d("dev", 8, 3, "px 0 #808080")
text3d("htmlang", 15, 1, "px 0 #808080")
text3d("jslang", 15, 1, "px 0 #808080")
text3d("csslang", 15, 1, "px 0 #808080")
text3d("title-tricks", 12, 1, "px 0 #808080")
text3d("title-social", 12, 1, "px 0 #808080")
text3d("neon-text", 5, 1, "px 0 #d39bfc")