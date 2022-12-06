game.onUpdateInterval(500, function() {
    let _star = sprites.create(assets.image`star`, SpriteKind.Player)
    _star.setFlag(SpriteFlag.AutoDestroy, true)
    _star.setVelocity(100,0)
    _star.setPosition(0, Math.randomRange(0,120))
});
