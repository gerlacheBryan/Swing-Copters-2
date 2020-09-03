const ground = {
    game : null,
    frame:{
      sx:259 ,
      sy:7,
      sw: 384,
      sh: 237,
      dx:0,
      dy:400,
      dw:384,
      dh:200,
    },

    update(){
      this.game.renderSpriteFrame(this.frame)
    },

    init(game){
        this.game = game
    }

}

export default ground