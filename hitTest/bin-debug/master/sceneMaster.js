var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var sceneMaster = (function () {
    function sceneMaster() {
    }
    sceneMaster.init = function (stage) {
        sceneMaster.stage = stage;
        sceneMaster.stageHeight = stage.stageHeight;
        var rect = new eui.Rect(stage.stageWidth, stage.stageHeight, 0x0c0300);
        rect.alpha = 0.85;
        sceneMaster.modalBg = rect;
        var rect_2 = new eui.Rect(stage.stageWidth, stage.stageHeight, 0x0c0300);
        rect_2.alpha = 0.85;
        sceneMaster.littleBg = rect_2;
    };
    sceneMaster.changeScene = function (scene) {
        // console.log('changeScene')
        CallbackMaster.playCallback = null;
        sceneMaster.modal && sceneMaster.modal.parent && sceneMaster.modal.parent.removeChild(sceneMaster.modal);
        sceneMaster.scene && sceneMaster.scene.parent && sceneMaster.stage.removeChild(sceneMaster.scene);
        sceneMaster.scene = scene;
        sceneMaster.stage.addChild(scene);
        sceneMaster.modal = null;
        sceneMaster.littleModal = null;
    };
    sceneMaster.openModal = function (modal, modalBg) {
        if (modalBg === void 0) { modalBg = true; }
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
        }
        else {
            sceneMaster.scene.addChild(modal);
        }
    };
    sceneMaster.closeModal = function () {
        //关闭弹窗
        if (sceneMaster.modal) {
            //存在一个弹窗
            egret.Tween.get(sceneMaster.modal).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.backIn).call(function () {
                sceneMaster.scene.removeChild(sceneMaster.modal);
                sceneMaster.modalBg.parent && sceneMaster.scene.removeChild(sceneMaster.modalBg);
                sceneMaster.modal = null;
            });
        }
        sceneMaster.closeLittleModal();
    };
    sceneMaster.openLittleModal = function (littleModal, littleBg, y) {
        if (littleBg === void 0) { littleBg = true; }
        if (y === void 0) { y = 300; }
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
    };
    sceneMaster.closeLittleModal = function () {
        //关闭小弹窗
        if (sceneMaster.littleModal) {
            //存在一个小弹窗
            sceneMaster.scene.removeChild(sceneMaster.littleModal);
            sceneMaster.littleModal = null;
            sceneMaster.littleBg.parent && sceneMaster.scene.removeChild(sceneMaster.littleBg);
        }
    };
    sceneMaster.stageHeight = 1334; //舞台高度
    return sceneMaster;
}());
__reflect(sceneMaster.prototype, "sceneMaster");
