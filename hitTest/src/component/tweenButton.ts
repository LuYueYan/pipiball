
class tweenButton extends eui.Button {
	private osx: number;
	private osy: number;

	public constructor() {
		super();
		this.osx = this.scaleX;
		this.osy = this.scaleY;
	}

	protected onTouchCancle(event: egret.TouchEvent): void {
		super.onTouchCancle(event);

		let tween: egret.Tween = egret.Tween.get(this)
		tween.to({ scaleX: this.osx, scaleY: this.osy }, 60)
	}

	protected onTouchBegin(event: egret.TouchEvent): void {
		super.onTouchBegin(event);

		let tween: egret.Tween = egret.Tween.get(this)
		tween.to({ scaleX: 0.8 * this.osx, scaleY: 0.8 * this.osy }, 60)
	}

	protected buttonReleased(): void {
		super.buttonReleased();

		let tween: egret.Tween = egret.Tween.get(this)
		tween.to({ scaleX: this.osx, scaleY: this.osy }, 60)

	}
}
window['tweenButton'] = tweenButton