Hooks.on("init", () => {
    CONFIG.TinyMCE.style_formats[0].items.push(
	  { title: 'Modulaire', items: [
		{title : 'Action', block : 'p', classes : 'action'},
		{title : 'Corruption', block : 'p', classes : 'corruption'},
		{title : 'Dragons', block : 'p', classes : 'dragons'},
		{title : 'Eveil', block : 'p', classes : 'eveil'},
		{title : 'Hasard', block : 'p', classes : 'hasard'},
		{title : 'Implacable', block : 'p', classes : 'implacable'},
		{title : 'Intrigue', block : 'p', classes : 'intrigue'},
		{title : 'Mystère', block : 'p', classes : 'mystère'},
		{title : 'Noirceur', block : 'p', classes : 'noirceur'},
		{title : 'Verrou arcanique', block : 'p', classes : 'arcanique'},
		{title : 'Verrou funeste', block : 'p', classes : 'funeste'},
		{title : 'Verrou mental', block : 'p', classes : 'mental'},
		{title : 'Titre', block : 'h5', classes : 'mtitre'}
    ] },
		{title : 'Narration', block : 'section', classes : 'narration'},
		{title : 'Colonne', block : 'section', classes : 'colonne'},
		{title : 'Monster', block : 'section', classes : 'monster'},
		{title : 'Frame', block : 'section', classes : 'frame'},
		{title : 'Blank', block : 'section', classes : 'blank'},
		{title : 'Block', block : 'section', classes : 'block'}
    );
	CONFIG.TinyMCE.menubar = "file edit insert view format table tools help";
	CONFIG.TinyMCE.plugins = "template lists advlist autolink table link image code save";
    CONFIG.TinyMCE.toolbar = "template styles forecolor backcolor bullist image table hr link removeformat code fontselect fontsizeselect save";
	CONFIG.TinyMCE.font_formats = "Signika,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats";
	CONFIG.TinyMCE.content_css.push("modules/dragons-css/styles/TinyMCE.css");
	CONFIG.TinyMCE.templates = [
    {
      title : "Stat block",
      url : 'modules/dragons-css/templates/statblock.html',
      description : "Ajoute une fenêtre de statblock"
    }
  ]
});
