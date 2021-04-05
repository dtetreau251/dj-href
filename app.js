
const colors = ["AntiqueWhite", "AliceBlue", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "BlueViolet", "Brown", "Burlywood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green","GreenYellow","HoneyDew", "HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid", "MediumPurple","MediumSeaGreen","MediumSlateBlue", "MediumSpringGreen","MediumTurqiose","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin", "NavajoWhite","Navy","Oldlace", "Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple", "RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","Seashell","Sienna", "Silver","SkyBlue","SlateBlue","SlateGrey","Snow","SpringGreen","SteelBlue","Tan", "Teal","Thistle", "Tomato","Turquoise", "Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen","" ];
const color = document.querySelector(".color");

setInterval(() => {
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
}, 3000);

const getRandomNumber = () => {
   return Math.floor(Math.random() * colors.length);
}

