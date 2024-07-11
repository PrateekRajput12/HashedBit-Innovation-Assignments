document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.getElementById('text-container');
    const colorChangeBtn = document.getElementById('colorchange');
    const colorBox = document.getElementById('colorbox');
    const fontSizeSlider = document.getElementById('fontsize');
    const underlineBtn = document.getElementById('underline');
    const italicBtn = document.getElementById('italic');
    const boldBtn = document.getElementById('bold');
    const fontList = document.getElementById('list');
    const getStyleBtn = document.getElementById('getstyle');
    const cssProps = document.getElementById('css-props');

    // Initialize default values
    textContainer.style.fontSize = fontSizeSlider.value + 'px';

    // Change text color
    colorChangeBtn.addEventListener('click', () => {
        textContainer.style.color = colorBox.value;
    });

    // Change font size
    fontSizeSlider.addEventListener('input', () => {
        textContainer.style.fontSize = fontSizeSlider.value + 'px';
    });

    // Toggle underline
    underlineBtn.addEventListener('click', () => {
        toggleStyle('textDecoration', 'underline');
    });

    // Toggle italic
    italicBtn.addEventListener('click', () => {
        toggleStyle('fontStyle', 'italic');
    });

    // Toggle bold
    boldBtn.addEventListener('click', () => {
        toggleStyle('fontWeight', 'bold');
    });

    // Change font family
    fontList.addEventListener('change', () => {
        textContainer.style.fontFamily = fontList.value;
    });

    // Get CSS properties
    getStyleBtn.addEventListener('click', () => {
        const styles = window.getComputedStyle(textContainer);
        const properties = [
            `color: ${styles.color}`,
            `font-size: ${styles.fontSize}`,
            `text-decoration: ${styles.textDecoration}`,
            `font-style: ${styles.fontStyle}`,
            `font-weight: ${styles.fontWeight}`,
            `font-family: ${styles.fontFamily}`
        ];
        cssProps.textContent = properties.join('; ');
    });

    // Helper function to toggle styles
    function toggleStyle(styleProp, styleValue) {
        if (textContainer.style[styleProp] === styleValue) {
            textContainer.style[styleProp] = 'normal';
        } else {
            textContainer.style[styleProp] = styleValue;
        }
    }
});
