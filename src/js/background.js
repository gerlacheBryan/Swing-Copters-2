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
    x: 0,
    y: 0,

    update() {
        this.game.renderSpriteFrame(this.frame)

    },

    init(game) {
        this.game = game
        this.frame.dw = this.frame.sw
        this.frame.dh = this.frame.sh

    },
}

export default background

