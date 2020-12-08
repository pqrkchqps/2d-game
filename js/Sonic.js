class Sonic extends Sprite {

    static src = 'http://dioxaz.free.fr/tlfz/sprites/persosaga/soniccdsprites.png'

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
            offSetY: 0,
            offSetX: 48*6,
            frames: 1,
            ticksPerFrame: [100],
            tickCount: 0,
            loop: true
        });
    }

    walk() {
        this.offSetX = 0;
        this.frames = 6;
        this.frameIndex = 0;
        this.row = 0;
        this.ticksPerFrame = [4,4,4,4,4,4];
        this.loop = false;
        this.nextAnimation = this.run;
    }

    run() {
        this.offSetX = 0;
        this.frames = 4;
        this.frameIndex = 0;
        this.row = 1;
        this.ticksPerFrame = [3,3,3,3];
        this.loop = true;
    }

    idle() {
        this.offSetX = this.width*7;
        this.frames = 4;
        this.frameIndex = 0;
        this.row = 0;
        this.ticksPerFrame = [12,12,12,12];
        this.loop = false;
        this.nextAnimation = this.stand;
    }
    stand() {
        this.offSetX = this.width*6;
        this.frames = 1;
        this.frameIndex = 0;
        this.row = 0;
        this.ticksPerFrame = [100];
        this.loop = false;
        this.nextAnimation = this.idle;
    }
}
