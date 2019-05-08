class shopItem extends eui.ItemRenderer implements eui.UIComponent {
	public bgImg: eui.Image;
	public img: eui.Image;
	public power: eui.Image;
	public title: eui.Label;
	public txt: eui.Label;
	public price: eui.Label;
	public btn: eui.Image;


	public constructor() {
		super();
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
	}
	protected dataChanged(): void {
		this.img.texture = RES.getRes(this.data.img + '_png');
		this.power.texture = RES.getRes('img_power_0' + this.data.powerImg + '_png');
		this.txt.text = this.data.txt;
		if (this.data.id == 0) {
			//第一个
			this.bgImg.texture = RES.getRes('img_bg_bullet_01_png');
		} else {
			this.bgImg.texture = RES.getRes('img_bg_bullet_02_png');
		}
		if (userDataMaster.bulletSateArr[this.data.id] == 0 && userDataMaster.gold < this.data.price) {
			//未购买&&金币不足
			this.btn.texture = RES.getRes('btn_insufficient_png');
		} else {
			let s =userDataMaster.bulletSateArr[this.data.id] == 0 ? 'btn_buy' : 'btn_use';
			this.btn.texture = RES.getRes(s + '_png');
		}
		if (this.data.id == userDataMaster.bulletIndex) {
			//使用中
			this.btn.texture = RES.getRes('img_using_png');

		}
		this.title.text = this.data.title;
		this.price.text = 'x' + this.data.price;
		this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getFun, this)
	}
	public getFun() {
		//状态值 0--未购买 1--已购买
		if (userDataMaster.bulletSateArr[this.data.id] == 0) {
			if (userDataMaster.gold >= this.data.price) {
				//金币足够购买
				userDataMaster.bulletSateArr[this.data.id] = 1;
				userDataMaster.myGold = userDataMaster.gold - this.data.price;
				let item = userDataMaster.bulletArr[this.data.id];
				sceneMaster.openLittleModal(new getSuccess(item.img + '_png', item.title))
			} else {
				// console.log('砖石不足');
				let txt = new eui.Label('砖石不足');
				txt.size = 30;
				txt.textColor = 0xffffff;
				txt.x = (750 - txt.width) / 2;
				txt.y = 500;
				this.parent.addChild(txt);
				egret.Tween.get(txt).to({ y: 100 }, 1000).to({ alpha: 0 }, 500).call(() => {
					txt.parent && txt.parent.removeChild(txt);
				})
			}
		} else if (userDataMaster.bulletSateArr[this.data.id] == 1) {
			//使用
			userDataMaster.myBulleIndex = this.data.id;
			console.log('使用这个')
		}

	}


}