/**
 * Cocos版本:1.6.2
 * 參考資料：
 * ts沒有notify
 * http://forum.cocos.com/t/ts-property-notify/49112
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class Notify extends cc.Component {
    @property({
    })
    private _color: cc.Color = cc.color(0, 0, 0, 255);
    @property({
        displayName: "颜色",
        type: cc.Color,
    })
    get color(): cc.Color {
        return this._color;
    }
    set color(c: cc.Color) {
        // notify要做的事
        cc.log("notify觸發，old_value:" + this._color + "new_value:" + c);
        this._color = c;
    }
}
