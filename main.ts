let mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 f f 1 3 3 f f 1 3 3 3 3 
    3 3 3 3 f 1 f 3 3 f 1 f 3 3 3 3 
    3 3 3 3 f f f 3 3 f f f 3 3 3 3 
    3 3 3 3 f f f 3 3 f f f 3 3 3 3 
    3 3 3 3 f f f 3 3 f f f 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 f 3 3 3 3 f 3 3 3 3 3 
    3 3 3 3 3 3 f f f f 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    2 2 2 2 2 . . . . . . 2 2 2 2 2 
    2 2 2 2 2 . . . . . . 2 2 2 2 2 
    2 2 2 2 2 . . . . . . 2 2 2 2 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
let mySprite2 = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 d d d d d d d d 4 4 4 4 
    4 4 4 4 d f 1 d d 1 f d 4 4 4 4 
    4 4 4 4 d 1 f d d f 1 d 4 4 4 4 
    4 4 4 4 d f f d d f f d 4 4 4 4 
    4 4 4 4 d f f d d f f d 4 4 4 4 
    4 4 4 4 d d d d d d d d 4 4 4 4 
    4 4 4 4 d d d d d d d d 4 4 4 4 
    4 4 d d d d d d d d d d d d 4 4 
    4 4 d d d d f f f f f d d d 4 4 
    4 4 d d d d d d d d d d d d 4 4 
    5 5 5 5 5 . . . . . . 5 5 5 5 5 
    5 5 5 5 5 . . . . . . 5 5 5 5 5 
    5 5 5 5 5 . . . . . . 5 5 5 5 5 
    `, SpriteKind.Enemy)
