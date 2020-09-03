const bg = {
    game: null,
    frames: [
        {sx: 8, sy: 1479},
        {sx: 56, sy: 1479},
        {sx: 105, sy: 1479},
        {sx: 153, sy: 1479},
        {sx: 200, sy: 1479},
        {sx: 246, sy: 1479},
        {sx: 296, sy: 1479}

    ],
    maxAnimationStep: 0,
    animationStep: 0,
    counterInterval: 0,
    maxInterval: 10,
    width: 33,
    height: 32,
    y: 450,
    x: 130,
    upSpeed: 0,
    maxUpSpeed: 7,


    init(game) {
        this.game = game
        this.maxAnimationStep = this.frames.length - 1
    },

    update() {
        this.render()
    },

    render() {

        this.counterInterval++
        if (!(this.counterInterval % this.maxInterval)) {
            this.counterInterval = 0
            this.animationStep = this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0
        }
        this.game.renderSpriteFrame(
            {
                sx: this.frames[this.animationStep].sx,
                sy: this.frames[this.animationStep].sy,
                sw: this.width,
                sh: this.height,
                dx: this.x,
                dy: this.y,
                dw: this.width,
                dh: this.height,
            }
        )

    },

    goUp() {
        this.y = this.game.canvas.height / 2
        this.render()
        console.log(this.y)
    },
    goRight() {
        this.x += 9
        this.render()
        console.log(this.x)
    },
    goLeft() {
        this.x -= 9
        this.render()
        console.log(this.x)
    },




}

export default bg