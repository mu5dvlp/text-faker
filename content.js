class Faker {
    #xpath;
    #text;

    constructor(xpath, text) {
        this.#xpath = xpath;
        this.#text = text;
    }

    generateText() {
        return this.#text;
    }

    fakeText() {
        let element = document.evaluate(this.#xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element) {
            element.textContent = this.#text;
        }
    }
}

//＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// Parameters
let fakers = [
    new Faker('//*[@id="asset_total_amount"]', "999,999,999")
];

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
fakers.forEach(faker => {
    faker.fakeText();
});

window.addEventListener("load", () => {
    let fakers = [
        new Faker('//*[@id="asset_total_amount"]', "999,999,999")
    ];

    fakers.forEach(faker => {
        faker.fakeText();
    });
});