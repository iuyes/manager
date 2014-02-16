define(function(require,exports,modules){
	var $= require("jquery");
	require("bootstrap-switch");
	require('jwysiwyg');
	$(function() {
		var body_form = $('#body_form_modal').modal({
			keyboard : false,
			backdrop : false,
			show : false
		});
		var menu = new function() {
			var _this = $("#table_menu");
			$(document).click(function() {
				_this.hide();
			});
			_this.offset({
				left : 0,
				top : 0
			});
			_this.hide();
			_this.open = function(event) {

				_this.show();
				_this.offset({
					left : event.pageX,
					top : event.pageY
				});
				event.stopPropagation();
			};
			return _this;
		};
		$("#editor").wysiwyg();
		$("#editor").prev().css("width", "").parent().width("auto")
		.addClass("form-control wyswing-bootstrap")
		.find(".wysiwyg").css({
			"line-height" : 0
		});
		$("#data_table tbody").click(function(e) {
			menu.open(e);
		});
		$("#nav_formOrder").bootstrapSwitch();
		$("#nav_insert").add("#menu_get").add("#menu_update").click(
			function() {
				body_form.modal("show");
			});
	});
});