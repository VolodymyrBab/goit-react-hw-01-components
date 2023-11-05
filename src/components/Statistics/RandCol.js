export default function getRandColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    let r = color.slice(1,2);
    let g = color.slice(2,3);
    let b = color.slice(3,4);
  
    r = parseInt(r+r, 16);
    g = parseInt(g+g, 16);
    b = parseInt(b + b, 16);
  
    return `rgba(${r}, ${g}, ${b}, 0.4)`
  
  }
  
  // console.log(getRandomColor());