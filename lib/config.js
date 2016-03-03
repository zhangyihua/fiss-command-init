var path = require('path');

exports.config = {
	// etpl 模板引擎相关配置
	etpl: {
		VAR_REGEXP: /\$\{#([\w\.\-_]+)(?:\:(\w+))?(?:\s*=\s*(.+?))?#\}/g,
		conf: {
	        strip: true,
	        commandOpen: '<%',
	        commandClose: '%>',
	        variableOpen: '${#',
	        variableClose: '#}'
		}
	},

	// 工程模板
	projectTemplate: {
	    'simple-m': {
	        uri: 'simple-m',
	        description: 'init a simple front-end project template on mobile end.'
	    },
	    'simple-pc': {
	    	uri: 'simple-pc',
	    	description: 'init a simple front-end project template on PC end.'
	    }
	},

	// 文件模板
	fileTemplate: {
		html: {
		    uri: 'local:' + path.join(__dirname, 'tpl', 'html.tpl'),
		    description: 'create html file: html <targetfile>'
		},
		js: {
		    uri: 'local:' + path.join(__dirname, 'tpl', 'js.tpl'),
		    description: 'create js file: js <targetfile>'
		},
		amd: {
		    uri: 'local:' + path.join(__dirname, 'tpl', 'amd.tpl'),
		    description: 'create amd module file: amd <targetfile>'
		}
	}
}