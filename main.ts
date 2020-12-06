namespace SpriteKind {
    export const Dog = SpriteKind.create()
    export const NoTumbleWeed = SpriteKind.create()
    export const HappyDog = SpriteKind.create()
    export const RunningDog = SpriteKind.create()
    export const CORGUY = SpriteKind.create()
    export const camera = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tumbleWeed.isHittingTile(CollisionDirection.Bottom) && !(introScene)) {
        tumbleWeed.vy = -160
    }
})
function corGuyIntroScene () {
    introScene = true
    CorGuyTheDoorGuy = sprites.create(img`
        .............................fff....
        ..fff......................ff44f....
        ..f44fff.................ff4444f....
        ...f444ff................f44334f....
        ...f4344ff...ffffff.....f444344f....
        ...f43344fffff44444ffff.f433344f....
        ...f44334ff44444444444fff44344ff....
        ...ff4444444444444444444f4444f......
        ....ff4444444444444444444444f.......
        .....ff44444444444444444444ff.......
        .....f444444f444444f4444444f........
        .....f444444f444444f4444444f........
        .....f44ddd4444444444ddd44f.........
        .....f44dddd44444444dddd44ff........
        .....f44ddddddfffdddddddd44f........
        ...fff44dddddddfddddddddd44ff.......
        ...f4444ddddffddddffddddd444f.......
        ...f444ddddddffffffdddddd44ff.......
        ....f44dddddddddddddddddd44f........
        ....f4dddddddddddddddddd444f........
        ...f44dddddddddddddddddd444f........
        ...f4ddddddddddddddddddd444ff.......
        ...f4ddddddddddddddddd44d444ff......
        ...f44dddddddddddddddd44d4444fff....
        ...f44dddddddddddddddd444d44444ff...
        ...ff44dddddddddddddd44444d444444ff.
        ....f44fdddddddddfdd444f44d4444444ff
        ....f44ffdddddddfddd44ff44444444444f
        ....ff44fddddddfddd444f4444444444dff
        .....f44ffdddddfd4444f444444f444ddf.
        ....fff4dfffffffd44fff44444ff44dddf.
        ....f444ff.....fd4ffffffffff4dddfff.
        ....fffff......ffff........ffffff...
        `, SpriteKind.CORGUY)
    tiles.placeOnRandomTile(CorGuyTheDoorGuy, myTiles.tile7)
    CorGuyTheDoorGuy.y = 0
    CorGuyTheDoorGuy.ay = 500
    scene.centerCameraAt(500, 150)
}
function makeDogs () {
    dogsLookLike = [
    img`
        . . . . 1 . . . . 1 . . . . . . 
        . . . . 1 1 . . 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 f f 1 . . . . . . 
        . . . . f 1 f 1 f . . . . f . . 
        . . . . 1 1 f f f . . . . . f . 
        . . . . f 1 1 1 1 1 . . . . f . 
        . . . . . . 1 1 1 1 1 . . . f . 
        . . . . . . 1 1 1 1 1 1 . f f . 
        . . . . . . 1 1 1 1 1 1 1 f f . 
        . . . . . f 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 f f 1 1 1 . 
        . . . f 1 1 1 1 1 1 f 1 1 1 1 . 
        . . . f 1 1 1 1 1 f 1 1 1 1 f . 
        . . . f 1 1 1 1 1 f 1 1 1 1 f . 
        . . f 1 1 1 1 f f f 1 1 1 1 f . 
        `,
    img`
        . . . . . . . . . . . . f f e . . . 
        . . . . . . . . . . . . f f 1 e . . 
        . . . . . . . . . . . . e e e e e f 
        . . . . . . . . . . . . e e e e e e 
        . . . . . . . . . . . . e e e . . . 
        . . e e e e e e e e e e e e e . . . 
        . e e e e e e e e e e e e e e . . . 
        e . e e e e e e e e e e e e e . . . 
        . . e e e e e e e e e e e e . . . . 
        . . e c . . . . . . . c . e . . . . 
        . . e e c . . . . . . c c e e . . . 
        `,
    img`
        . . . . . . . . . . . e . . . . 
        . e . . . . . . . . . e e e . . 
        e . . . . . . . . . e e 1 f e e 
        e . . . . . . . . . e e e c c . 
        . e e e e e e e e e e e c . . . 
        . . . e e . . c c e e e . . . . 
        . . . e c . . d d c e e . . . . 
        . . . e . . . . . d c e . . . . 
        . . . e . . . . . . . e . . . . 
        . . . c e . . . . . . c e . . . 
        `,
    img`
        . . . . . . . . 1 1 1 1 1 1 1 . 
        . . . . . . . 1 1 d 1 1 1 1 1 . 
        . . . . . . . 1 1 d 1 b 1 b 1 . 
        . . . . . . . . . 1 1 1 1 1 1 3 
        . . . . 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 d d d . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 d d . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 d d . 
        1 . 1 1 1 1 1 1 1 1 1 1 1 1 d . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 b . 
        . . . 1 1 1 b . . . . 1 1 b . . 
        . . . 1 . b . . . . . 1 . b . . 
        `,
    img`
        ....................
        ....................
        ....................
        ............eeeee...
        ...........eddddde..
        ...........eddddde..
        eeeeeeeeeeeeddfdfee.
        ddddddddddddddddddde
        eeedddddddddddddddde
        ..edddddddddddddddde
        ..eddddddddddddd3ee.
        ..edddddddddddde....
        ..eddddddddddde.....
        ..eedede.edede......
        ..eedede.edede......
        ..eeeeee.eeeee......
        `,
    img`
        ..dddddd........
        .d111111d.......
        d11111111d......
        d1f11f1d1d......
        d111111d1d......
        d11d1111d.......
        df1d111d........
        .dd1111d........
        d1111111d.......
        d11111111d......
        d111111111d.....
        d1111111111d....
        d111111d111d....
        .d1111d1111d....
        .d1111d11111d.dd
        ..d111d11111d..d
        ..d11d1d11111d.d
        ..d11d1dd1111dd.
        ..d1d11dd1111d..
        ..d1d11d1d1111d.
        .d11d1dd11d111d.
        `
    ]
    for (let index = 0; index <= 10; index++) {
        daaaaawg = sprites.create(dogsLookLike[randint(0, dogsLookLike.length - 1)].clone(), SpriteKind.Dog)
        daaaaawg.ay = 300
        tiles.placeOnRandomTile(daaaaawg, myTiles.tile4)
        daaaaawg.z = 100
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dog, function (sprite, otherSprite) {
    dogIsHoldingMe = otherSprite
    sprite.setKind(SpriteKind.NoTumbleWeed)
    sprite.follow(otherSprite)
    sprite.lifespan = 1000
    controller.moveSprite(sprite, 0, 0)
    if (Math.percentChance(50)) {
        otherSprite.vx = -100
    } else {
        otherSprite.vx = 100
    }
    otherSprite.setKind(SpriteKind.RunningDog)
})
sprites.onDestroyed(SpriteKind.NoTumbleWeed, function (sprite) {
    dogIsHoldingMe.vx = 0
    dogIsHoldingMe.setKind(SpriteKind.HappyDog)
    tumbleWeed = sprites.create(img`
        . . 4 4 4 5 5 4 4 . . . . . . . 
        . 5 5 4 4 4 5 5 4 4 5 4 4 . . . 
        . 4 5 5 4 4 4 5 4 4 4 5 4 4 . . 
        4 4 4 4 4 4 4 4 5 4 4 5 4 4 5 . 
        4 5 5 5 4 4 4 4 5 4 4 5 4 4 5 4 
        5 5 4 5 5 4 4 4 5 4 4 4 4 4 5 4 
        4 4 4 4 4 4 4 4 5 4 5 4 4 5 5 4 
        4 4 4 4 4 4 4 4 4 4 5 4 4 4 4 4 
        4 5 5 4 4 4 4 4 5 5 5 4 5 4 4 5 
        4 5 4 4 4 5 4 4 5 5 4 5 5 4 4 5 
        4 5 4 4 4 5 4 4 4 4 4 4 4 4 5 5 
        5 5 4 4 4 5 4 4 4 4 4 4 4 5 5 4 
        5 4 4 4 4 5 5 4 4 4 4 4 5 5 4 4 
        . 4 5 4 4 4 5 5 5 5 5 4 4 4 4 . 
        . . 5 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . 5 5 5 4 4 4 4 4 5 5 5 5 5 . 
        `, SpriteKind.Player)
    tumbleWeed.setPosition(sprite.x, sprite.y)
    tumbleWeed.ay = 500
    controller.moveSprite(tumbleWeed, 100, 0)
    scene.cameraFollowSprite(tumbleWeed)
    dogIsHoldingMe.startEffect(effects.hearts)
    if (sprites.allOfKind(SpriteKind.Dog).length <= 0) {
        effects.hearts.startScreenEffect()
        story.queueStoryPart(function () {
            introScene = true
            controller.moveSprite(tumbleWeed, 0, 0)
            tumbleWeed.ay = 0
            tumbleWeed.vy = 0
            story.spriteMoveToTile(tumbleWeed, tiles.getTileLocation(25, 11), 100)
        })
        story.queueStoryPart(function () {
            scene.cameraFollowSprite(secretCamera)
            story.printDialog("You have done well. All the pups are now happy", 50, 60, 90, 90)
        })
        story.queueStoryPart(function () {
            story.printDialog("You've earned a favor from me, Cor-Guy the Door Guy. Use it as you will", 50, 60, 90, 90)
        })
        story.queueStoryPart(function () {
            CorGuyTheDoorGuy.ay = 0
            CorGuyTheDoorGuy.vy = -20
            CorGuyTheDoorGuy.destroy(effects.smiles, 1000)
            pause(1000)
        })
        story.queueStoryPart(function () {
            game.over(true)
        })
    }
})
scene.onHitWall(SpriteKind.CORGUY, function (sprite, location) {
    if (introScene) {
        introScene = false
        story.queueStoryPart(function () {
            story.printDialog("Hello. I'm Cor-guy the Door Guy. And you are a tumbleweed! ", 50, 90, 90, 90)
        })
        story.queueStoryPart(function () {
            tumbleWeed = sprites.create(img`
                . . 4 4 4 5 5 4 4 . . . . . . . 
                . 5 5 4 4 4 5 5 4 4 5 4 4 . . . 
                . 4 5 5 4 4 4 5 4 4 4 5 4 4 . . 
                4 4 4 4 4 4 4 4 5 4 4 5 4 4 5 . 
                4 5 5 5 4 4 4 4 5 4 4 5 4 4 5 4 
                5 5 4 5 5 4 4 4 5 4 4 4 4 4 5 4 
                4 4 4 4 4 4 4 4 5 4 5 4 4 5 5 4 
                4 4 4 4 4 4 4 4 4 4 5 4 4 4 4 4 
                4 5 5 4 4 4 4 4 5 5 5 4 5 4 4 5 
                4 5 4 4 4 5 4 4 5 5 4 5 5 4 4 5 
                4 5 4 4 4 5 4 4 4 4 4 4 4 4 5 5 
                5 5 4 4 4 5 4 4 4 4 4 4 4 5 5 4 
                5 4 4 4 4 5 5 4 4 4 4 4 5 5 4 4 
                . 4 5 4 4 4 5 5 5 5 5 4 4 4 4 . 
                . . 5 4 4 4 4 4 4 4 4 4 4 4 4 . 
                . . 5 5 5 4 4 4 4 4 5 5 5 5 5 . 
                `, SpriteKind.Player)
            tiles.placeOnRandomTile(tumbleWeed, myTiles.tile3)
            tumbleWeed.ay = 500
            pause(500)
        })
        story.queueStoryPart(function () {
            makeDogs()
            story.printDialog("Your mission is to play with all the good pups who live on these plains", 50, 60, 90, 90)
        })
        story.queueStoryPart(function () {
            secretCamera = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.camera)
            secretCamera.setPosition(400, 150)
            story.spriteMoveToLocation(secretCamera, 60, 150, 60)
            scene.cameraFollowSprite(secretCamera)
        })
        story.queueStoryPart(function () {
            story.spriteMoveToLocation(secretCamera, 400, 150, 100)
        })
        story.queueStoryPart(function () {
            scene.cameraFollowSprite(tumbleWeed)
            controller.moveSprite(tumbleWeed, 100, 0)
            haveJumped = false
        })
        story.queueStoryPart(function () {
            story.printDialog("Good luck!", 50, 60, 90, 90)
        })
    }
})
let haveJumped = false
let secretCamera: Sprite = null
let dogIsHoldingMe: Sprite = null
let daaaaawg: Sprite = null
let dogsLookLike: Image[] = []
let CorGuyTheDoorGuy: Sprite = null
let introScene = false
let tumbleWeed: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1e001000020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202040404040404040404040404040404040404040404040404040304070605010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ...........................222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile8], TileScale.Sixteen))
corGuyIntroScene()
game.onUpdateInterval(500, function () {
    if (dogIsHoldingMe) {
        if (Math.percentChance(50)) {
            dogIsHoldingMe.vx = -1 * dogIsHoldingMe.vx
            dogIsHoldingMe.image.flipX()
        }
    }
})
