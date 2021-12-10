exports.day2_1 = (input) => {
    const pos = new Position();
    for (const row of input) {
        let [direction, delta] = row.split(' ');
        pos.move(direction, Number(delta));
    }
    console.log(pos);
    return pos.x * pos.y;
}

exports.day2_2 = (input) => {
    const pos = new Position2();
    for (const row of input) {
        let [direction, delta] = row.split(' ');
        pos.move(direction, Number(delta));
    }
    console.log(pos);
    return pos.x * pos.y;
}

class Position {
    x = 0;
    y = 0;

    move(direction, delta) {
        switch (direction) {
            case 'forward':
                this.x += delta;
                break;
        
            case 'down':
                this.y += delta;
                break;
        
            case 'up':
                this.y -= delta;
                break;
        }
    }
}

class Position2 {
    x = 0;
    y = 0;
    aim = 0;

    move(direction, delta) {
        switch (direction) {
            case 'forward':
                this.x += delta;
                this.y += this.aim * delta;
                break;
        
            case 'down':
                this.aim += delta;
                break;
        
            case 'up':
                this.aim -= delta;
                break;
        }
    }
}