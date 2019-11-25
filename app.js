var Evaluater = class {
    constructor(params) {
        this.mainWindow = document.querySelector('#WindowMain8');
        this.WindowFrame = this.mainWindow.querySelector('#WindowFrame8').contentDocument.childNodes[1];
        this.ansDiv = this.WindowFrame.querySelectorAll('.answerDiv');
        this.submitBtn = this.WindowFrame.querySelector('#r_content>.b_content>.tb_cont>.frame-table>tbody>tr:nth-child(2) input:nth-child(1)');
        this.select();
        this.stuff();
        this.submit();
    }

    select() {
        for (let i = 0; i < this.ansDiv.length - 2; i++) {
            this.ansDiv[i].childNodes[1].childNodes[3].click();
        }
    }

    stuff() {
        this.text1 = this.WindowFrame.querySelector('#answerDiv16 textarea');
        this.text2 = this.WindowFrame.querySelector('#answerDiv17 textarea');
        this.text1.innerText = '都很满意';
        this.text2.innerText = '暂时没有';
        this.text1.value = this.text1.innerText;
        this.text2.value = this.text2.innerText;
    }

    submit() {
        let tick = 62;
        console.log(`由于必须填写一分钟以上，${tick} 秒后将自动提交，请耐心等待~`);
        this.infoInterval = setInterval(() => {
            tick--;
            console.log(`由于必须填写一分钟以上，${tick} 秒后将自动提交，请耐心等待~`);
        }, 1000);
        setTimeout(() => {
            clearInterval(this.infoInterval);
            this.submitBtn.click();
        }, 62000);
    }
}

var myEvaluater = new Evaluater();