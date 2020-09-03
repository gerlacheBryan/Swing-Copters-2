import ground from "./ground";
import background from "./background";
import bg from "./bg";

const game = {
    canvas: document.getElementById('game'),
    context: null,
    spriteSheetSrc : './resources/sprite.png',
    sprite : new Image(),

    init () {
        this.context = this.canvas.getContext('2d')
        this.sprite.src = this.spriteSheetSrc
        this.sprite.addEventListener('load', ()=>{
            background.init(this)
            ground.init(this)
            bg.init(this)
        })
        this.animate()
    },

    animate () {
        window.requestAnimationFrame(() => {
            this.animate()
        })
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ground.update()
        background.update()
        bg.update()


    },
    renderSpriteFrame(coordinates) {
        this.context.drawImage(this.sprite,
            coordinates.sx,
            coordinates.sy,
            coordinates.sw,
            coordinates.sh,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh,
        )
    },
}

game.init()