export default class Barres {
    constructor(game) {
        this.game = game
        this.spaceBetweenBarres = 100
        this.x = game.canvas.width
        this.maxOffset = 0
        this.width = 230
        this.height = 23
        this.right = -Math.floor(Math.random() * 280) - 25
        this.left = this.right + this.width + this.spaceBetweenBarres
        this.barresRightFrame = {
            sx: 647,
            sy: 1881,
            sw: this.width ,
            sh: this.height,
            dx: this.right,
            dy:50,
            dw: this.width,
            dh: this.height
        }
        this.barresLeftFrame = {
            sx: 647,
            sy: 1881,
            sw: this.width ,
            sh: this.height,
            dx: this.left,
            dy:50,
            dw: this.width,
            dh: this.height
        }
        this.speed = 1

    }

    update(){
        if (this.barresRightFrame.dy <= this.maxOffset){
            this.barresRightFrame.dy = 0
        }
        this.barresRightFrame.dy += this.speed
        if (this.barresLeftFrame.dy <= this.maxOffset){
            this.barresLeftFrame.dy = 0
        }
        this.barresLeftFrame.dy += this.speed
        this.render()
    }

    render(){
        this.game.renderSpriteFrame(this.barresRightFrame)
        this.game.renderSpriteFrame(this.barresLeftFrame)
    }
}