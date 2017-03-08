var loaderUtils = require('loader-utils')

module.exports = function (source, options) {
    var baseFont = loaderUtils.getOptions(this)
    // loader query string

    source = source.replace(/([0-9]*\.[0-9]+|[0-9]+)px/g, function (number) {
        return `${number.slice(0, -2) / baseFont}rem`
    })
    return source
}
