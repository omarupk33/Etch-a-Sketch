const container = document.getElementById('container')
const Button = document.getElementById('Button')


// Building the grid and adding pixels
function grid(number_of_pixel = 16){
    for (let i = 0; i<= number_of_pixel*number_of_pixel; i++){
        let pixels = document.createElement('div')
        pixels.className = 'pixel'
        pixels.style.setProperty('width', `calc(100%/${number_of_pixel})`)
        container.appendChild(pixels)
        }
    }
grid()

// Ghange color when hovering
function hovering_effect(color='white'){
    const all_div = document.querySelectorAll('#container .pixel')
    all_div.forEach((Pixel)=>{
        Pixel.addEventListener('mouseenter',()=>{
            Pixel.style.backgroundColor = color
        })
    })
}

hovering_effect()


// Changing the grid's dimensions with a button
Button.addEventListener('click', ()=> {
    let Pixel_num = parseInt(prompt('The number of pixels per side(default is 16): '))
    if ( Pixel_num >= 16 && Pixel_num <= 100){ //There is an issue here. I need the Pixel_num between 16 and 100
    container.innerHTML = ''
    grid(Pixel_num)
    hovering_effect()
    }
    else{
        alert('The grid should be more 16x16 and less than or equal 100x100')
        skip
    }
})
