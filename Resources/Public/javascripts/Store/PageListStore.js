Ext.ns("TYPO3.Devlog.Store");

TYPO3.Devlog.Store.initPageListStore = function() {
	return new Ext.data.ArrayStore({
		fields: ['key', 'value', 'className'],
		data : TYPO3.Devlog.Data.PageList
	});
}
