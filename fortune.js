'use strict';

// Inputから取得
const userNameInput = document.getElementById('name');
const birthdayInput = document.getElementById('birthday');
const assessmentButton = document.getElementById('assessment');

// 診断ボタンが押された時の挙動
assessmentButton.addEventListener(
    'click', () => {
        console.log('ボタンが押されました');
        const userName = userNameInput.value;
        const birthday = birthdayInput.value;
        if (userName.length === 0 || birthday.length === 0) {
            console.log('入力が不十分です'); // test
            return;
        } else {
            console.log('入力内容:', userName, birthday); // test
            // 実行
            const result = assessment(userName, birthday);
            console.log(result); // test
            // TODO 診断結果の表示
            
        }


        // TODO そのあとの処理
    }
)

// 運勢の選択肢
const answers = ['大吉', '吉', '中吉', '小吉', '末吉', '凶'];

// 名前と誕生日を渡すと、今年の年の診断結果を返す関数
function assessment(userName, birthday) {

    // nowYearの取得
    const date = new Date();
    const nowYear = date.getFullYear();

    // birthdaySumの取得
    const birthdayString = birthday.split('-');
    let birthdaySum = 0;
    for (const birthdayItem of birthdayString) {
        birthdaySum += Number(birthdayItem);
    }

    // nameNumberSumの取得
    let nameNumberSum = 0;
    for (let i = 0; i < userName.length; i++) {
        nameNumberSum += userName.charCodeAt(i);
    }

    // test
    console.log('値:', nowYear, birthdaySum, nameNumberSum)

    const answerIndex = (nowYear + birthdaySum + nameNumberSum) % answers.length;
    const result = `${userName}さんの運勢は「${answers[answerIndex]}」です！`
    return result;

}


