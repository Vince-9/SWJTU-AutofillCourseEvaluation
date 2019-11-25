# 教务网课程评价半自动填写脚本(测试版)

由于兼容性问题，请使用Chrome或谷歌系浏览器如360极速、QQ浏览器、搜狗浏览器等，切勿使用IE
虽然还需要一定手工操作，但是比全手动方便多了，不是吗



# 使用步骤

**重要**！：请从**课程评价**进入，不要从**成绩与排名**进入~

![图](C:\Users\麦芽花生糖\Desktop\课程评价图标.png)



## 选择一门你要填写的课程，进入到如下所示的页面

![图](C:\Users\麦芽花生糖\Desktop\TIM图片20191125185154.png)



## 按下键盘上的F12 ，弹出控制台，点击Console

![tu](C:\Users\麦芽花生糖\Desktop\Console截图.png)

## 将下面的代码复制粘贴到上图所示区域，按下回车即可

由于教务网要求每份问卷至少填写一分钟，请喝口茶耐心等待

经过测试，有的电脑能够正常运行而有的电脑会报错，如遇问题请在评论区联系哦~

```javascript
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
```


