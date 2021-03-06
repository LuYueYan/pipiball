var egret = window.egret;window.skins=window.skins||{};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","runningScene":"resource/page/runningScene.exml","startScene":"resource/page/startScene.exml","rankModal":"resource/modal/rankModal.exml","rankItem":"resource/modal/rankItem.exml","getLifr":"resource/eui_skins/getLifr.exml","getLifeModal":"resource/modal/getLifeModal.exml","moreItem":"resource/modal/moreItem.exml","moreScroller":"resource/modal/moreScroller.exml","rebornModal":"resource/modal/rebornModal.exml","gameOver":"resource/page/gameOver.exml","levelUpModal":"resource/modal/levelUpModal.exml","getSuccess":"resource/modal/getSuccess.exml","playBefore":"resource/modal/playBefore.exml","myShop":"resource/modal/myShop.exml","shopItem":"resource/modal/shopItem.exml","teachModal":"resource/modal/teachModal.exml","moreComponent":"resource/modal/moreComponent.exml","levelCom":"resource/page/levelCom.exml","levelItem":"resource/modal/levelItem.exml","cloudCom":"resource/page/cloudCom.exml","giftModal":"resource/modal/giftModal.exml","squareGuide":"resource/modal/squareGuide.exml","toolGuide":"resource/modal/toolGuide.exml","chooseSex":"resource/modal/chooseSex.exml","dangerModal":"resource/modal/dangerModal.exml","tipsCom":"resource/modal/tipsCom.exml","continueGift":"resource/modal/continueGift.exml","useToolModal":"resource/modal/useToolModal.exml","runningCommand":"resource/modal/runningCommand.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/getLifr.exml'] = window.getLifrSkin = (function (_super) {
	__extends(getLifrSkin, _super);
	function getLifrSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = getLifrSkin.prototype;

	return getLifrSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/modal/chooseSex.exml'] = window.chooseSexSkin = (function (_super) {
	__extends(chooseSexSkin, _super);
	function chooseSexSkin() {
		_super.call(this);
		this.skinParts = ["bg_1","img_1","gender_1","bg_2","img_2","gender_2","sureBtn"];
		
		this.height = 1003;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.gender_1_i(),this.gender_2_i(),this.sureBtn_i()];
	}
	var _proto = chooseSexSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_text_tittle_png";
		return t;
	};
	_proto.gender_1_i = function () {
		var t = new eui.Group();
		this.gender_1 = t;
		t.horizontalCenter = 0;
		t.y = 79.27;
		t.elementsContent = [this.bg_1_i(),this.img_1_i()];
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "img_bg_gender_01_png";
		t.visible = false;
		t.x = 0;
		t.y = 70;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 164;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_role_boy_03_png";
		t.y = 164;
		return t;
	};
	_proto.gender_2_i = function () {
		var t = new eui.Group();
		this.gender_2 = t;
		t.horizontalCenter = 0;
		t.y = 458.93;
		t.elementsContent = [this.bg_2_i(),this.img_2_i()];
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "img_bg_gender_01_png";
		t.visible = false;
		t.x = 0;
		t.y = 67;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 164;
		t.horizontalCenter = 0;
		t.source = "img_role_girl_03_png";
		t.y = 164;
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Image();
		this.sureBtn = t;
		t.horizontalCenter = 0;
		t.source = "btn_gender_sure_png";
		t.touchEnabled = true;
		t.visible = false;
		t.y = 863;
		return t;
	};
	return chooseSexSkin;
})(eui.Skin);generateEUI.paths['resource/modal/continueGift.exml'] = window.continueGiftSkin = (function (_super) {
	__extends(continueGiftSkin, _super);
	function continueGiftSkin() {
		_super.call(this);
		this.skinParts = ["light","useBtn","img","ignoreBtn","txt"];
		
		this.height = 800;
		this.width = 600;
		this.elementsContent = [this.light_i(),this._Image1_i(),this.useBtn_i(),this.img_i(),this.ignoreBtn_i(),this.txt_i()];
	}
	var _proto = continueGiftSkin.prototype;

	_proto.light_i = function () {
		var t = new eui.Image();
		this.light = t;
		t.anchorOffsetX = 282;
		t.anchorOffsetY = 282;
		t.horizontalCenter = 0;
		t.source = "img_light_star_png";
		t.y = 306.15;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_tittle_2_png";
		t.x = 0;
		t.y = 4.5;
		return t;
	};
	_proto.useBtn_i = function () {
		var t = new eui.Image();
		this.useBtn = t;
		t.horizontalCenter = 0;
		t.source = "btn_cc_05_png";
		t.y = 553;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0;
		t.source = "img_gift_box_png";
		t.y = 195;
		return t;
	};
	_proto.ignoreBtn_i = function () {
		var t = new eui.Label();
		this.ignoreBtn = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.text = "不了>>";
		t.touchEnabled = true;
		t.visible = false;
		t.y = 712.3;
		return t;
	};
	_proto.txt_i = function () {
		var t = new eui.BitmapLabel();
		this.txt = t;
		t.font = "stripe_text_fnt";
		t.horizontalCenter = 0;
		t.text = "X1";
		t.visible = false;
		t.y = 488;
		return t;
	};
	return continueGiftSkin;
})(eui.Skin);generateEUI.paths['resource/modal/dangerModal.exml'] = window.dangerModalSkin = (function (_super) {
	__extends(dangerModalSkin, _super);
	function dangerModalSkin() {
		_super.call(this);
		this.skinParts = ["light","useBtn","ignoreBtn"];
		
		this.height = 720;
		this.width = 580;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Rect1_i(),this.light_i(),this._Image2_i(),this.useBtn_i(),this.ignoreBtn_i()];
	}
	var _proto = dangerModalSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_danger_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "可连消两行方块";
		t.textColor = 0x6c371a;
		t.y = 182.66;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 50;
		t.fillAlpha = 0;
		t.fillColor = 0xf1d09f;
		t.height = 160;
		t.horizontalCenter = 0;
		t.strokeColor = 0xf1d09f;
		t.strokeWeight = 3;
		t.width = 160;
		t.y = 280;
		return t;
	};
	_proto.light_i = function () {
		var t = new eui.Image();
		this.light = t;
		t.anchorOffsetX = 125;
		t.anchorOffsetY = 125;
		t.height = 250;
		t.horizontalCenter = 1;
		t.source = "img_light_star_png";
		t.width = 250;
		t.y = 365;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "img_magic_png";
		t.y = 294.35;
		return t;
	};
	_proto.useBtn_i = function () {
		var t = new eui.Image();
		this.useBtn = t;
		t.horizontalCenter = 0;
		t.source = "btn_use_magic_png";
		t.touchEnabled = true;
		t.y = 496.99;
		return t;
	};
	_proto.ignoreBtn_i = function () {
		var t = new eui.Label();
		this.ignoreBtn = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.text = "放弃>";
		t.textColor = 0xd1402c;
		t.visible = false;
		t.y = 640.66;
		return t;
	};
	return dangerModalSkin;
})(eui.Skin);generateEUI.paths['resource/modal/getLifeModal.exml'] = window.getLifeModalSkin = (function (_super) {
	__extends(getLifeModalSkin, _super);
	var getLifeModalSkin$Skin1 = 	(function (_super) {
		__extends(getLifeModalSkin$Skin1, _super);
		function getLifeModalSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = getLifeModalSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return getLifeModalSkin$Skin1;
	})(eui.Skin);

	var getLifeModalSkin$Skin2 = 	(function (_super) {
		__extends(getLifeModalSkin$Skin2, _super);
		function getLifeModalSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = getLifeModalSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_get_video_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return getLifeModalSkin$Skin2;
	})(eui.Skin);

	var getLifeModalSkin$Skin3 = 	(function (_super) {
		__extends(getLifeModalSkin$Skin3, _super);
		function getLifeModalSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = getLifeModalSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_share_02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return getLifeModalSkin$Skin3;
	})(eui.Skin);

	function getLifeModalSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","videoBtn","shareBtn","shareTimes","timeText_0","timeText_1","timeText_2","timeText_3","timeText_4"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.videoBtn_i(),this.shareBtn_i(),this.shareTimes_i(),this._Label1_i(),this._Group2_i(),this._Image6_i(),this._Image7_i()];
	}
	var _proto = getLifeModalSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_strength_png";
		t.y = 180;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.x = 32;
		t.y = 50;
		t.skinName = getLifeModalSkin$Skin1;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new tweenButton();
		this.videoBtn = t;
		t.anchorOffsetX = 171;
		t.anchorOffsetY = 56;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 649;
		t.skinName = getLifeModalSkin$Skin2;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new tweenButton();
		this.shareBtn = t;
		t.anchorOffsetX = 171;
		t.anchorOffsetY = 56;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 793;
		t.skinName = getLifeModalSkin$Skin3;
		return t;
	};
	_proto.shareTimes_i = function () {
		var t = new eui.Label();
		this.shareTimes = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "(0/5)";
		t.textColor = 0x395400;
		t.y = 806.2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.cacheAsBitmap = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "每日5次机会";
		t.textColor = 0x79aa3e;
		t.y = 878.21;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 2;
		t.width = 365;
		t.y = 521;
		t.elementsContent = [this.timeText_0_i(),this.timeText_1_i(),this.timeText_2_i(),this.timeText_3_i(),this.timeText_4_i(),this._Group1_i()];
		return t;
	};
	_proto.timeText_0_i = function () {
		var t = new eui.Label();
		this.timeText_0 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.italic = false;
		t.size = 32;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf9634e;
		t.verticalCenter = 0;
		t.width = 40;
		t.x = 90;
		return t;
	};
	_proto.timeText_1_i = function () {
		var t = new eui.Label();
		this.timeText_1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.italic = false;
		t.size = 32;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xF9634E;
		t.verticalCenter = 0;
		t.width = 40;
		t.x = 135;
		return t;
	};
	_proto.timeText_2_i = function () {
		var t = new eui.Label();
		this.timeText_2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 2;
		t.italic = false;
		t.size = 32;
		t.text = ":";
		t.textColor = 0xF9634E;
		t.verticalAlign = "middle";
		t.verticalCenter = -4.5;
		return t;
	};
	_proto.timeText_3_i = function () {
		var t = new eui.Label();
		this.timeText_3 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.italic = false;
		t.size = 32;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xF9634E;
		t.verticalCenter = 0;
		t.width = 40;
		t.x = 190;
		return t;
	};
	_proto.timeText_4_i = function () {
		var t = new eui.Label();
		this.timeText_4 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.italic = false;
		t.size = 32;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xF9634E;
		t.verticalCenter = 0;
		t.width = 40;
		t.x = 235;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.cacheAsBitmap = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.size = 28;
		t.text = "体力在";
		t.textColor = 0x874717;
		t.y = 12;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 28;
		t.text = "后恢复";
		t.textColor = 0x874717;
		t.y = 12;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_time_png";
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_time_png";
		t.x = 135;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_time_png";
		t.x = 190;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_time_png";
		t.x = 235;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_text_04_png";
		t.y = 247;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_strength_01_png";
		t.y = 321.6;
		return t;
	};
	return getLifeModalSkin;
})(eui.Skin);generateEUI.paths['resource/modal/getSuccess.exml'] = window.getSuccessSkin = (function (_super) {
	__extends(getSuccessSkin, _super);
	var getSuccessSkin$Skin4 = 	(function (_super) {
		__extends(getSuccessSkin$Skin4, _super);
		function getSuccessSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = getSuccessSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_know_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return getSuccessSkin$Skin4;
	})(eui.Skin);

	function getSuccessSkin() {
		_super.call(this);
		this.skinParts = ["light","img","txt","shareImg","ifShare","knowBtn"];
		
		this.height = 800;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.light_i(),this.img_i(),this.txt_i(),this.ifShare_i(),this.knowBtn_i()];
	}
	var _proto = getSuccessSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_tittle_png";
		t.top = 0;
		return t;
	};
	_proto.light_i = function () {
		var t = new eui.Image();
		this.light = t;
		t.anchorOffsetX = 292;
		t.anchorOffsetY = 292;
		t.horizontalCenter = 0;
		t.source = "img_light_gift_01_png";
		t.y = 324;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0;
		t.source = "img_gift_02_png";
		t.y = 211.69;
		return t;
	};
	_proto.txt_i = function () {
		var t = new eui.BitmapLabel();
		this.txt = t;
		t.font = "stripe_text_fnt";
		t.horizontalCenter = 0;
		t.text = "X30";
		t.y = 474;
		return t;
	};
	_proto.ifShare_i = function () {
		var t = new eui.Group();
		this.ifShare = t;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.y = 730;
		t.elementsContent = [this._Label1_i(),this.shareImg_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "炫耀一下";
		t.textColor = 0xb1a09b;
		t.verticalCenter = 0;
		t.x = 54;
		return t;
	};
	_proto.shareImg_i = function () {
		var t = new eui.Image();
		this.shareImg = t;
		t.source = "img_check_01_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.knowBtn_i = function () {
		var t = new tweenButton();
		this.knowBtn = t;
		t.anchorOffsetX = 131;
		t.anchorOffsetY = 56;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 643;
		t.skinName = getSuccessSkin$Skin4;
		return t;
	};
	return getSuccessSkin;
})(eui.Skin);generateEUI.paths['resource/modal/giftModal.exml'] = window.giftModalSkin = (function (_super) {
	__extends(giftModalSkin, _super);
	function giftModalSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","closeBtn","bg_0","bg_1","bg_2","bg_3","bg_4","bg_5","bg_6","bg_7","getBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bgImg_i(),this._Image1_i(),this.closeBtn_i(),this._Group9_i()];
	}
	var _proto = giftModalSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.horizontalCenter = 0;
		t.source = "img_bg_scene_png";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_lottery_00_png";
		t.top = 46;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "btn_home_01_png";
		t.touchEnabled = true;
		t.x = 30;
		t.y = 40;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 557.58;
		t.horizontalCenter = 0;
		t.width = 551.51;
		t.y = 423.8;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this.getBtn_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 178;
		t.left = 0;
		t.top = 0;
		t.width = 178;
		t.elementsContent = [this.bg_0_i(),this._Image2_i(),this._BitmapLabel1_i()];
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.horizontalCenter = 0;
		t.source = "img_bg_lottery_02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_gift_05_png";
		t.verticalCenter = -13;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "stripe_text_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X1";
		t.x = 115;
		t.y = 117.54;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 178;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 178;
		t.elementsContent = [this.bg_1_i(),this._Image3_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.horizontalCenter = 0;
		t.source = "img_bg_lottery_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_gift_02_png";
		t.verticalCenter = -13;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "stripe_text_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X30";
		t.x = 89;
		t.y = 117.54;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 178;
		t.right = 0;
		t.top = 0;
		t.width = 178;
		t.elementsContent = [this.bg_2_i(),this._Image4_i(),this._BitmapLabel3_i()];
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.horizontalCenter = 0;
		t.source = "img_bg_lottery_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_gift_05_png";
		t.verticalCenter = -13;
		return t;
	};
	_proto._BitmapLabel3_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "stripe_text_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X1";
		t.x = 115;
		t.y = 117.54;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 178;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 178;
		t.elementsContent = [this.bg_3_i(),this._Image5_i(),this._BitmapLabel4_i()];
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.horizontalCenter = 0;
		t.source = "img_bg_lottery_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_gift_04_png";
		t.verticalCenter = -13;
		return t;
	};
	_proto._BitmapLabel4_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "stripe_text_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X1";
		t.x = 115;
		t.y = 117.54;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 178;
		t.right = 0;
		t.width = 178;
		t.elementsContent = [this.bg_4_i(),this._Image6_i(),this._BitmapLabel5_i()];
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.horizontalCenter = 0;
		t.source = "img_bg_lottery_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_gift_01_png";
		t.verticalCenter = -13;
		return t;
	};
	_proto._BitmapLabel5_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "stripe_text_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X2";
		t.x = 102;
		t.y = 117.54;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 178;
		t.horizontalCenter = 0;
		t.width = 178;
		t.elementsContent = [this.bg_5_i(),this._Image7_i(),this._BitmapLabel6_i()];
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.horizontalCenter = 0;
		t.source = "img_bg_lottery_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_gift_02_png";
		t.verticalCenter = -13;
		return t;
	};
	_proto._BitmapLabel6_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "stripe_text_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X20";
		t.x = 89;
		t.y = 117.54;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 178;
		t.left = 0;
		t.width = 178;
		t.elementsContent = [this.bg_6_i(),this._Image8_i(),this._BitmapLabel7_i()];
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.horizontalCenter = 0;
		t.source = "img_bg_lottery_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_gift_01_png";
		t.verticalCenter = -13;
		return t;
	};
	_proto._BitmapLabel7_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "stripe_text_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X1";
		t.x = 115;
		t.y = 117.54;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 178;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 178;
		t.elementsContent = [this.bg_7_i(),this._Image9_i(),this._BitmapLabel8_i()];
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.horizontalCenter = 0;
		t.source = "img_bg_lottery_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "img_gift_03_png";
		t.verticalCenter = -13;
		return t;
	};
	_proto._BitmapLabel8_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "stripe_text_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X10";
		t.x = 98.08;
		t.y = 117.54;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new eui.Image();
		this.getBtn = t;
		t.anchorOffsetX = 89;
		t.anchorOffsetY = 89;
		t.horizontalCenter = 0;
		t.source = "btn_lottery_01_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	return giftModalSkin;
})(eui.Skin);generateEUI.paths['resource/modal/levelItem.exml'] = window.levelItemSkin = (function (_super) {
	__extends(levelItemSkin, _super);
	function levelItemSkin() {
		_super.call(this);
		this.skinParts = ["map","bgImg","star_1","star_2","star_3","levelText","bodyGroup"];
		
		this.height = 130;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 750;
		this.elementsContent = [this.map_i(),this.bodyGroup_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = levelItemSkin.prototype;

	_proto.map_i = function () {
		var t = new eui.Image();
		this.map = t;
		t.horizontalCenter = 0;
		t.source = "img_map_02_png";
		t.top = 0;
		return t;
	};
	_proto.bodyGroup_i = function () {
		var t = new eui.Group();
		this.bodyGroup = t;
		t.cacheAsBitmap = true;
		t.percentHeight = 100;
		t.width = 124;
		t.elementsContent = [this.bgImg_i(),this.star_1_i(),this.star_2_i(),this.star_3_i(),this.levelText_i()];
		return t;
	};
	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.source = "img_wood_02_png";
		t.x = 0;
		return t;
	};
	_proto.star_1_i = function () {
		var t = new eui.Image();
		this.star_1 = t;
		t.height = 27;
		t.rotation = 345.96;
		t.source = "img_star_b2_png";
		t.width = 27;
		t.x = 10;
		t.y = 17;
		return t;
	};
	_proto.star_2_i = function () {
		var t = new eui.Image();
		this.star_2 = t;
		t.height = 34;
		t.horizontalCenter = 0;
		t.source = "img_star_b2_png";
		t.width = 34;
		t.y = 0;
		return t;
	};
	_proto.star_3_i = function () {
		var t = new eui.Image();
		this.star_3 = t;
		t.height = 27;
		t.rotation = 7.82;
		t.source = "img_star_b2_png";
		t.width = 27;
		t.x = 87;
		t.y = 11;
		return t;
	};
	_proto.levelText_i = function () {
		var t = new eui.BitmapLabel();
		this.levelText = t;
		t.font = "stripe_text_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "1";
		t.textAlign = "center";
		t.width = 100;
		t.y = 48;
		return t;
	};
	return levelItemSkin;
})(eui.Skin);generateEUI.paths['resource/modal/levelUpModal.exml'] = window.levelUpModalSkin = (function (_super) {
	__extends(levelUpModalSkin, _super);
	var levelUpModalSkin$Skin5 = 	(function (_super) {
		__extends(levelUpModalSkin$Skin5, _super);
		function levelUpModalSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.8),
						new eui.SetProperty("_Image1","scaleY",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = levelUpModalSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_get_double_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return levelUpModalSkin$Skin5;
	})(eui.Skin);

	function levelUpModalSkin() {
		_super.call(this);
		this.skinParts = ["light","star_1","star_2","star_3","levelText","scoreText","goldText","videoBtn","getBtn"];
		
		this.height = 850;
		this.width = 667;
		this.elementsContent = [this._Image1_i(),this.light_i(),this._Label1_i(),this.star_1_i(),this.star_2_i(),this.star_3_i(),this.levelText_i(),this.scoreText_i(),this._Image2_i(),this.goldText_i(),this.videoBtn_i(),this._Rect1_i(),this.getBtn_i(),this._Image3_i()];
	}
	var _proto = levelUpModalSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_bb_01_png";
		t.top = 0;
		return t;
	};
	_proto.light_i = function () {
		var t = new eui.Image();
		this.light = t;
		t.source = "img_light_star_png";
		t.x = 46;
		t.y = -105;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.cacheAsBitmap = true;
		t.displayAsPassword = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 60;
		t.horizontalCenter = 0;
		t.includeInLayout = true;
		t.size = 36;
		t.stroke = 3;
		t.strokeColor = 0x603005;
		t.text = "太棒了!";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 150;
		t.y = 49.06;
		return t;
	};
	_proto.star_1_i = function () {
		var t = new eui.Image();
		this.star_1 = t;
		t.height = 92;
		t.rotation = 350;
		t.source = "img_star_a2_png";
		t.width = 92;
		t.x = 155.37;
		t.y = 176.65;
		return t;
	};
	_proto.star_2_i = function () {
		var t = new eui.Image();
		this.star_2 = t;
		t.height = 115;
		t.horizontalCenter = 0;
		t.source = "img_star_a2_png";
		t.width = 115;
		t.y = 119.29;
		return t;
	};
	_proto.star_3_i = function () {
		var t = new eui.Image();
		this.star_3 = t;
		t.height = 92;
		t.rotation = 10;
		t.source = "img_star_a2_png";
		t.width = 92;
		t.x = 419.34;
		t.y = 159.36;
		return t;
	};
	_proto.levelText_i = function () {
		var t = new eui.Label();
		this.levelText = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "第1关";
		t.textColor = 0x6c371a;
		t.y = 297;
		return t;
	};
	_proto.scoreText_i = function () {
		var t = new eui.Label();
		this.scoreText = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "666";
		t.textColor = 0x6c371a;
		t.y = 352;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_aa_png";
		t.y = 425;
		return t;
	};
	_proto.goldText_i = function () {
		var t = new eui.BitmapLabel();
		this.goldText = t;
		t.font = "stripe_text_fnt";
		t.text = "X25";
		t.x = 328;
		t.y = 459;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new eui.Button();
		this.videoBtn = t;
		t.anchorOffsetX = 151;
		t.anchorOffsetY = 56;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 613;
		t.skinName = levelUpModalSkin$Skin5;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 40;
		t.fillAlpha = 0.2;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 240;
		t.y = 770;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new eui.Label();
		this.getBtn = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "普通领取>";
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 240;
		t.y = 770;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icn_diamond_01_png";
		t.x = 193;
		t.y = 433;
		return t;
	};
	return levelUpModalSkin;
})(eui.Skin);generateEUI.paths['resource/modal/moreComponent.exml'] = window.moreComponentSkin = (function (_super) {
	__extends(moreComponentSkin, _super);
	function moreComponentSkin() {
		_super.call(this);
		this.skinParts = ["image_1","title_1","group_1","image_2","title_2","group_2","image_3","title_3","group_3","moreGroup","changeArea","tipImg","content","container"];
		
		this.height = 680;
		this.width = 465;
		this.elementsContent = [this._Rect1_i(),this.moreGroup_i(),this.container_i()];
	}
	var _proto = moreComponentSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillAlpha = 0.3;
		t.fillColor = 0xFFFFFF;
		t.height = 500;
		t.width = 140;
		t.y = 150;
		return t;
	};
	_proto.moreGroup_i = function () {
		var t = new eui.Group();
		this.moreGroup = t;
		t.height = 458;
		t.width = 140;
		t.y = 174;
		t.elementsContent = [this.group_1_i(),this.group_2_i(),this.group_3_i()];
		return t;
	};
	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 50;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 140;
		t.y = 50;
		t.elementsContent = [this.image_1_i(),this.title_1_i()];
		return t;
	};
	_proto.image_1_i = function () {
		var t = new eui.Image();
		this.image_1 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.y = 0;
		return t;
	};
	_proto.title_1_i = function () {
		var t = new eui.Label();
		this.title_1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "名字哇";
		t.textAlign = "center";
		t.textColor = 0x164E33;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 105.5;
		return t;
	};
	_proto.group_2_i = function () {
		var t = new eui.Group();
		this.group_2 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 50;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 140;
		t.y = 210;
		t.elementsContent = [this.image_2_i(),this.title_2_i()];
		return t;
	};
	_proto.image_2_i = function () {
		var t = new eui.Image();
		this.image_2 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.y = 0;
		return t;
	};
	_proto.title_2_i = function () {
		var t = new eui.Label();
		this.title_2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "名字哇";
		t.textAlign = "center";
		t.textColor = 0x164E33;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 105.5;
		return t;
	};
	_proto.group_3_i = function () {
		var t = new eui.Group();
		this.group_3 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 50;
		t.height = 130;
		t.horizontalCenter = 0;
		t.width = 140;
		t.y = 370;
		t.elementsContent = [this.image_3_i(),this.title_3_i()];
		return t;
	};
	_proto.image_3_i = function () {
		var t = new eui.Image();
		this.image_3 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.y = 0;
		return t;
	};
	_proto.title_3_i = function () {
		var t = new eui.Label();
		this.title_3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "名字哇";
		t.textAlign = "center";
		t.textColor = 0x164E33;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 105.5;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.anchorOffsetX = 0;
		t.height = 680;
		t.width = 465;
		t.x = -465;
		t.y = 0;
		t.elementsContent = [this.changeArea_i(),this.tipImg_i(),this._Image1_i(),this.content_i()];
		return t;
	};
	_proto.changeArea_i = function () {
		var t = new eui.Image();
		this.changeArea = t;
		t.source = "btn_more_game_png";
		t.touchEnabled = true;
		t.x = 454.36;
		t.y = 69;
		return t;
	};
	_proto.tipImg_i = function () {
		var t = new eui.Image();
		this.tipImg = t;
		t.source = "img_red_dot_png";
		t.x = 579.48;
		t.y = 61.38;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "img_bg_game_more_png";
		t.top = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 591;
		t.horizontalCenter = -10.5;
		t.width = 422;
		t.y = 53;
		return t;
	};
	return moreComponentSkin;
})(eui.Skin);generateEUI.paths['resource/modal/moreItem.exml'] = window.moreItemSkin = (function (_super) {
	__extends(moreItemSkin, _super);
	function moreItemSkin() {
		_super.call(this);
		this.skinParts = ["image","imgMask","title"];
		
		this.height = 130;
		this.width = 140;
		this.elementsContent = [this.image_i(),this.imgMask_i(),this.title_i()];
	}
	var _proto = moreItemSkin.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 100;
		t.y = 0;
		return t;
	};
	_proto.imgMask_i = function () {
		var t = new eui.Rect();
		this.imgMask = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 100;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 100;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 25;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "名字哇";
		t.textAlign = "center";
		t.textColor = 0x164e33;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.y = 105.5;
		return t;
	};
	return moreItemSkin;
})(eui.Skin);generateEUI.paths['resource/modal/myShop.exml'] = window.myShopSkin = (function (_super) {
	__extends(myShopSkin, _super);
	var myShopSkin$Skin6 = 	(function (_super) {
		__extends(myShopSkin$Skin6, _super);
		function myShopSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = myShopSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return myShopSkin$Skin6;
	})(eui.Skin);

	function myShopSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","goldNum","goldGroup","contentGroup","scroller"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.closeBtn_i(),this.goldGroup_i(),this.scroller_i()];
	}
	var _proto = myShopSkin.prototype;

	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.x = 30;
		t.y = 50;
		t.skinName = myShopSkin$Skin6;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.x = 152;
		t.y = 61;
		t.elementsContent = [this._Image1_i(),this.goldNum_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_remain_diamond_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.goldNum_i = function () {
		var t = new eui.Label();
		this.goldNum = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.text = "666";
		t.textAlign = "center";
		t.width = 150;
		t.x = 56.05;
		t.y = 11.44;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 602.33;
		t.horizontalCenter = 0;
		t.width = 738;
		t.y = 150;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.contentGroup_i()];
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.height = 200;
		t.percentWidth = 100;
		return t;
	};
	return myShopSkin;
})(eui.Skin);generateEUI.paths['resource/modal/playBefore.exml'] = window.playBeforeSkin = (function (_super) {
	__extends(playBeforeSkin, _super);
	function playBeforeSkin() {
		_super.call(this);
		this.skinParts = ["titleText","startBtn","videoBtn","closeBtn","glassLight","glassImg","glassNum","glassAdd","glassChoose","glass","bulletLight","bulletImg","bulletNum","bulletAdd","bulletChoose","bullet","txt_1","txt_2","guide"];
		
		this.height = 750;
		this.width = 605;
		this.elementsContent = [this._Image1_i(),this.titleText_i(),this._Label1_i(),this._Group1_i(),this.closeBtn_i(),this.glass_i(),this.bullet_i(),this.guide_i()];
	}
	var _proto = playBeforeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_start_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleText_i = function () {
		var t = new eui.Label();
		this.titleText = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x603005;
		t.text = "第6关";
		t.y = 59.44;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "借助道具，让你赢得更漂亮~";
		t.textColor = 0x6c371a;
		t.y = 195;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 490;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.startBtn_i(),this.videoBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Image();
		this.startBtn = t;
		t.source = "btn_start_01_png";
		t.touchEnabled = true;
		t.x = 244;
		t.y = 10;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new eui.Image();
		this.videoBtn = t;
		t.source = "btn_before_01_png";
		t.touchEnabled = true;
		t.x = 234;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "btn_close_png";
		t.touchEnabled = true;
		t.x = 555;
		t.y = 15.44;
		return t;
	};
	_proto.glass_i = function () {
		var t = new eui.Group();
		this.glass = t;
		t.height = 160;
		t.width = 160;
		t.x = 113;
		t.y = 288;
		t.elementsContent = [this._Rect1_i(),this.glassLight_i(),this.glassImg_i(),this.glassNum_i(),this.glassAdd_i(),this.glassChoose_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 60;
		t.fillColor = 0xfdf4e3;
		t.height = 160;
		t.horizontalCenter = 0;
		t.strokeColor = 0xf1d09f;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	_proto.glassLight_i = function () {
		var t = new eui.Image();
		this.glassLight = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 150;
		t.height = 300;
		t.horizontalCenter = 0;
		t.source = "img_light_star_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 300;
		return t;
	};
	_proto.glassImg_i = function () {
		var t = new eui.Image();
		this.glassImg = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 58.75;
		t.height = 117.5;
		t.horizontalCenter = 0;
		t.source = "img_gift_04_png";
		t.verticalCenter = 0;
		t.width = 136;
		return t;
	};
	_proto.glassNum_i = function () {
		var t = new eui.BitmapLabel();
		this.glassNum = t;
		t.font = "stripe_text_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "X1";
		t.x = 93;
		t.y = 111;
		return t;
	};
	_proto.glassAdd_i = function () {
		var t = new eui.Image();
		this.glassAdd = t;
		t.source = "btn_more_png";
		t.visible = false;
		t.x = 102;
		t.y = 105;
		return t;
	};
	_proto.glassChoose_i = function () {
		var t = new eui.Image();
		this.glassChoose = t;
		t.source = "img_select_png";
		t.visible = false;
		t.x = 118;
		t.y = 108;
		return t;
	};
	_proto.bullet_i = function () {
		var t = new eui.Group();
		this.bullet = t;
		t.height = 160;
		t.width = 160;
		t.x = 333;
		t.y = 288;
		t.elementsContent = [this._Rect2_i(),this.bulletLight_i(),this.bulletImg_i(),this.bulletNum_i(),this.bulletAdd_i(),this.bulletChoose_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 60;
		t.fillColor = 0xFDF4E3;
		t.height = 160;
		t.horizontalCenter = 0;
		t.strokeColor = 0xF1D09F;
		t.strokeWeight = 4;
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	_proto.bulletLight_i = function () {
		var t = new eui.Image();
		this.bulletLight = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 150;
		t.height = 300;
		t.horizontalCenter = 0;
		t.source = "img_light_star_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 300;
		return t;
	};
	_proto.bulletImg_i = function () {
		var t = new eui.Image();
		this.bulletImg = t;
		t.anchorOffsetX = 39.5;
		t.anchorOffsetY = 58.75;
		t.height = 117.5;
		t.horizontalCenter = 0.5;
		t.source = "img_gift_05_png";
		t.verticalCenter = -5;
		t.width = 79;
		return t;
	};
	_proto.bulletNum_i = function () {
		var t = new eui.BitmapLabel();
		this.bulletNum = t;
		t.font = "stripe_text_fnt";
		t.text = "X1";
		t.x = 95;
		t.y = 112;
		return t;
	};
	_proto.bulletAdd_i = function () {
		var t = new eui.Image();
		this.bulletAdd = t;
		t.source = "btn_more_png";
		t.visible = false;
		t.x = 102;
		t.y = 105;
		return t;
	};
	_proto.bulletChoose_i = function () {
		var t = new eui.Image();
		this.bulletChoose = t;
		t.source = "img_select_png";
		t.visible = false;
		t.x = 118;
		t.y = 108;
		return t;
	};
	_proto.guide_i = function () {
		var t = new eui.Group();
		this.guide = t;
		t.anchorOffsetX = 170;
		t.anchorOffsetY = 201;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 280;
		t.y = 262;
		t.elementsContent = [this._Image2_i(),this.txt_1_i(),this.txt_2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_text_guide_png";
		return t;
	};
	_proto.txt_1_i = function () {
		var t = new eui.Label();
		this.txt_1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "点击试试神奇道具";
		t.textColor = 0x6c371a;
		t.y = 35;
		return t;
	};
	_proto.txt_2_i = function () {
		var t = new eui.Label();
		this.txt_2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "弹跳视野";
		t.textColor = 0x6c371a;
		t.y = 87.5;
		return t;
	};
	return playBeforeSkin;
})(eui.Skin);generateEUI.paths['resource/modal/rankItem.exml'] = window.rankItemSkin = (function (_super) {
	__extends(rankItemSkin, _super);
	function rankItemSkin() {
		_super.call(this);
		this.skinParts = ["index","bestHat","headimgMask","headimg","nickName","level","score","star_1","star_2","star_3"];
		
		this.height = 98;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 588;
		this.elementsContent = [this._Image1_i(),this.index_i(),this.bestHat_i(),this.headimgMask_i(),this.headimg_i(),this.nickName_i(),this.level_i(),this.score_i(),this.star_1_i(),this.star_2_i(),this.star_3_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = rankItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_ranking_02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.index_i = function () {
		var t = new eui.Label();
		this.index = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x9d7236;
		t.verticalCenter = 0;
		t.width = 103;
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.bestHat_i = function () {
		var t = new eui.Image();
		this.bestHat = t;
		t.source = "icn_medal_01_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 25;
		t.y = 22;
		return t;
	};
	_proto.headimgMask_i = function () {
		var t = new eui.Rect();
		this.headimgMask = t;
		t.ellipseWidth = 30;
		t.height = 60;
		t.strokeColor = 0xffffff;
		t.verticalCenter = -2;
		t.width = 60;
		t.x = 112;
		t.y = 14;
		return t;
	};
	_proto.headimg_i = function () {
		var t = new eui.Image();
		this.headimg = t;
		t.height = 60;
		t.verticalCenter = -2;
		t.width = 60;
		t.x = 112;
		t.y = 14;
		return t;
	};
	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 26;
		t.size = 24;
		t.text = "名字";
		t.textColor = 0x9d7236;
		t.verticalCenter = 0;
		t.width = 175;
		t.x = 185;
		t.y = 36;
		return t;
	};
	_proto.level_i = function () {
		var t = new eui.Label();
		this.level = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 28;
		t.rotation = 0.12;
		t.size = 24;
		t.text = "关卡100";
		t.textAlign = "right";
		t.textColor = 0x874717;
		t.verticalCenter = -16;
		t.width = 115;
		t.x = 448;
		t.y = 17;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 28;
		t.rotation = 0.12;
		t.size = 24;
		t.text = "66";
		t.textAlign = "right";
		t.textColor = 0x9d7236;
		t.verticalCenter = 18;
		t.width = 200;
		t.x = 364;
		t.y = 55;
		return t;
	};
	_proto.star_1_i = function () {
		var t = new eui.Image();
		this.star_1 = t;
		t.height = 30;
		t.source = "img_star_b2_png";
		t.width = 30;
		t.x = 349.33;
		t.y = 13;
		return t;
	};
	_proto.star_2_i = function () {
		var t = new eui.Image();
		this.star_2 = t;
		t.height = 30;
		t.source = "img_star_b2_png";
		t.width = 30;
		t.x = 389.33;
		t.y = 13;
		return t;
	};
	_proto.star_3_i = function () {
		var t = new eui.Image();
		this.star_3 = t;
		t.height = 30;
		t.source = "img_star_b2_png";
		t.width = 30;
		t.x = 429.33;
		t.y = 13;
		return t;
	};
	return rankItemSkin;
})(eui.Skin);generateEUI.paths['resource/modal/rankModal.exml'] = window.rankModalSkin = (function (_super) {
	__extends(rankModalSkin, _super);
	var rankModalSkin$Skin7 = 	(function (_super) {
		__extends(rankModalSkin$Skin7, _super);
		function rankModalSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = rankModalSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_home_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return rankModalSkin$Skin7;
	})(eui.Skin);

	function rankModalSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","goHome","friendGroup","worldGroup","friend","world","lastPage","nextPage","pageText","myRank","contentGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bgImg_i(),this.goHome_i(),this.contentGroup_i()];
	}
	var _proto = rankModalSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.source = "img_bg_scene_png";
		t.top = 0;
		return t;
	};
	_proto.goHome_i = function () {
		var t = new eui.Button();
		this.goHome = t;
		t.label = "";
		t.x = 30;
		t.y = 40;
		t.skinName = rankModalSkin$Skin7;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.x = 0;
		t.y = 143;
		t.elementsContent = [this._Image1_i(),this.friendGroup_i(),this.worldGroup_i(),this.friend_i(),this.world_i(),this._Group1_i(),this.myRank_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_ranking_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.friendGroup_i = function () {
		var t = new eui.Group();
		this.friendGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 740;
		t.width = 588;
		t.x = 81;
		t.y = 156.92;
		return t;
	};
	_proto.worldGroup_i = function () {
		var t = new eui.Group();
		this.worldGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.cacheAsBitmap = true;
		t.height = 690;
		t.visible = false;
		t.width = 588;
		t.x = 81;
		t.y = 204.92;
		return t;
	};
	_proto.friend_i = function () {
		var t = new eui.Image();
		this.friend = t;
		t.source = "btn_tittle_a1_png";
		t.touchEnabled = true;
		t.x = 100;
		t.y = 74.92;
		return t;
	};
	_proto.world_i = function () {
		var t = new eui.Image();
		this.world = t;
		t.source = "btn_tittle_b2_png";
		t.touchEnabled = true;
		t.x = 400;
		t.y = 74.92;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 168;
		t.x = 291;
		t.y = 840.92;
		t.elementsContent = [this.lastPage_i(),this.nextPage_i(),this.pageText_i()];
		return t;
	};
	_proto.lastPage_i = function () {
		var t = new eui.Image();
		this.lastPage = t;
		t.left = 0;
		t.source = "btn_page_01_png";
		t.top = 0;
		return t;
	};
	_proto.nextPage_i = function () {
		var t = new eui.Image();
		this.nextPage = t;
		t.right = 0;
		t.source = "btn_page_02_png";
		t.top = 0;
		return t;
	};
	_proto.pageText_i = function () {
		var t = new eui.Label();
		this.pageText = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "1 / 2";
		t.textColor = 0x9d7236;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.myRank_i = function () {
		var t = new eui.Label();
		this.myRank = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "您当前为：第10名";
		t.textColor = 0x9d7236;
		t.visible = false;
		t.x = 277;
		t.y = 161.92;
		return t;
	};
	return rankModalSkin;
})(eui.Skin);generateEUI.paths['resource/modal/rebornModal.exml'] = window.rebornModalSkin = (function (_super) {
	__extends(rebornModalSkin, _super);
	var rebornModalSkin$Skin8 = 	(function (_super) {
		__extends(rebornModalSkin$Skin8, _super);
		function rebornModalSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = rebornModalSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_revive_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return rebornModalSkin$Skin8;
	})(eui.Skin);

	function rebornModalSkin() {
		_super.call(this);
		this.skinParts = ["ignoreBtn","num","rebornBtn"];
		
		this.height = 700;
		this.width = 750;
		this.elementsContent = [this._Label1_i(),this.ignoreBtn_i(),this._Image1_i(),this.num_i(),this.rebornBtn_i()];
	}
	var _proto = rebornModalSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 58;
		t.text = "死亡将损失1点体力";
		return t;
	};
	_proto.ignoreBtn_i = function () {
		var t = new eui.Label();
		this.ignoreBtn = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "不了>";
		t.textColor = 0xb1a09b;
		t.touchEnabled = true;
		t.visible = false;
		t.y = 668;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_strength_time_png";
		t.y = 89;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.Image();
		this.num = t;
		t.horizontalCenter = 0;
		t.source = "img_countdown_05_png";
		t.y = 234.3;
		return t;
	};
	_proto.rebornBtn_i = function () {
		var t = new tweenButton();
		this.rebornBtn = t;
		t.anchorOffsetX = 170;
		t.anchorOffsetY = 56;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 569;
		t.skinName = rebornModalSkin$Skin8;
		return t;
	};
	return rebornModalSkin;
})(eui.Skin);generateEUI.paths['resource/modal/runningCommand.exml'] = window.runningCommandSkin = (function (_super) {
	__extends(runningCommandSkin, _super);
	function runningCommandSkin() {
		_super.call(this);
		this.skinParts = ["img_1","title_1","group_1","img_2","title_2","group_2"];
		
		this.height = 139;
		this.width = 251;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = runningCommandSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.width = 250;
		t.elementsContent = [this.group_1_i(),this.group_2_i()];
		return t;
	};
	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.x = 55;
		t.y = 65;
		t.elementsContent = [this._Rect1_i(),this.img_1_i(),this.title_1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 30;
		t.fillColor = 0xFCFFE3;
		t.height = 130;
		t.width = 110;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.height = 102;
		t.width = 102;
		t.x = 4;
		t.y = 4;
		return t;
	};
	_proto.title_1_i = function () {
		var t = new eui.Label();
		this.title_1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "植物";
		t.textAlign = "center";
		t.textColor = 0x600A05;
		t.verticalAlign = "middle";
		t.width = 103;
		t.x = 0;
		t.y = 110;
		return t;
	};
	_proto.group_2_i = function () {
		var t = new eui.Group();
		this.group_2 = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 65;
		t.x = 178;
		t.y = 65;
		t.elementsContent = [this._Rect2_i(),this.img_2_i(),this.title_2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 30;
		t.fillColor = 0xFCFFE3;
		t.height = 130;
		t.width = 110;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.height = 102;
		t.width = 102;
		t.x = 4;
		t.y = 4;
		return t;
	};
	_proto.title_2_i = function () {
		var t = new eui.Label();
		this.title_2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "植物";
		t.textAlign = "center";
		t.textColor = 0x600A05;
		t.verticalAlign = "middle";
		t.width = 103;
		t.x = 4;
		t.y = 110;
		return t;
	};
	return runningCommandSkin;
})(eui.Skin);generateEUI.paths['resource/modal/shopItem.exml'] = window.shopItemSkin = (function (_super) {
	__extends(shopItemSkin, _super);
	function shopItemSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","img","power","title","txt","price","unlockText","icon","normalbtn","unlockBtn","tryBtn"];
		
		this.height = 293;
		this.width = 738;
		this.elementsContent = [this.bgImg_i(),this._Group1_i(),this.title_i(),this.txt_i(),this.price_i(),this.unlockText_i(),this.icon_i(),this.normalbtn_i(),this.unlockBtn_i(),this.tryBtn_i()];
	}
	var _proto = shopItemSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "img_bg_bullet_02_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 98;
		t.y = 90;
		t.elementsContent = [this._Image1_i(),this.img_i(),this.power_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_bullet_03_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.source = "img_bullet_a2_png";
		t.width = 120;
		t.x = 24;
		t.y = 21;
		return t;
	};
	_proto.power_i = function () {
		var t = new eui.Image();
		this.power = t;
		t.horizontalCenter = 0;
		t.source = "img_power_01_png";
		t.y = 145;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "仙人球";
		t.textColor = 0x874717;
		t.x = 273;
		t.y = 103;
		return t;
	};
	_proto.txt_i = function () {
		var t = new eui.Label();
		this.txt = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "仙人球";
		t.textColor = 0x874717;
		t.x = 276;
		t.y = 152;
		return t;
	};
	_proto.price_i = function () {
		var t = new eui.Label();
		this.price = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "x1000";
		t.textColor = 0xef4d52;
		t.x = 322.5;
		t.y = 206.02;
		return t;
	};
	_proto.unlockText_i = function () {
		var t = new eui.Label();
		this.unlockText = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "已邀0/2位好友";
		t.textColor = 0xEF4D52;
		t.x = 277.5;
		t.y = 206;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "icn_diamond_02_png";
		t.x = 272.81;
		t.y = 201.02;
		return t;
	};
	_proto.normalbtn_i = function () {
		var t = new eui.Image();
		this.normalbtn = t;
		t.source = "btn_use_png";
		t.x = 494;
		t.y = 104;
		return t;
	};
	_proto.unlockBtn_i = function () {
		var t = new eui.Image();
		this.unlockBtn = t;
		t.source = "btn_cc_01_png";
		t.x = 494;
		t.y = 102;
		return t;
	};
	_proto.tryBtn_i = function () {
		var t = new eui.Image();
		this.tryBtn = t;
		t.source = "btn_cc_00_png";
		t.x = 494;
		t.y = 184;
		return t;
	};
	return shopItemSkin;
})(eui.Skin);generateEUI.paths['resource/modal/squareGuide.exml'] = window.squareGuideSkin = (function (_super) {
	__extends(squareGuideSkin, _super);
	function squareGuideSkin() {
		_super.call(this);
		this.skinParts = ["txt_1","txt_2","txtGroup","img","knowBtn"];
		
		this.height = 700;
		this.elementsContent = [this.txtGroup_i(),this.img_i(),this._Rect1_i(),this.knowBtn_i()];
	}
	var _proto = squareGuideSkin.prototype;

	_proto.txtGroup_i = function () {
		var t = new eui.Group();
		this.txtGroup = t;
		t.cacheAsBitmap = true;
		t.x = 0;
		t.y = 100;
		t.elementsContent = [this._Image1_i(),this.txt_1_i(),this.txt_2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_text_guide_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_1_i = function () {
		var t = new eui.Label();
		this.txt_1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "爆炸方块现身";
		t.textAlign = "center";
		t.textColor = 0x6c371a;
		t.y = 39;
		return t;
	};
	_proto.txt_2_i = function () {
		var t = new eui.Label();
		this.txt_2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "可引爆周围的方块";
		t.textAlign = "center";
		t.textColor = 0x6c371a;
		t.y = 94;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0.5;
		t.source = "img_diamonds_big_01_png";
		t.y = 338;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 65;
		t.fillAlpha = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 2;
		t.verticalCenter = 304;
		t.width = 150;
		t.x = 118;
		t.y = 635;
		return t;
	};
	_proto.knowBtn_i = function () {
		var t = new eui.Label();
		this.knowBtn = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 60;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "知道了";
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.verticalCenter = 304;
		t.width = 150;
		t.x = 139;
		t.y = 647;
		return t;
	};
	return squareGuideSkin;
})(eui.Skin);generateEUI.paths['resource/modal/teachModal.exml'] = window.teachModalSkin = (function (_super) {
	__extends(teachModalSkin, _super);
	function teachModalSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","closeBtn","glass_get","glass_num","bullet_get","bullet_num","hammer_get","hammer_num","hat_get","hat_num","lamp_get","lamp_num","contentGroup","goldText","goldGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bgImg_i(),this.closeBtn_i(),this.contentGroup_i(),this.goldGroup_i()];
	}
	var _proto = teachModalSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.source = "img_bg_prop_01_jpg";
		t.top = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "btn_home_01_png";
		t.touchEnabled = true;
		t.x = 30;
		t.y = 40;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 842;
		t.horizontalCenter = 0;
		t.width = 690;
		t.y = 295;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_text_02_png";
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_text_03_png";
		t.y = 296;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 210;
		t.left = 0;
		t.width = 340;
		t.y = 67;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i(),this._Label2_i(),this.glass_get_i(),this._Rect1_i(),this.glass_num_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_prop_02_png";
		t.top = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 19;
		t.source = "img_prop_a1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "开局使用:";
		t.textColor = 0x9d7236;
		t.x = 160;
		t.y = 29;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 10;
		t.size = 22;
		t.text = "可以看清弹药射击路线";
		t.textColor = 0x9D7236;
		t.width = 168;
		t.x = 160;
		t.y = 64;
		return t;
	};
	_proto.glass_get_i = function () {
		var t = new eui.Image();
		this.glass_get = t;
		t.source = "btn_cc_03_png";
		t.x = 148;
		t.y = 130;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 36;
		t.fillColor = 0xbc9d67;
		t.height = 36;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 2;
		t.width = 36;
		t.x = 2;
		t.y = 8;
		return t;
	};
	_proto.glass_num_i = function () {
		var t = new eui.Label();
		this.glass_num = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.size = 26;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 36;
		t.x = 2;
		t.y = 8;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.right = 0;
		t.width = 340;
		t.y = 67;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label3_i(),this._Label4_i(),this.bullet_get_i(),this._Rect2_i(),this.bullet_num_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_prop_02_png";
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -90;
		t.source = "img_prop_b1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "第5关解锁:";
		t.textColor = 0x9D7236;
		t.x = 160;
		t.y = 29;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 10;
		t.size = 22;
		t.text = "装有5颗弹药的神奇筒";
		t.textColor = 0x9D7236;
		t.width = 168;
		t.x = 160;
		t.y = 64;
		return t;
	};
	_proto.bullet_get_i = function () {
		var t = new eui.Image();
		this.bullet_get = t;
		t.source = "btn_cc_03_png";
		t.x = 148;
		t.y = 130;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 36;
		t.fillColor = 0xBC9D67;
		t.height = 36;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 2;
		t.width = 36;
		t.x = 2;
		t.y = 8;
		return t;
	};
	_proto.bullet_num_i = function () {
		var t = new eui.Label();
		this.bullet_num = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.size = 26;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 36;
		t.x = 2;
		t.y = 8;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.left = 0;
		t.width = 340;
		t.y = 357;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label5_i(),this._Label6_i(),this.hammer_get_i(),this._Rect3_i(),this.hammer_num_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_prop_02_png";
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -89.5;
		t.source = "img_prop_c1_png";
		t.y = 44;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "第2关解锁:";
		t.textColor = 0x9D7236;
		t.x = 160;
		t.y = 29;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 10;
		t.size = 22;
		t.text = "一锤可以粉碎任何砖块";
		t.textColor = 0x9D7236;
		t.width = 168;
		t.x = 160;
		t.y = 64;
		return t;
	};
	_proto.hammer_get_i = function () {
		var t = new eui.Image();
		this.hammer_get = t;
		t.source = "btn_cc_04_png";
		t.x = 148;
		t.y = 130;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 36;
		t.fillColor = 0xBC9D67;
		t.height = 36;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 2;
		t.width = 36;
		t.x = 2;
		t.y = 8;
		return t;
	};
	_proto.hammer_num_i = function () {
		var t = new eui.Label();
		this.hammer_num = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.size = 26;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 36;
		t.x = 2;
		t.y = 8;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.right = 0;
		t.width = 340;
		t.y = 357;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Label7_i(),this._Label8_i(),this.hat_get_i(),this._Rect4_i(),this.hat_num_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_prop_02_png";
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -86;
		t.source = "img_prop_d1_png";
		t.y = 49.34;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "第10关解锁:";
		t.textColor = 0x9D7236;
		t.x = 160;
		t.y = 29;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 10;
		t.size = 22;
		t.text = "可使所有弹药伤害翻倍";
		t.textColor = 0x9D7236;
		t.width = 168;
		t.x = 160;
		t.y = 64;
		return t;
	};
	_proto.hat_get_i = function () {
		var t = new eui.Image();
		this.hat_get = t;
		t.source = "btn_cc_04_png";
		t.x = 148;
		t.y = 130;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 36;
		t.fillColor = 0xBC9D67;
		t.height = 36;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 2;
		t.width = 36;
		t.x = 2;
		t.y = 8;
		return t;
	};
	_proto.hat_num_i = function () {
		var t = new eui.Label();
		this.hat_num = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.size = 26;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 36;
		t.x = 2;
		t.y = 8;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.left = 0;
		t.width = 340;
		t.y = 598;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Label9_i(),this._Label10_i(),this.lamp_get_i(),this._Rect5_i(),this.lamp_num_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_prop_02_png";
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -92;
		t.source = "img_prop_e1_png";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "第15关解锁:";
		t.textColor = 0x9D7236;
		t.x = 160;
		t.y = 29;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 10;
		t.size = 22;
		t.text = "可暂停一次方块下落";
		t.textColor = 0x9D7236;
		t.width = 168;
		t.x = 160;
		t.y = 64;
		return t;
	};
	_proto.lamp_get_i = function () {
		var t = new eui.Image();
		this.lamp_get = t;
		t.source = "btn_cc_04_png";
		t.x = 148;
		t.y = 130;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 36;
		t.fillColor = 0xBC9D67;
		t.height = 36;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 2;
		t.width = 36;
		t.x = 2;
		t.y = 8;
		return t;
	};
	_proto.lamp_num_i = function () {
		var t = new eui.Label();
		this.lamp_num = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.size = 26;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 36;
		t.x = 2;
		t.y = 8;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.x = 130;
		t.y = 45.04;
		t.elementsContent = [this._Image13_i(),this.goldText_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "btn_remain_diamond_2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goldText_i = function () {
		var t = new eui.BitmapLabel();
		this.goldText = t;
		t.anchorOffsetX = 0;
		t.font = "stripe_text_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "6666";
		t.width = 239.7;
		t.x = 70;
		t.y = 16;
		return t;
	};
	return teachModalSkin;
})(eui.Skin);generateEUI.paths['resource/modal/tipsCom.exml'] = window.tipsComSkin = (function (_super) {
	__extends(tipsComSkin, _super);
	function tipsComSkin() {
		_super.call(this);
		this.skinParts = ["reckMask_1","reckMask_2","tip_1","tip_2"];
		
		this.height = 120;
		this.width = 650;
		this.elementsContent = [this._Rect1_i(),this.reckMask_1_i(),this.reckMask_2_i(),this.tip_1_i(),this.tip_2_i()];
	}
	var _proto = tipsComSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.blendMode = "normal";
		t.ellipseWidth = 70;
		t.fillAlpha = 0.4;
		t.fillColor = 0x003919;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 650;
		return t;
	};
	_proto.reckMask_1_i = function () {
		var t = new eui.Rect();
		this.reckMask_1 = t;
		t.anchorOffsetX = 0;
		t.blendMode = "normal";
		t.ellipseWidth = 70;
		t.fillAlpha = 1;
		t.fillColor = 0x003919;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 650;
		return t;
	};
	_proto.reckMask_2_i = function () {
		var t = new eui.Rect();
		this.reckMask_2 = t;
		t.anchorOffsetX = 0;
		t.blendMode = "normal";
		t.ellipseWidth = 70;
		t.fillAlpha = 1;
		t.fillColor = 0x003919;
		t.height = 60;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 650;
		return t;
	};
	_proto.tip_1_i = function () {
		var t = new eui.Label();
		this.tip_1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 60;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "当你打不过了，去找新的植物炮弹帮助你吧";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 30;
		return t;
	};
	_proto.tip_2_i = function () {
		var t = new eui.Label();
		this.tip_2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 60;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "你知道吗？包菜君可以说是最厉害的弹药了";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 90;
		return t;
	};
	return tipsComSkin;
})(eui.Skin);generateEUI.paths['resource/modal/toolGuide.exml'] = window.toolGuideSkin = (function (_super) {
	__extends(toolGuideSkin, _super);
	function toolGuideSkin() {
		_super.call(this);
		this.skinParts = ["txt_1","txt_2","txt_3","txtGroup"];
		
		this.height = 310;
		this.width = 386;
		this.elementsContent = [this.txtGroup_i()];
	}
	var _proto = toolGuideSkin.prototype;

	_proto.txtGroup_i = function () {
		var t = new eui.Group();
		this.txtGroup = t;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.txt_1_i(),this.txt_2_i(),this.txt_3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_text_guide_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_1_i = function () {
		var t = new eui.Label();
		this.txt_1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 32;
		t.text = "oh~新道具";
		t.textAlign = "center";
		t.textColor = 0x6c371a;
		t.y = 38;
		return t;
	};
	_proto.txt_2_i = function () {
		var t = new eui.Label();
		this.txt_2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "可使弹药威力翻倍";
		t.textAlign = "center";
		t.textColor = 0x6c371a;
		t.y = 93;
		return t;
	};
	_proto.txt_3_i = function () {
		var t = new eui.Label();
		this.txt_3 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "快点击使用吧~";
		t.textAlign = "center";
		t.textColor = 0x6c371a;
		t.visible = false;
		t.x = 90;
		t.y = 64;
		return t;
	};
	return toolGuideSkin;
})(eui.Skin);generateEUI.paths['resource/modal/useToolModal.exml'] = window.useToolModalSkin = (function (_super) {
	__extends(useToolModalSkin, _super);
	function useToolModalSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","title","describ","light","img","useBtn"];
		
		this.height = 750;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.title_i(),this.describ_i(),this._Rect1_i(),this.light_i(),this.img_i(),this.useBtn_i()];
	}
	var _proto = useToolModalSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_tool_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "btn_close_png";
		t.x = 522;
		t.y = 11;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.horizontalCenter = 0;
		t.source = "img_name_01_png";
		t.y = 103;
		return t;
	};
	_proto.describ_i = function () {
		var t = new eui.Label();
		this.describ = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "该道具";
		t.textColor = 0x6d381b;
		t.y = 166;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 60;
		t.fillAlpha = 0;
		t.height = 216;
		t.horizontalCenter = 0;
		t.strokeColor = 0xf2d298;
		t.strokeWeight = 3;
		t.width = 228;
		t.y = 233;
		return t;
	};
	_proto.light_i = function () {
		var t = new eui.Image();
		this.light = t;
		t.anchorOffsetX = 175;
		t.anchorOffsetY = 175;
		t.height = 350;
		t.horizontalCenter = 0;
		t.source = "img_light_star_png";
		t.width = 350;
		t.y = 339;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "img_gift_06_png";
		t.y = 260.5;
		return t;
	};
	_proto.useBtn_i = function () {
		var t = new eui.Image();
		this.useBtn = t;
		t.horizontalCenter = 0;
		t.source = "btn_use_magic_png";
		t.y = 508;
		return t;
	};
	return useToolModalSkin;
})(eui.Skin);generateEUI.paths['resource/page/cloudCom.exml'] = window.cloudComSkin = (function (_super) {
	__extends(cloudComSkin, _super);
	function cloudComSkin() {
		_super.call(this);
		this.skinParts = ["img_1","img_2"];
		
		this.height = 152;
		this.width = 750;
		this.elementsContent = [this.img_1_i(),this.img_2_i()];
	}
	var _proto = cloudComSkin.prototype;

	_proto.img_1_i = function () {
		var t = new eui.Image();
		this.img_1 = t;
		t.source = "cloud_top_left_png";
		return t;
	};
	_proto.img_2_i = function () {
		var t = new eui.Image();
		this.img_2 = t;
		t.source = "cloud_top_right_png";
		t.x = 750;
		return t;
	};
	return cloudComSkin;
})(eui.Skin);generateEUI.paths['resource/page/gameOver.exml'] = window.gameOverSkin = (function (_super) {
	__extends(gameOverSkin, _super);
	var gameOverSkin$Skin9 = 	(function (_super) {
		__extends(gameOverSkin$Skin9, _super);
		function gameOverSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameOverSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_challenge_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameOverSkin$Skin9;
	})(eui.Skin);

	var gameOverSkin$Skin10 = 	(function (_super) {
		__extends(gameOverSkin$Skin10, _super);
		function gameOverSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameOverSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_share_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameOverSkin$Skin10;
	})(eui.Skin);

	var gameOverSkin$Skin11 = 	(function (_super) {
		__extends(gameOverSkin$Skin11, _super);
		function gameOverSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameOverSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_home_02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameOverSkin$Skin11;
	})(eui.Skin);

	function gameOverSkin() {
		_super.call(this);
		this.skinParts = ["levelText","levelProccess","playBtn","shareBtn","homeBtn","moreGroup"];
		
		this.height = 920;
		this.width = 636;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.levelText_i(),this._Rect1_i(),this._Image2_i(),this.levelProccess_i(),this.playBtn_i(),this.shareBtn_i(),this.homeBtn_i(),this.moreGroup_i()];
	}
	var _proto = gameOverSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.smoothing = true;
		t.source = "img_bg_bb_02_png";
		t.top = -40;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x603005;
		t.text = "闯关失败";
		t.textColor = 0xffffff;
		t.y = 102.08;
		return t;
	};
	_proto.levelText_i = function () {
		var t = new eui.Label();
		this.levelText = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "第2关";
		t.textColor = 0x6c371a;
		t.y = 226;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 40;
		t.fillColor = 0xf6d7a8;
		t.height = 100;
		t.horizontalCenter = 0;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0xf5a144;
		t.strokeWeight = 1;
		t.width = 400;
		t.y = 295;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "img_remain_diamonds_png";
		t.x = 169;
		t.y = 312.5;
		return t;
	};
	_proto.levelProccess_i = function () {
		var t = new eui.BitmapLabel();
		this.levelProccess = t;
		t.font = "stripe_text_fnt";
		t.text = "1 / 20";
		t.x = 283.42;
		t.y = 325;
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new tweenButton();
		this.playBtn = t;
		t.anchorOffsetX = 121;
		t.anchorOffsetY = 56;
		t.label = "";
		t.x = 192;
		t.y = 681;
		t.skinName = gameOverSkin$Skin9;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new tweenButton();
		this.shareBtn = t;
		t.anchorOffsetX = 121;
		t.anchorOffsetY = 56;
		t.label = "";
		t.x = 444;
		t.y = 681;
		t.skinName = gameOverSkin$Skin10;
		return t;
	};
	_proto.homeBtn_i = function () {
		var t = new tweenButton();
		this.homeBtn = t;
		t.anchorOffsetX = 88;
		t.anchorOffsetY = 18.5;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 825.5;
		t.skinName = gameOverSkin$Skin11;
		return t;
	};
	_proto.moreGroup_i = function () {
		var t = new eui.Group();
		this.moreGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 169.7;
		t.horizontalCenter = 0;
		t.width = 540;
		t.y = 436;
		return t;
	};
	return gameOverSkin;
})(eui.Skin);generateEUI.paths['resource/page/levelCom.exml'] = window.levelComSkin = (function (_super) {
	__extends(levelComSkin, _super);
	function levelComSkin() {
		_super.call(this);
		this.skinParts = ["light","headmask","headimg","head","content","scroller"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.scroller_i()];
	}
	var _proto = levelComSkin.prototype;

	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetY = 0;
		t.bounces = true;
		t.height = 1184;
		t.horizontalCenter = 0;
		t.width = 750;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.content_i()];
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.anchorOffsetY = 0;
		t.height = 1039.24;
		t.width = 750;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.head_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xaddc8b;
		t.height = 164;
		t.width = 750;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_map_01_png";
		t.y = 164;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "img_map_02_png";
		t.x = 0;
		t.y = 294;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "img_map_03_png";
		t.x = 10;
		t.y = 424;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Group();
		this.head = t;
		t.height = 150;
		t.width = 150;
		t.x = 339;
		t.y = 424;
		t.elementsContent = [this.light_i(),this._Image4_i(),this.headmask_i(),this.headimg_i()];
		return t;
	};
	_proto.light_i = function () {
		var t = new eui.Image();
		this.light = t;
		t.anchorOffsetX = 138;
		t.anchorOffsetY = 139.5;
		t.horizontalCenter = 0;
		t.source = "head_light_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_head_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.headmask_i = function () {
		var t = new eui.Rect();
		this.headmask = t;
		t.ellipseWidth = 15;
		t.height = 80;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.headimg_i = function () {
		var t = new eui.Image();
		this.headimg = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	return levelComSkin;
})(eui.Skin);generateEUI.paths['resource/page/runningScene.exml'] = window.runningSceneSkin = (function (_super) {
	__extends(runningSceneSkin, _super);
	function runningSceneSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","goldText","goldGroup","amountText","levelText","proccessBar","star_1","star_2","star_3","scoreText","scoreProccess","recommandGroup","hammer_img","hammer_numrect","hammer_num","hammer_lock","hammer_text","hammer","hat_img","hat_numrect","hat_num","hat_lock","hat_text","hat","lamp_img","lamp_numrect","lamp_num","lamp_lock","lamp_text","lamp","toolBottom","heroImg","hero","bulletImg","bulletNum","rayGroup","homeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bgImg_i(),this._Image1_i(),this._Group1_i(),this.scoreProccess_i(),this.recommandGroup_i(),this.toolBottom_i(),this._Image9_i(),this.hero_i(),this.bulletImg_i(),this.bulletNum_i(),this.rayGroup_i(),this.homeBtn_i()];
	}
	var _proto = runningSceneSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.source = "img_bg_game_02_jpg";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_game_03_png";
		t.touchEnabled = false;
		t.y = 213;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.width = 600;
		t.x = 35;
		t.y = 50;
		t.elementsContent = [this.goldGroup_i(),this._Image3_i(),this._Image4_i(),this.amountText_i()];
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.touchEnabled = true;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.goldText_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "btn_remain_diamond_3_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goldText_i = function () {
		var t = new eui.BitmapLabel();
		this.goldText = t;
		t.anchorOffsetX = 0;
		t.font = "stripe_text_fnt";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "333";
		t.touchEnabled = false;
		t.x = 69.01;
		t.y = 19;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "img_bg_green_2_png";
		t.touchEnabled = false;
		t.x = 221.36;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "img_diamonds_00_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 246.03;
		return t;
	};
	_proto.amountText_i = function () {
		var t = new eui.BitmapLabel();
		this.amountText = t;
		t.font = "stripe_text_fnt";
		t.letterSpacing = -6;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "01/20";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 384.37;
		return t;
	};
	_proto.scoreProccess_i = function () {
		var t = new eui.Group();
		this.scoreProccess = t;
		t.anchorOffsetY = 0;
		t.height = 53.33;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.width = 690;
		t.y = 260;
		t.elementsContent = [this.levelText_i(),this._Image5_i(),this.proccessBar_i(),this.star_1_i(),this.star_2_i(),this.star_3_i(),this.scoreText_i()];
		return t;
	};
	_proto.levelText_i = function () {
		var t = new eui.BitmapLabel();
		this.levelText = t;
		t.cacheAsBitmap = true;
		t.font = "brown_white_text_fnt";
		t.text = "第99关";
		t.textAlign = "center";
		t.verticalCenter = -2.664999999999999;
		t.x = 22.67;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "img_schedule_02_png";
		t.touchEnabled = false;
		t.verticalCenter = 1.8350000000000009;
		t.x = 152;
		return t;
	};
	_proto.proccessBar_i = function () {
		var t = new eui.Image();
		this.proccessBar = t;
		t.scale9Grid = new egret.Rectangle(7,3,365,17);
		t.source = "img_schedule_01_png";
		t.touchEnabled = false;
		t.verticalCenter = 2.335000000000001;
		t.width = 360;
		t.x = 152;
		return t;
	};
	_proto.star_1_i = function () {
		var t = new eui.Image();
		this.star_1 = t;
		t.height = 27;
		t.rotation = 349.97;
		t.source = "img_star_b2_png";
		t.touchEnabled = false;
		t.verticalCenter = 0.8350000000000009;
		t.width = 27;
		t.x = 242;
		return t;
	};
	_proto.star_2_i = function () {
		var t = new eui.Image();
		this.star_2 = t;
		t.height = 32;
		t.rotation = 348.68;
		t.source = "img_star_b2_png";
		t.touchEnabled = false;
		t.verticalCenter = 0.33500000000000085;
		t.width = 32;
		t.x = 340;
		return t;
	};
	_proto.star_3_i = function () {
		var t = new eui.Image();
		this.star_3 = t;
		t.height = 35;
		t.rotation = 16.51;
		t.source = "img_star_b2_png";
		t.touchEnabled = false;
		t.verticalCenter = 1.3350000000000009;
		t.width = 35;
		t.x = 512;
		return t;
	};
	_proto.scoreText_i = function () {
		var t = new eui.BitmapLabel();
		this.scoreText = t;
		t.anchorOffsetX = 0;
		t.font = "brown_white_text_fnt";
		t.letterSpacing = -4;
		t.right = -26;
		t.text = "6666";
		t.touchEnabled = false;
		t.verticalCenter = -1.6649999999999991;
		t.width = 168;
		return t;
	};
	_proto.recommandGroup_i = function () {
		var t = new eui.Group();
		this.recommandGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.width = 332;
		t.x = 30;
		t.y = 128;
		return t;
	};
	_proto.toolBottom_i = function () {
		var t = new eui.Group();
		this.toolBottom = t;
		t.anchorOffsetX = 0;
		t.width = 364.67;
		t.x = 370;
		t.y = 138.68;
		t.elementsContent = [this.hammer_i(),this.hat_i(),this.lamp_i()];
		return t;
	};
	_proto.hammer_i = function () {
		var t = new eui.Group();
		this.hammer = t;
		t.width = 110;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.hammer_img_i(),this.hammer_numrect_i(),this.hammer_num_i(),this.hammer_lock_i(),this.hammer_text_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg_prop_01_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hammer_img_i = function () {
		var t = new eui.Image();
		this.hammer_img = t;
		t.anchorOffsetX = 53.5;
		t.anchorOffsetY = 59;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "img_prop_c1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.hammer_numrect_i = function () {
		var t = new eui.Rect();
		this.hammer_numrect = t;
		t.cacheAsBitmap = true;
		t.ellipseWidth = 32;
		t.fillColor = 0x64c101;
		t.height = 32;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 2;
		t.touchEnabled = false;
		t.width = 32;
		t.x = 78;
		t.y = 7;
		return t;
	};
	_proto.hammer_num_i = function () {
		var t = new eui.Label();
		this.hammer_num = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "+";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.width = 30;
		t.x = 79.61;
		t.y = 12;
		return t;
	};
	_proto.hammer_lock_i = function () {
		var t = new eui.Image();
		this.hammer_lock = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icn_lock_png";
		t.top = 0;
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto.hammer_text_i = function () {
		var t = new eui.Label();
		this.hammer_text = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "第2关";
		t.textColor = 0x7A7867;
		t.visible = false;
		t.y = 81.72;
		return t;
	};
	_proto.hat_i = function () {
		var t = new eui.Group();
		this.hat = t;
		t.width = 110;
		t.x = 121;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this.hat_img_i(),this.hat_numrect_i(),this.hat_num_i(),this.hat_lock_i(),this.hat_text_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg_prop_01_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hat_img_i = function () {
		var t = new eui.Image();
		this.hat_img = t;
		t.anchorOffsetX = 57;
		t.anchorOffsetY = 57.5;
		t.horizontalCenter = -0.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "img_prop_d1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.hat_numrect_i = function () {
		var t = new eui.Rect();
		this.hat_numrect = t;
		t.cacheAsBitmap = true;
		t.ellipseWidth = 32;
		t.fillColor = 0x64c101;
		t.height = 32;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 2;
		t.touchEnabled = false;
		t.width = 32;
		t.x = 78;
		t.y = 7;
		return t;
	};
	_proto.hat_num_i = function () {
		var t = new eui.Label();
		this.hat_num = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "1";
		t.textAlign = "center";
		t.width = 30;
		t.x = 79.61;
		t.y = 12;
		return t;
	};
	_proto.hat_lock_i = function () {
		var t = new eui.Image();
		this.hat_lock = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icn_lock_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.hat_text_i = function () {
		var t = new eui.Label();
		this.hat_text = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "第10关";
		t.textColor = 0x7A7867;
		t.visible = false;
		t.y = 81.72;
		return t;
	};
	_proto.lamp_i = function () {
		var t = new eui.Group();
		this.lamp = t;
		t.width = 110;
		t.x = 242;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this.lamp_img_i(),this.lamp_numrect_i(),this.lamp_num_i(),this.lamp_lock_i(),this.lamp_text_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg_prop_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lamp_img_i = function () {
		var t = new eui.Image();
		this.lamp_img = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 64.5;
		t.horizontalCenter = -0.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "img_prop_e1_png";
		t.y = 48;
		return t;
	};
	_proto.lamp_numrect_i = function () {
		var t = new eui.Rect();
		this.lamp_numrect = t;
		t.ellipseWidth = 32;
		t.fillColor = 0x64c101;
		t.height = 32;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 2;
		t.width = 32;
		t.x = 78;
		t.y = 7;
		return t;
	};
	_proto.lamp_num_i = function () {
		var t = new eui.Label();
		this.lamp_num = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.size = 26;
		t.text = "1";
		t.textAlign = "center";
		t.width = 30;
		t.x = 79.61;
		t.y = 12;
		return t;
	};
	_proto.lamp_lock_i = function () {
		var t = new eui.Image();
		this.lamp_lock = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icn_lock_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.lamp_text_i = function () {
		var t = new eui.Label();
		this.lamp_text = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "第15关";
		t.textColor = 0x7A7867;
		t.visible = false;
		t.y = 81.72;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.cacheAsBitmap = true;
		t.horizontalCenter = 0;
		t.source = "img_bg_game_01_jpg";
		t.touchEnabled = false;
		t.y = 319;
		return t;
	};
	_proto.hero_i = function () {
		var t = new eui.Group();
		this.hero = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 160;
		t.height = 180;
		t.width = 154;
		t.x = 378;
		t.y = 1251;
		t.elementsContent = [this.heroImg_i()];
		return t;
	};
	_proto.heroImg_i = function () {
		var t = new eui.Image();
		this.heroImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_role_1_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.bulletImg_i = function () {
		var t = new eui.Image();
		this.bulletImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.33;
		t.source = "img_bullet_a2_png";
		t.touchEnabled = false;
		t.width = 57.66;
		t.x = 605.3;
		t.y = 1230.99;
		return t;
	};
	_proto.bulletNum_i = function () {
		var t = new eui.BitmapLabel();
		this.bulletNum = t;
		t.font = "stripe_text_fnt";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "X5";
		t.touchEnabled = false;
		t.x = 663;
		t.y = 1258;
		return t;
	};
	_proto.rayGroup_i = function () {
		var t = new eui.Group();
		this.rayGroup = t;
		t.anchorOffsetY = 0;
		t.height = 914;
		t.horizontalCenter = 0;
		t.width = 690;
		t.y = 319;
		return t;
	};
	_proto.homeBtn_i = function () {
		var t = new eui.Image();
		this.homeBtn = t;
		t.right = 0;
		t.source = "game_img_home_png";
		t.touchEnabled = true;
		t.y = 297.67;
		return t;
	};
	return runningSceneSkin;
})(eui.Skin);generateEUI.paths['resource/page/startScene.exml'] = window.startSceneSkin = (function (_super) {
	__extends(startSceneSkin, _super);
	var startSceneSkin$Skin12 = 	(function (_super) {
		__extends(startSceneSkin$Skin12, _super);
		function startSceneSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = startSceneSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icn_home_05_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return startSceneSkin$Skin12;
	})(eui.Skin);

	var startSceneSkin$Skin13 = 	(function (_super) {
		__extends(startSceneSkin$Skin13, _super);
		function startSceneSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = startSceneSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icn_home_06_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return startSceneSkin$Skin13;
	})(eui.Skin);

	var startSceneSkin$Skin14 = 	(function (_super) {
		__extends(startSceneSkin$Skin14, _super);
		function startSceneSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = startSceneSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icn_home_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return startSceneSkin$Skin14;
	})(eui.Skin);

	var startSceneSkin$Skin15 = 	(function (_super) {
		__extends(startSceneSkin$Skin15, _super);
		function startSceneSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = startSceneSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icn_home_02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return startSceneSkin$Skin15;
	})(eui.Skin);

	var startSceneSkin$Skin16 = 	(function (_super) {
		__extends(startSceneSkin$Skin16, _super);
		function startSceneSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = startSceneSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icn_home_03_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return startSceneSkin$Skin16;
	})(eui.Skin);

	function startSceneSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","liftText","lifeGroup","goldText","goldGroup","openLife","life_dot","openShare","openBullet","bullet_new_icon","openShop","tool_dot","openRank","red_dot","openGift","navGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bgImg_i(),this.lifeGroup_i(),this.goldGroup_i(),this.openLife_i(),this.life_dot_i(),this.openShare_i(),this.navGroup_i(),this._Image6_i(),this._tipsCom1_i()];
	}
	var _proto = startSceneSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Rect();
		this.bgImg = t;
		t.fillColor = 0xaddc8b;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 750;
		return t;
	};
	_proto.lifeGroup_i = function () {
		var t = new eui.Group();
		this.lifeGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.width = 236;
		t.x = 25.68;
		t.y = 60;
		t.elementsContent = [this._Image1_i(),this.liftText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btn_remain_strength_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.liftText_i = function () {
		var t = new eui.BitmapLabel();
		this.liftText = t;
		t.font = "stripe_text_fnt";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "5/5";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.width = 250;
		t.x = 66;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.cacheAsBitmap = false;
		t.height = 70;
		t.width = 236;
		t.x = 263;
		t.y = 60;
		t.elementsContent = [this._Image2_i(),this.goldText_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btn_remain_diamond_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.goldText_i = function () {
		var t = new eui.BitmapLabel();
		this.goldText = t;
		t.anchorOffsetX = 0;
		t.font = "stripe_text_fnt";
		t.rotation = 359.88;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "66";
		t.textAlign = "center";
		t.verticalCenter = -3;
		t.width = 250;
		t.x = 70;
		return t;
	};
	_proto.openLife_i = function () {
		var t = new tweenButton();
		this.openLife = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 62.5;
		t.label = "";
		t.x = 670;
		t.y = 755.5;
		t.skinName = startSceneSkin$Skin12;
		return t;
	};
	_proto.life_dot_i = function () {
		var t = new eui.Image();
		this.life_dot = t;
		t.source = "img_red_dot_png";
		t.x = 700;
		t.y = 697;
		return t;
	};
	_proto.openShare_i = function () {
		var t = new tweenButton();
		this.openShare = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 62.5;
		t.label = "";
		t.x = 670;
		t.y = 916.5;
		t.skinName = startSceneSkin$Skin13;
		return t;
	};
	_proto.navGroup_i = function () {
		var t = new eui.Group();
		this.navGroup = t;
		t.anchorOffsetX = 0;
		t.cacheAsBitmap = true;
		t.height = 135;
		t.horizontalCenter = 0;
		t.y = 1159;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.openBullet_i(),this.bullet_new_icon_i(),this.openShop_i(),this.tool_dot_i(),this.openRank_i(),this.openGift_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.openBullet_i = function () {
		var t = new tweenButton();
		this.openBullet = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 67.5;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 65;
		t.skinName = startSceneSkin$Skin14;
		return t;
	};
	_proto.bullet_new_icon_i = function () {
		var t = new eui.Image();
		this.bullet_new_icon = t;
		t.source = "bullet_new_icon_png";
		t.x = 90;
		t.y = -8;
		return t;
	};
	_proto.openShop_i = function () {
		var t = new tweenButton();
		this.openShop = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 67.5;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 235;
		t.skinName = startSceneSkin$Skin15;
		return t;
	};
	_proto.tool_dot_i = function () {
		var t = new eui.Image();
		this.tool_dot = t;
		t.source = "img_red_dot_png";
		t.x = 269.04;
		t.y = 10.96;
		return t;
	};
	_proto.openRank_i = function () {
		var t = new tweenButton();
		this.openRank = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 67.5;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 395;
		t.skinName = startSceneSkin$Skin16;
		return t;
	};
	_proto.openGift_i = function () {
		var t = new eui.Group();
		this.openGift = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 67.5;
		t.height = 135;
		t.verticalCenter = 0;
		t.width = 130;
		t.x = 555;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this.red_dot_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "icn_home_04c_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "icn_home_04b_png";
		t.y = 24.41;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "icn_home_04a_png";
		return t;
	};
	_proto.red_dot_i = function () {
		var t = new eui.Image();
		this.red_dot = t;
		t.source = "img_red_dot_png";
		t.x = 97.04;
		t.y = 10.96;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "img_game_name_png";
		t.y = 241;
		return t;
	};
	_proto._tipsCom1_i = function () {
		var t = new tipsCom();
		t.horizontalCenter = 0;
		t.y = 119.35;
		return t;
	};
	return startSceneSkin;
})(eui.Skin);