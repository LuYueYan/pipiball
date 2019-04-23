var egret = window.egret;window.skins={};
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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","runningScene":"resource/page/runningScene.exml","startScene":"resource/page/startScene.exml","rankModal":"resource/modal/rankModal.exml","rankItem":"resource/modal/rankItem.exml","getLifr":"resource/eui_skins/getLifr.exml","getLifeModal":"resource/modal/getLifeModal.exml","moreItem":"resource/modal/moreItem.exml","moreScroller":"resource/modal/moreScroller.exml","rebornModal":"resource/modal/rebornModal.exml","gameOver":"resource/page/gameOver.exml","levelUpModal":"resource/modal/levelUpModal.exml","getSuccess":"resource/modal/getSuccess.exml","playBefore":"resource/modal/playBefore.exml","myShop":"resource/modal/myShop.exml","shopItem":"resource/modal/shopItem.exml","teachModal":"resource/modal/teachModal.exml","moreComponent":"resource/modal/moreComponent.exml","levelCom":"resource/page/levelCom.exml","levelItem":"resource/modal/levelItem.exml","cloudCom":"resource/page/cloudCom.exml","giftModal":"resource/modal/giftModal.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
		this.skinParts = ["closeBtn","videoBtn","shareBtn","shareTimes","timeText"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.videoBtn_i(),this.shareBtn_i(),this.shareTimes_i(),this._Label1_i(),this._Group1_i(),this._Image3_i(),this._Image4_i()];
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
		t.y = 643;
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
		t.y = 781;
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
		t.y = 796.2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "每日5次机会";
		t.textColor = 0x79aa3e;
		t.y = 854.21;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.width = 330;
		t.y = 514;
		t.elementsContent = [this.timeText_i(),this._Image2_i()];
		return t;
	};
	_proto.timeText_i = function () {
		var t = new eui.Label();
		this.timeText = t;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 28;
		t.text = "还差05:00恢复1点体力";
		t.textColor = 0x874717;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "img_hourglass_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "img_text_04_png";
		t.x = 273;
		t.y = 247;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
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
		t.horizontalCenter = 0.5;
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
		this.skinParts = ["closeBtn","bg_0","bg_1","bg_2","bg_3","bg_4","bg_5","bg_6","bg_7","getBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Group9_i()];
	}
	var _proto = giftModalSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_lottery_00_jpg";
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
		t.text = "X20";
		t.x = 89;
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
		t.source = "img_star_b2_png";
		t.width = 34;
		t.x = 45;
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
		this.elementsContent = [this._Image1_i(),this.light_i(),this.star_1_i(),this.star_2_i(),this.star_3_i(),this.levelText_i(),this.scoreText_i(),this._Image2_i(),this.goldText_i(),this.videoBtn_i(),this._Rect1_i(),this.getBtn_i(),this._Image3_i(),this._Label1_i()];
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
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "太棒了！";
		t.y = 64;
		return t;
	};
	return levelUpModalSkin;
})(eui.Skin);generateEUI.paths['resource/modal/moreComponent.exml'] = window.moreComponentSkin = (function (_super) {
	__extends(moreComponentSkin, _super);
	function moreComponentSkin() {
		_super.call(this);
		this.skinParts = ["changeArea","tipImg","content","container"];
		
		this.height = 680;
		this.width = 465;
		this.elementsContent = [this.container_i()];
	}
	var _proto = moreComponentSkin.prototype;

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
		t.height = 608;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 400;
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
	var playBeforeSkin$Skin7 = 	(function (_super) {
		__extends(playBeforeSkin$Skin7, _super);
		function playBeforeSkin$Skin7() {
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
		var _proto = playBeforeSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_start_01_png";
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
		return playBeforeSkin$Skin7;
	})(eui.Skin);

	function playBeforeSkin() {
		_super.call(this);
		this.skinParts = ["titleText","glassLight","glassNum","glassAdd","glassChoose","glass","bulletLight","bulletNum","bulletAdd","bulletChoose","bullet","startBtn","closeBtn","videoBtn"];
		
		this.height = 750;
		this.width = 605;
		this.elementsContent = [this._Image1_i(),this.titleText_i(),this._Label1_i(),this.glass_i(),this.bullet_i(),this.startBtn_i(),this.closeBtn_i(),this.videoBtn_i()];
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
	_proto.glass_i = function () {
		var t = new eui.Group();
		this.glass = t;
		t.height = 160;
		t.width = 160;
		t.x = 128.5;
		t.y = 288;
		t.elementsContent = [this._Rect1_i(),this.glassLight_i(),this._Image2_i(),this.glassNum_i(),this.glassAdd_i(),this.glassChoose_i()];
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
		t.height = 300;
		t.horizontalCenter = 0;
		t.source = "img_light_star_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 300;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "img_gift_04_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.glassNum_i = function () {
		var t = new eui.BitmapLabel();
		this.glassNum = t;
		t.font = "stripe_text_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "X1";
		t.x = 95;
		t.y = 112;
		return t;
	};
	_proto.glassAdd_i = function () {
		var t = new eui.Image();
		this.glassAdd = t;
		t.source = "btn_more_png";
		t.visible = false;
		t.x = 102;
		t.y = 108;
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
		t.x = 356;
		t.y = 288;
		t.elementsContent = [this._Rect2_i(),this.bulletLight_i(),this._Image3_i(),this.bulletNum_i(),this.bulletAdd_i(),this.bulletChoose_i()];
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
		t.height = 300;
		t.horizontalCenter = 0;
		t.source = "img_light_star_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 300;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "img_gift_05_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bulletNum_i = function () {
		var t = new eui.BitmapLabel();
		this.bulletNum = t;
		t.font = "stripe_text_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
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
		t.y = 108;
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
	_proto.startBtn_i = function () {
		var t = new tweenButton();
		this.startBtn = t;
		t.anchorOffsetX = 111;
		t.anchorOffsetY = 56;
		t.label = "";
		t.x = 166;
		t.y = 561;
		t.skinName = playBeforeSkin$Skin7;
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
	_proto.videoBtn_i = function () {
		var t = new eui.Image();
		this.videoBtn = t;
		t.anchorOffsetX = 131;
		t.anchorOffsetY = 56;
		t.source = "btn_before_01_png";
		t.touchEnabled = true;
		t.x = 420;
		t.y = 561;
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
	var rankModalSkin$Skin8 = 	(function (_super) {
		__extends(rankModalSkin$Skin8, _super);
		function rankModalSkin$Skin8() {
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
		var _proto = rankModalSkin$Skin8.prototype;

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
		return rankModalSkin$Skin8;
	})(eui.Skin);

	function rankModalSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","friendGroup","worldGroup","friend","world","lastPage","nextPage","pageText","goHome","myRank"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bgImg_i(),this.friendGroup_i(),this.worldGroup_i(),this.friend_i(),this.world_i(),this._Group1_i(),this.goHome_i(),this.myRank_i()];
	}
	var _proto = rankModalSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.height = 1334;
		t.source = "img_bg_ranking_01_jpg";
		t.width = 750;
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
		t.horizontalCenter = 0;
		t.width = 588;
		t.y = 300;
		return t;
	};
	_proto.worldGroup_i = function () {
		var t = new eui.Group();
		this.worldGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.cacheAsBitmap = true;
		t.height = 690;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 588;
		t.y = 348;
		return t;
	};
	_proto.friend_i = function () {
		var t = new eui.Image();
		this.friend = t;
		t.source = "btn_tittle_a1_png";
		t.touchEnabled = true;
		t.x = 100;
		t.y = 218;
		return t;
	};
	_proto.world_i = function () {
		var t = new eui.Image();
		this.world = t;
		t.source = "btn_tittle_b2_png";
		t.touchEnabled = true;
		t.x = 400;
		t.y = 218;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = -0.5;
		t.width = 168;
		t.y = 984;
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
	_proto.goHome_i = function () {
		var t = new eui.Button();
		this.goHome = t;
		t.label = "";
		t.x = 30;
		t.y = 40;
		t.skinName = rankModalSkin$Skin8;
		return t;
	};
	_proto.myRank_i = function () {
		var t = new eui.Label();
		this.myRank = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "您当前为：第10名";
		t.textColor = 0x9d7236;
		t.visible = false;
		t.y = 305;
		return t;
	};
	return rankModalSkin;
})(eui.Skin);generateEUI.paths['resource/modal/rebornModal.exml'] = window.rebornModalSkin = (function (_super) {
	__extends(rebornModalSkin, _super);
	var rebornModalSkin$Skin9 = 	(function (_super) {
		__extends(rebornModalSkin$Skin9, _super);
		function rebornModalSkin$Skin9() {
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
		var _proto = rebornModalSkin$Skin9.prototype;

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
		return rebornModalSkin$Skin9;
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
		t.skinName = rebornModalSkin$Skin9;
		return t;
	};
	return rebornModalSkin;
})(eui.Skin);generateEUI.paths['resource/modal/shopItem.exml'] = window.shopItemSkin = (function (_super) {
	__extends(shopItemSkin, _super);
	function shopItemSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","img","power","title","txt","price","btn"];
		
		this.height = 293;
		this.width = 738;
		this.elementsContent = [this.bgImg_i(),this._Group1_i(),this.title_i(),this.txt_i(),this.price_i(),this._Image2_i(),this.btn_i()];
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
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "icn_diamond_02_png";
		t.x = 272.81;
		t.y = 201.02;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Image();
		this.btn = t;
		t.source = "btn_use_png";
		t.x = 494.33;
		t.y = 133;
		return t;
	};
	return shopItemSkin;
})(eui.Skin);generateEUI.paths['resource/modal/teachModal.exml'] = window.teachModalSkin = (function (_super) {
	__extends(teachModalSkin, _super);
	function teachModalSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bgImg_i(),this.closeBtn_i(),this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
	}
	var _proto = teachModalSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
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
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_text_02_png";
		t.y = 241;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_text_03_png";
		t.y = 559;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 220;
		t.x = 109.5;
		t.y = 288;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_prop_02_png";
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_prop_a1_png";
		t.y = 56;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "【开局使用】";
		t.textColor = 0x9d7236;
		t.y = 191;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "可以看清弹药射击路线";
		t.textColor = 0x9D7236;
		t.y = 222;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 220;
		t.x = 433;
		t.y = 288;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label3_i(),this._Label4_i()];
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
		t.horizontalCenter = 0;
		t.source = "img_prop_b1_png";
		t.y = 44;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "【第5关解锁】";
		t.textColor = 0x9D7236;
		t.y = 191;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "装有5颗弹药的神奇筒";
		t.textColor = 0x9D7236;
		t.y = 222;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.width = 220;
		t.x = 109.5;
		t.y = 604;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label5_i(),this._Label6_i()];
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
		t.horizontalCenter = 0;
		t.source = "img_prop_c1_png";
		t.y = 44;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "【第2关解锁】";
		t.textColor = 0x9D7236;
		t.y = 191;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "一锤可以粉碎任何砖块";
		t.textColor = 0x9D7236;
		t.y = 222;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.width = 220;
		t.x = 433;
		t.y = 604;
		t.elementsContent = [this._Image9_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_prop_02_png";
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "【第10关解锁】";
		t.textColor = 0x9D7236;
		t.y = 191;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "可使所有弹药伤害翻倍";
		t.textColor = 0x9D7236;
		t.y = 222;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.width = 220;
		t.x = 109.5;
		t.y = 863;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_prop_02_png";
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_prop_c1_png";
		t.y = 44;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "【第15关解锁】";
		t.textColor = 0x9D7236;
		t.y = 191;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "可暂停一次方块下落";
		t.textColor = 0x9D7236;
		t.y = 222;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.width = 220;
		t.x = 433;
		t.y = 863;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Label11_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_prop_02_png";
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_unknown_01_png";
		t.y = 51;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "敬请期待";
		t.textColor = 0x9D7236;
		t.y = 191;
		return t;
	};
	return teachModalSkin;
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
		return gameOverSkin$Skin11;
	})(eui.Skin);

	var gameOverSkin$Skin12 = 	(function (_super) {
		__extends(gameOverSkin$Skin12, _super);
		function gameOverSkin$Skin12() {
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
		var _proto = gameOverSkin$Skin12.prototype;

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
		return gameOverSkin$Skin12;
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
		t.top = 0;
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
		t.y = 142.08;
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
		t.y = 266;
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
		t.y = 335;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "img_remain_diamonds_png";
		t.x = 169;
		t.y = 352.5;
		return t;
	};
	_proto.levelProccess_i = function () {
		var t = new eui.BitmapLabel();
		this.levelProccess = t;
		t.font = "stripe_text_fnt";
		t.text = "1 / 20";
		t.x = 283.42;
		t.y = 365;
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new tweenButton();
		this.playBtn = t;
		t.anchorOffsetX = 121;
		t.anchorOffsetY = 56;
		t.label = "";
		t.x = 192;
		t.y = 721;
		t.skinName = gameOverSkin$Skin10;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new tweenButton();
		this.shareBtn = t;
		t.anchorOffsetX = 121;
		t.anchorOffsetY = 56;
		t.label = "";
		t.x = 444;
		t.y = 721;
		t.skinName = gameOverSkin$Skin11;
		return t;
	};
	_proto.homeBtn_i = function () {
		var t = new tweenButton();
		this.homeBtn = t;
		t.anchorOffsetX = 88;
		t.anchorOffsetY = 18.5;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 865.5;
		t.skinName = gameOverSkin$Skin12;
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
		t.y = 476;
		return t;
	};
	return gameOverSkin;
})(eui.Skin);generateEUI.paths['resource/page/levelCom.exml'] = window.levelComSkin = (function (_super) {
	__extends(levelComSkin, _super);
	function levelComSkin() {
		_super.call(this);
		this.skinParts = ["headmask","headimg","head","content","scroller"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.scroller_i()];
	}
	var _proto = levelComSkin.prototype;

	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetY = 0;
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
		t.height = 624.24;
		t.width = 750;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.head_i()];
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
	_proto.head_i = function () {
		var t = new eui.Group();
		this.head = t;
		t.height = 150;
		t.width = 150;
		t.x = 339;
		t.y = 424;
		t.elementsContent = [this._Image3_i(),this.headmask_i(),this.headimg_i()];
		return t;
	};
	_proto._Image3_i = function () {
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
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	return levelComSkin;
})(eui.Skin);generateEUI.paths['resource/page/runningScene.exml'] = window.runningSceneSkin = (function (_super) {
	__extends(runningSceneSkin, _super);
	function runningSceneSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","scoreText","levelText","star_1","star_2","star_3","scoreProccess","amountText","amountPro","hammer_img","hammer_text","hammer_add","hammer_num","hammer","hat_img","hat_text","hat_add","hat_num","hat","lamp_img","lamp_text","lamp_add","lamp_num","lamp","bulletImg","bulletNum","hero","rayGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bgImg_i(),this._Image1_i(),this.scoreText_i(),this.scoreProccess_i(),this._Group1_i(),this._Image6_i(),this._Group3_i(),this.bulletImg_i(),this.bulletNum_i(),this._Image12_i(),this.hero_i(),this.rayGroup_i()];
	}
	var _proto = runningSceneSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.source = "img_bg_game_02_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_green_1_png";
		t.x = 55;
		t.y = 47;
		return t;
	};
	_proto.scoreText_i = function () {
		var t = new eui.BitmapLabel();
		this.scoreText = t;
		t.font = "stripe_text_fnt";
		t.text = "66";
		t.textAlign = "center";
		t.width = 200;
		t.x = 155;
		t.y = 78;
		return t;
	};
	_proto.scoreProccess_i = function () {
		var t = new eui.Group();
		this.scoreProccess = t;
		t.height = 120;
		t.width = 120;
		t.x = 38.68;
		t.y = 36;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.levelText_i(),this.star_1_i(),this.star_2_i(),this.star_3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "star_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "关卡";
		t.textColor = 0x603005;
		t.y = 28;
		return t;
	};
	_proto.levelText_i = function () {
		var t = new eui.BitmapLabel();
		this.levelText = t;
		t.font = "brown_text_fnt";
		t.horizontalCenter = 0;
		t.text = "2";
		t.textAlign = "center";
		t.width = 50;
		t.y = 52;
		return t;
	};
	_proto.star_1_i = function () {
		var t = new eui.Image();
		this.star_1 = t;
		t.height = 27;
		t.rotation = 343.17;
		t.source = "img_star_b2_png";
		t.verticalCenter = -4;
		t.width = 27;
		t.x = -10.64;
		return t;
	};
	_proto.star_2_i = function () {
		var t = new eui.Image();
		this.star_2 = t;
		t.height = 32;
		t.rotation = 336.51;
		t.source = "img_star_b2_png";
		t.width = 32;
		t.x = 38.02;
		t.y = -0.67;
		return t;
	};
	_proto.star_3_i = function () {
		var t = new eui.Image();
		this.star_3 = t;
		t.height = 35;
		t.rotation = 28.08;
		t.source = "img_star_b2_png";
		t.width = 35;
		t.x = 98.99;
		t.y = 49.33;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 364;
		t.y = 47;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.amountText_i(),this._Image5_i(),this.amountPro_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "img_bg_green_2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "img_diamonds_00_png";
		t.x = 10;
		t.y = 18;
		return t;
	};
	_proto.amountText_i = function () {
		var t = new eui.BitmapLabel();
		this.amountText = t;
		t.font = "stripe_text_fnt";
		t.letterSpacing = -6;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "09/20";
		t.x = 87;
		t.y = 27;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "img_schedule_01_png";
		t.x = 83;
		t.y = 62;
		return t;
	};
	_proto.amountPro_i = function () {
		var t = new eui.Image();
		this.amountPro = t;
		t.source = "img_schedule_02_png";
		t.width = 0;
		t.x = 83;
		t.y = 62;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_game_03_png";
		t.y = 1275;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.cacheAsBitmap = true;
		t.height = 110;
		t.horizontalCenter = -105.5;
		t.width = 478.79;
		t.y = 1192.7;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.hammer_i(),this.hat_i(),this.lamp_i(),this._Group2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "justify";
		return t;
	};
	_proto.hammer_i = function () {
		var t = new eui.Group();
		this.hammer = t;
		t.width = 110;
		t.x = -143;
		t.y = -28.5;
		t.elementsContent = [this._Image7_i(),this.hammer_img_i(),this.hammer_text_i(),this.hammer_add_i(),this.hammer_num_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg_prop_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hammer_img_i = function () {
		var t = new eui.Image();
		this.hammer_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_prop_game_01_png";
		t.top = 0;
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
	_proto.hammer_add_i = function () {
		var t = new eui.Image();
		this.hammer_add = t;
		t.source = "btn_more_png";
		t.x = 77.68;
		t.y = 76.54;
		return t;
	};
	_proto.hammer_num_i = function () {
		var t = new eui.BitmapLabel();
		this.hammer_num = t;
		t.font = "stripe_text_fnt";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "X11";
		t.textAlign = "right";
		t.visible = false;
		t.width = 100;
		t.x = 41.04;
		t.y = 81.6;
		return t;
	};
	_proto.hat_i = function () {
		var t = new eui.Group();
		this.hat = t;
		t.width = 110;
		t.x = -133;
		t.y = -18.5;
		t.elementsContent = [this._Image8_i(),this.hat_img_i(),this.hat_text_i(),this.hat_add_i(),this.hat_num_i()];
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
	_proto.hat_img_i = function () {
		var t = new eui.Image();
		this.hat_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_prop_game_01_png";
		t.top = 0;
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
	_proto.hat_add_i = function () {
		var t = new eui.Image();
		this.hat_add = t;
		t.source = "btn_more_png";
		t.x = 77.68;
		t.y = 76.54;
		return t;
	};
	_proto.hat_num_i = function () {
		var t = new eui.BitmapLabel();
		this.hat_num = t;
		t.font = "stripe_text_fnt";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "X11";
		t.textAlign = "right";
		t.visible = false;
		t.width = 100;
		t.x = 41.04;
		t.y = 81.6;
		return t;
	};
	_proto.lamp_i = function () {
		var t = new eui.Group();
		this.lamp = t;
		t.width = 110;
		t.x = -123;
		t.y = -8.5;
		t.elementsContent = [this._Image9_i(),this.lamp_img_i(),this.lamp_text_i(),this.lamp_add_i(),this.lamp_num_i()];
		return t;
	};
	_proto._Image9_i = function () {
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
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_prop_game_01_png";
		t.top = 0;
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
	_proto.lamp_add_i = function () {
		var t = new eui.Image();
		this.lamp_add = t;
		t.source = "btn_more_png";
		t.x = 77.68;
		t.y = 76.54;
		return t;
	};
	_proto.lamp_num_i = function () {
		var t = new eui.BitmapLabel();
		this.lamp_num = t;
		t.font = "stripe_text_fnt";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "X1";
		t.textAlign = "right";
		t.visible = false;
		t.width = 100;
		t.x = 41.04;
		t.y = 81.6;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 110;
		t.x = -113;
		t.y = 1.5;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Label2_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg_prop_01_png";
		t.x = 1.52;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icn_lock_png";
		t.top = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.text = "期待中";
		t.textColor = 0x7a7867;
		t.y = 81.72;
		return t;
	};
	_proto.bulletImg_i = function () {
		var t = new eui.Image();
		this.bulletImg = t;
		t.height = 85;
		t.source = "img_bullet_a2_png";
		t.width = 95;
		t.x = 540;
		t.y = 1207;
		return t;
	};
	_proto.bulletNum_i = function () {
		var t = new eui.BitmapLabel();
		this.bulletNum = t;
		t.font = "stripe_text_fnt";
		t.text = "X5";
		t.x = 630;
		t.y = 1266;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_bg_game_01_jpg";
		t.y = 195;
		return t;
	};
	_proto.hero_i = function () {
		var t = new eui.Image();
		this.hero = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 162;
		t.source = "img_role_boy_png";
		t.x = 446;
		t.y = 1129;
		return t;
	};
	_proto.rayGroup_i = function () {
		var t = new eui.Group();
		this.rayGroup = t;
		t.anchorOffsetY = 0;
		t.height = 914;
		t.horizontalCenter = 0;
		t.width = 690;
		t.y = 195;
		return t;
	};
	return runningSceneSkin;
})(eui.Skin);generateEUI.paths['resource/page/startScene.exml'] = window.startSceneSkin = (function (_super) {
	__extends(startSceneSkin, _super);
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
		return startSceneSkin$Skin16;
	})(eui.Skin);

	var startSceneSkin$Skin17 = 	(function (_super) {
		__extends(startSceneSkin$Skin17, _super);
		function startSceneSkin$Skin17() {
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
		var _proto = startSceneSkin$Skin17.prototype;

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
		return startSceneSkin$Skin17;
	})(eui.Skin);

	function startSceneSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","liftText","lifeGroup","goldText","goldGroup","openLife","openShare","openBullet","openShop","openRank","red_dot","openGift","navGroup","moreGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bgImg_i(),this.lifeGroup_i(),this.goldGroup_i(),this.openLife_i(),this.openShare_i(),this.navGroup_i(),this._Image6_i(),this._Rect1_i(),this.moreGroup_i()];
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
		t.y = 675.5;
		t.skinName = startSceneSkin$Skin13;
		return t;
	};
	_proto.openShare_i = function () {
		var t = new tweenButton();
		this.openShare = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 62.5;
		t.label = "";
		t.x = 670;
		t.y = 836.5;
		t.skinName = startSceneSkin$Skin14;
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
		t.elementsContent = [this.openBullet_i(),this.openShop_i(),this.openRank_i(),this.openGift_i()];
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
		t.skinName = startSceneSkin$Skin15;
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
		t.skinName = startSceneSkin$Skin16;
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
		t.skinName = startSceneSkin$Skin17;
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
		t.horizontalCenter = 0;
		t.source = "img_game_name_png";
		t.y = 210;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillAlpha = 0.3;
		t.fillColor = 0xffffff;
		t.height = 500;
		t.width = 140;
		t.y = 419;
		return t;
	};
	_proto.moreGroup_i = function () {
		var t = new eui.Group();
		this.moreGroup = t;
		t.anchorOffsetY = 0;
		t.height = 458;
		t.width = 140;
		t.x = 0;
		t.y = 444;
		return t;
	};
	return startSceneSkin;
})(eui.Skin);