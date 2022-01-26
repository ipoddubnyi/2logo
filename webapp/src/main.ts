import template from "lodash/template";

const outputElement = document.getElementById("app");
if (outputElement) {
    const compiled = template(`
        <h1><%- heading %></h1>
        Current date and time: <%- dateTimeString %>
    `.trim());

    outputElement.innerHTML = compiled({
        heading: "2LOGO",
        dateTimeString: new Date().toISOString(),
  });
}

//

class Turtle {
    private context: CanvasRenderingContext2D;
    private context2: CanvasRenderingContext2D;
    private x = 0;
    private y = 0;
    private angle = 90;
    private img: HTMLImageElement;
    private imgLoaded = false;

    public constructor(canvasId: string) {
        const drawingCanvas = document.getElementById(canvasId) as HTMLCanvasElement;
        if (!drawingCanvas || !drawingCanvas.getContext) {
            // TODO: error
            throw new Error();
        }

        const context = drawingCanvas.getContext("2d");
        if (!context) {
            // TODO: error
            throw new Error();
        }

        //
        

        const drawingCanvas2 = document.getElementById("cnv2") as HTMLCanvasElement;
        if (!drawingCanvas2 || !drawingCanvas2.getContext) {
            // TODO: error
            throw new Error();
        }

        const context2 = drawingCanvas2.getContext("2d");
        if (!context2) {
            // TODO: error
            throw new Error();
        }

        //

        this.context = context;
        this.context2 = context2;
        this.start();
        this.move(drawingCanvas.width / 2, drawingCanvas.height / 2);

        this.img = new Image();
        this.img.src = "./img/turtle.svg";
        this.img.onload = () => { this.imgLoaded = true; this.drawMe() };
    }

    public start(): void {
        this.context.beginPath();
        this.context2.beginPath();
    }

    public stop(): void {
        this.context.closePath();
        this.context2.closePath();
    }

    private drawMe(): void {
        if (this.imgLoaded) {
            //this.context.drawImage(this.img, this.x, this.y, 20, 20);

            const width = 30;
            const height = 30;

            const angle = (this.angle - 90) * Math.PI / 180;

            this.context2.clearRect(0, 0, 500, 500);
            this.context2.translate(this.x, this.y);
            this.context2.rotate(-angle);
            this.context2.drawImage(this.img, -width / 2, -height / 2, width, height);
            this.context2.rotate(angle);
            this.context2.translate(-this.x, -this.y);
        }
    }

    public move(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.context.moveTo(this.x, this.y);
        this.drawMe();
    }

    public go(steps: number): void {
        this.x = this.x + Math.cos(Math.PI * this.angle / 180.0) * steps;
        this.y = this.y - Math.sin(Math.PI * this.angle / 180.0) * steps;
        this.context.lineTo(this.x, this.y);
        this.context.stroke();
        this.drawMe();
    }

    public rotate(angle: number): void {
        this.angle -= angle;
        this.drawMe();
    }
}

const turtle = new Turtle("cnv");

// turtle.go(50);

// turtle.rotate(45);
// turtle.go(50);

// turtle.rotate(45);
// turtle.go(50);

// turtle.rotate(45);
// turtle.go(50);

// turtle.rotate(45);
// turtle.go(50);

// turtle.rotate(45);
// turtle.go(50);

// turtle.rotate(45);
// turtle.go(50);

// turtle.rotate(45);
// turtle.go(50);

// let X = 100;
// let Y = 100;
// context.beginPath();

// context.moveTo(X, Y);
// context.lineTo(X, Y - 20);
// context.stroke();
// context.lineTo(X + 20, Y - 20);
// context.stroke();
// context.lineTo(X + 20, Y);
// context.stroke();
// context.lineTo(X, Y);
// context.stroke();

// context.closePath();

const doCommand = (command: string): void => {
    if (command.length === 0)
        return;

    const parts = command.split(" ");
    if (parts.length !== 2 && parts.length !== 3)
        return;

    const param1 = parseInt(parts[1]);
    if (!param1)
        return;

    const param2 = parts.length === 3 ? parseInt(parts[2]) : 0;

    switch (parts[0]) {
        case "move":
            turtle.move(param1, param2);
            break;
        case "go":
            turtle.go(param1);
            break;
        case "rotate":
            turtle.rotate(param1);
            break;
    }
};

const textBox = document.getElementById("txt") as HTMLInputElement;
textBox.onkeyup = (e) => {
    if (e.key === "Enter") {
        doCommand(textBox.value);
        textBox.value = "";
    }
};

const button = document.getElementById("btn") as HTMLButtonElement;
button.onclick = () => {
    doCommand(textBox.value);
    textBox.value = "";
}
