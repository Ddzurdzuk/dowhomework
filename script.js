document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    
   
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        const randomNumber = Math.floor(Math.random() * 100) + 1; 
        div.textContent = randomNumber;
        div.classList.add('number-div');
        
    
        if (randomNumber < 31) {
            div.classList.add('green');
        } else if (randomNumber > 70) {
            div.classList.add('red');
        }
        
        container.appendChild(div);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const colorDiv = document.getElementById('colorDiv');

   
    const getRandomByte = () => Math.floor(Math.random() * 256);

   
    const rgbToHex = (r, g, b) => {
        return '#' + [r, g, b]
            .map(x => x.toString(16).padStart(2, '0'))
            .join('');
    };

   
    const getColorShade = (r, g, b) => {
        const max = Math.max(r, g, b);
        if (max === r && r - g > 50 && r - b > 50) return 'красный';
        if (max === g && g - r > 50 && g - b > 50) return 'зеленый';
        if (max === b && b - r > 50 && b - g > 50) return 'синий';
        if (r > 200 && g > 200 && b < 100) return 'желтый';
        if (r > 200 && b > 200 && g < 100) return 'розовый';
        if (b > 200 && g > 200 && r < 100) return 'голубой';
        if (r < 50 && g < 50 && b < 50) return 'черный';
        if (r > 200 && g > 200 && b > 200) return 'белый';
        return 'серый';
    };

    colorDiv.addEventListener('click', () => {
        const r = getRandomByte();
        const g = getRandomByte();
        const b = getRandomByte();
        const hexColor = rgbToHex(r, g, b);
        const shade = getColorShade(r, g, b);
        const brightness = r + g + b;
        const textColor = brightness > 382 ? 'black' : 'white';
        colorDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        colorDiv.style.color = textColor;
        colorDiv.innerHTML = `
            RGB: ${r}, ${g}, ${b}<br>
            HEX: ${hexColor}<br>
            Оттенок: ${shade}
        `;
    });
});
