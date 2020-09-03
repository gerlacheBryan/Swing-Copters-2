const background = {
    game: null,
    frame: {
        sx: 647,
        sy: 3,
        sw: 227,
        sh: 197,
        dx: 0,
        dy: 0,
        dw: 0,
        dh: 0,
    },
    speed: 3,
    maxOffset: 0,

    update() {
        if (this.frame.dy <= this.maxOffset){
            this.frame.dy = 0
        }
        this.frame.dy += this.speed
        this.game.renderSpriteFrame(this.frame)

    },

    init(game) {
        this.game = game
        this.frame.dw = this.frame.sw
        this.frame.dh = this.frame.sh

    },
}

export default background

