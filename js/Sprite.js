class Sprite {
    constructor(options) {
        this.context = options.context;
        this.image = options.image; // Path to image sprite sheet
        this.x = options.x; // Coordinates on canvas
        this.y = options.y;
        this.width = options.width; // Size of sprite frame
        this.height = options.height;
        this.frames = options.frames; // Number of frames in a row
        this.frameIndex = options.frameIndex; // Current frame
        this.row = options.row; // Row of sprites
        this.offSetX = options.offSetX; //Start of Spritesheet position x
        this.offSetY = options.offSetY; //Start of Spritesheet position Y
        this.ticksPerFrame = options.ticksPerFrame; // Speed of animation
        this.tickCount = options.tickCount; // How much time has passed
        this.loop = options.loop;
        this.nextAnimation = options.nextAnimation;
    }

    update() {
        this.tickCount += 1;
        if (this.tickCount > this.ticksPerFrame[this.frameIndex]) {
            this.tickCount = 0;
            if (this.frameIndex < this.frames - 1) {
                this.frameIndex += 1;
            } else if (this.loop){
                this.frameIndex = 0;
            } else {
                this.nextAnimation();
            }
        }
    }

    render() {
        this.context.drawImage(
            this.image,
            this.frameIndex * this.width + this.offSetX, // The x-axis coordinate of the top left corner
            this.row * this.height + this.offSetY, // The y-axis coordinate of the top left corner
            this.width, // The width of the sub-rectangle
            this.height, // The height of the sub-rectangle
            this.x, // The x coordinate
            this.y,// The y coordinate
            this.width, // The width to draw the image
            this.height // The width to draw the image
        );
    }
}
