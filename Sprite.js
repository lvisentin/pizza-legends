class Sprite {
  constructor(config) {
    //Set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // Configure animation & initial state
    this.animations = config.animations || {
      idleDown: [[0, 0]],
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    // Reference the game object
    this.gameObject = config.gameObject;

    // Creating shadows
    this.shadow = new Image();
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };
    this.useShadow = true;
    if (this.useShadow) {
      this.shadow.src = "images/characters/shadow.png";
    }
  }

  draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 18;
    const position = [0, 0, 32, 32, x, y, 32, 32];

    this.isShadowLoaded && ctx.drawImage(this.shadow, ...position);
    this.isLoaded && ctx.drawImage(this.image, ...position);
  }
}
