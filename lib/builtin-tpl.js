/**
 * @file 内建模板定义
 * @author sparklewhy@gmail.com
 */

var path = require('path');
var util = require('./util.js');
var config = require('./config.js').config;

/**
 * 预定义的项目模板类型
 *
 * @type {Object}
 */
var builtinProjectTemplate = config.projectTemplate;

function initSaberFileTpl(options) {
    var cmdArgs = options.cmdArgs;
    var target = cmdArgs[1];
    options.variables = {action: path.basename(target).replace(/\.js$/, '')};
}

/**
 * 预定义的文件模板类型
 *
 * @type {Object}
 */
var builtinFileTemplate = config.fileTemplate;

/**
 * 初始化内建模板选项信息
 *
 * @inner
 * @param {?Object} tplInfo 要初始化的内建模板信息
 * @param {Object} options 模板初始化选项
 * @return {Object}
 */
function initBuiltinTpl(tplInfo, options) {
    if (tplInfo) {
        if (fis.util.isFunction(tplInfo.init)) {
            tplInfo.init(options);
        }
    }
    return tplInfo;
}

/**
 * 获取预定义的项目模板
 *
 * @param {Object} options 初始化选项
 * @param {string=} value 模板类型值，可选
 * @return {{description: string, uri: string}}
 */
exports.getBulitinProjectTemplate = function (options, value) {
    return initBuiltinTpl(builtinProjectTemplate[value || 'default'], options);
};

/**
 * 获取预定义的文件模板
 *
 * @param {Object} options 初始化选项
 * @param {string} value 模板类型值
 * @return {{description: string, uri: string}}
 */
exports.getBulitinFileTemplate = function (options, value) {
    return initBuiltinTpl(builtinFileTemplate[value], options);
};

/**
 * 初始化内建模板
 */
exports.init = function () {
    var _ = fis.util;

    // 初始化内建模板
    var projectTpl = fis.get('scaffold.project', {});
    _.assign(builtinProjectTemplate, projectTpl);

    // 初始化文件模板
    var fileTpl = fis.get('scaffold.file', {});
    _.assign(builtinFileTemplate, fileTpl);
};

/**
 * 获取所有内建的模板类型
 *
 * @return {Array.<Object>}
 */
exports.getBuilitinTplTypes = function () {
    var typeArr = [];

    Object.keys(builtinProjectTemplate).forEach(function (k) {
        typeArr.push({type: k, descr: builtinProjectTemplate[k].description});
    });
    Object.keys(builtinFileTemplate).forEach(function (k) {
        typeArr.push({type: k, descr: builtinFileTemplate[k].description});
    });

    return typeArr;
};
