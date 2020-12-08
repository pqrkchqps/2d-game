class Coin extends Sprite {

    static src = 'https://github.com/demyanovs/js-canvas-sprite-animation/blob/master/images/coin_spritesheet.png?raw=true';

    constructor(x, y, context, image) {
        super({
            context: context,
            image: image,
            x: x,
            y: y,
            width: 48,
            height: 48,
            frameIndex: 0,
            row: 0,
            offSetX: 0,
            offSetY: 0,
            tickCount: 0,
            ticksPerFrame: [3,5,3,5],
            frames: 4,
            loop: true
        });
    }
}
