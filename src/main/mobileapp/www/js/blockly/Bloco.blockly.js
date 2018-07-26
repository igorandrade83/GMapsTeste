window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Bloco = window.blockly.js.blockly.Bloco || {};

/**
 * Bloco
 */
window.blockly.js.blockly.Bloco.Executar = function() {

	var item;
	if (!this.cronapi.maps.isInitialized("map7651")) {
		this.cronapi.maps.init("map7651", 'roadmap', this.cronapi.maps
				.createLatLngPoint('-13.0011623', '-38.4685141'), '16',
				function(sender_item) {
					item = sender_item;
				}.bind(this));
	}
}
