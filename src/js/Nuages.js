export default class Nuages {
    constructor(game) {
        this.game = game
        this.nuagesFrame ={
            sx: 647,
            sy: 3,
            sw: 227,
            sh: 197,
            dx: 0,
            dy: 0,
            dw: 227,
            dh: 197,
        }
        this.maxOffset = 0,
        this.speed = 3
    }

    update() {
        if (this.nuagesFrame.dy <= this.maxOffset){
            this.nuagesFrame.dy = 0
        }
        this.nuagesFrame.dy += this.speed
        this.render()
    }

    render(){
        this.game.renderSpriteFrame(this.nuagesFrame)
    }
}