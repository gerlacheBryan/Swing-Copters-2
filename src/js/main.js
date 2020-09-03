import ground from "./ground";
import background from "./background";
import bg from "./bg";
import gameController from "./gameController";
import Nuages from "./Nuages";
import Barres from "./Barres";

const game = {
    canvas: document.getElementById('game'),
    context: null,
    spriteSheetSrc : './resources/sprite.png',
    sprite : new Image(),
    nuages: [],
    maxNuages: 3,
    barres: [],
    maxBarres: 5,
    frameCounter: 0,
    frameInterval: 80,
    requestId: 0,


    init () {
        this.context = this.canvas.getContext('2d')
        this.sprite.src = this.spriteSheetSrc
        this.sprite.addEventListener('load', ()=>{
            gameController.init(this)
            background.init(this)
            ground.init(this)
            bg.init(this)
            this.animate()
        })

    },

    animate () {
       this.requestId = window.requestAnimationFrame(() => {
            this.animate()
        })
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        background.update()
        if (this.frameCounter++ > this.frameInterval){
            if (this.barres.length >= this.maxBarres)
                this.barres.splice(0,1)
            this.barres.push(new Barres(this))
            if (this.nuages.length >= this.maxNuages)
                this.nuages.splice(0,1)
            this.nuages.push(new Nuages(this))
            this.frameCounter = 0
        }
        this.barres.forEach(barre => {
            barre.update()
        })
        this.nuages.forEach(nuage => {
            nuage.update()
        })
        ground.update()
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

    cancelAnimation() {
        window.cancelAnimationFrame(this.requestId)
    }
}

game.init()