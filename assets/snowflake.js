function getRandomSize() {

  let r = pow(random(0, 1), 3);
  return constrain(r * 32, 2, 32);

  // let r = randomGaussian() * 2;
  // return constrain(abs(r * r), 2, 36);

  // while (true) {
  //   let r1 = random(1);
  //   let r2 = random(1);
  //   if (r2 > r1) {
  //     return r1 * 36
  //   }
  // }
}

class Snowflake {

  constructor(sx, sy, img) {
    let x = sx || random(width);
    let y = sy || random(-100, -10);
    //random snowflake img
    this.img = img;
    //snowflake position
    this.pos = createVector(x, y);
    //snowflake velocity
    this.vel = createVector(0, 0);
    //snowflake acceleration
    this.acc = createVector();
    //snowflake size
    this.r = getRandomSize();
    //terminal velocity
    this.terminal = this.r
  }

  applyForce(force) {
    //parallax effect hack
    let f = force.copy();
    f.mult(this.r * 0.3)

    // let f = force.copy();
    // f.div(this.mass);
    this.acc.add(force);
  }

  randomize() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }



  update() {
    //adds velocity to the position
    this.vel.limit(this.r)
    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel)
    this.acc.mult(0);

    if (this.pos.y > height + this.r) {
      this.randomize()
    }
  }

  render() {
    // stroke(255);
    // strokeWeight(this.r);
    // point(this.pos.x, this.pos.y)
    imageMode(CENTER);
    image(this.img, this.pos.x, this.pos.y, this.r, this.r)
  }

  // offScreen() {
  //   return (this.pos.y > height + this.r)
  // }











}