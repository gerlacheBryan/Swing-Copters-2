import bg from "./bg";

const gameController = {
    init(game) {
        window.addEventListener('keydown',(e)=>{
            if (e.key === 'z'){
                bg.goUp()
            }
            if (e.key === 'a'){
                bg.goRight()
            }
            if (e.key === 'e'){
                bg.goLeft()
            }

        })
    }
}

export default gameController