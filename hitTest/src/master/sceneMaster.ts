class sceneMaster {
	public static stage;//舞台
	public static modal;//弹窗
	public static littleModal;//二级弹窗
	public static scene;//主页面
	public static modalBg;//弹窗背景层
	public static littleBg;//小弹窗背景层
	public static stageHeight = 1334;//舞台高度
	public constructor() {
	}
	public static init(stage) {
		sceneMaster.stage = stage;
		sceneMaster.stageHeight = stage.stageHeight;
		let rect = new eui.Rect(stage.stageWidth, stage.stageHeight, 0x0c0300);
		rect.alpha = 0.85;
		sceneMaster.modalBg = rect;
		let rect_2 = new eui.Rect(stage.stageWidth, stage.stageHeight, 0x0c0300);
		rect_2.alpha = 0.85;
		sceneMaster.littleBg = rect_2;
	}
	public static changeScene(scene) {
		// console.log('changeScene')
		sceneMaster.modal&&sceneMaster.modal.parent&&sceneMaster.modal.parent.removeChild(sceneMaster.modal);
		sceneMaster.scene && sceneMaster.scene.parent && sceneMaster.stage.removeChild(sceneMaster.scene);
		sceneMaster.scene = scene;
		sceneMaster.stage.addChild(scene);
		sceneMaster.modal = null;
		sceneMaster.littleModal = null;
	}
	public static openModal(modal, modalBg = true) {
		//页面上加弹窗  modalBg--是否加动画
		// console.log('openModal')
		if (sceneMaster.modal) {
			//已存在一个弹窗
			sceneMaster.scene.removeChild(sceneMaster.modal);
			sceneMaster.modal = null;
			sceneMaster.littleModal = null;
		}
		sceneMaster.modal = modal;
		if (modalBg) {
			sceneMaster.scene.addChild(sceneMaster.modalBg);
			modal.scaleX = 0, modal.scaleY = 0;
			sceneMaster.scene.addChild(modal);
			setTimeout(function () {
				modal.x = 375;
				modal.y = modal.height / 2;
				if (modal.height != 1334) {
					modal.y += 200;
				}
				modal.anchorOffsetX = modal.width / 2, modal.anchorOffsetY = modal.height / 2;
				egret.Tween.get(modal).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut);
			}, 50);
		} else {
			sceneMaster.scene.addChild(modal);
		}



	}
	public static closeModal() {
		//关闭弹窗
		if (sceneMaster.modal) {
			//存在一个弹窗
			egret.Tween.get(sceneMaster.modal).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.backIn).call(() => {
				sceneMaster.scene.removeChild(sceneMaster.modal);
				sceneMaster.modalBg.parent && sceneMaster.scene.removeChild(sceneMaster.modalBg);
				sceneMaster.modal = null;
			})
		}
		sceneMaster.closeLittleModal();
	}
	public static openLittleModal(littleModal, littleBg = true, y = 300) {
		//在弹窗上打开小弹窗
		if (sceneMaster.littleModal) {
			//已存在一个小弹窗
			sceneMaster.scene.removeChild(sceneMaster.littleModal);
		}
		if (littleBg) {
			sceneMaster.scene.addChild(sceneMaster.littleBg);
		}
		sceneMaster.littleModal = littleModal;
		littleModal.scaleX = 0, littleModal.scaleY = 0;
		sceneMaster.scene.addChild(littleModal);
		setTimeout(function () {
			littleModal.x = 375,
				littleModal.y = littleModal.height / 2 + y;
			littleModal.anchorOffsetX = littleModal.width / 2, littleModal.anchorOffsetY = littleModal.height / 2;
			egret.Tween.get(littleModal).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut);
		}, 50);

	}
	public static closeLittleModal() {
		//关闭小弹窗
		if (sceneMaster.littleModal) {
			//存在一个小弹窗
			sceneMaster.scene.removeChild(sceneMaster.littleModal);
			sceneMaster.littleModal = null;
			sceneMaster.littleBg.parent && sceneMaster.scene.removeChild(sceneMaster.littleBg);
		}
	}

}