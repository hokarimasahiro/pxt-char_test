/**
 * char code test blocks
 */
//% weight=100 color=#0fbc11 icon="\u270f" block="charactor code"
namespace charcode {
    /**
     * TODO:文字コードを表示する
     * @param pStr 文字列。, eg: "A"
     */
    //% block
    export function showCharCode(pStr: string): void {
        showHex(pStr.charCodeAt(0))
    }
    /**
     * TODO:数値を16進形式で表示する
     * @param n 数値。, eg: 0xab30
     */
    //% block
    export function showHex(n: number): void {
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 4; y++) {
                if ((n & 1 << (x * 4 + y)) != 0) {
                    led.plot(4 - y, 4 - x)
                } else {
                    led.unplot(4 - y, 4 - x)
                }
            }
        }
    }
}
