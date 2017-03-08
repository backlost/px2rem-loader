const loaderUtils = require('loader-utils')

module.exports = function (source, options) {
    const options = loaderUtils.getOptions(this)||{}
    // loader query string
	const baseFont  =parseInt(options.baseSize||36)
    source = source.replace(/([0-9]*\.[0-9]+|[0-9]+)px/g, function (number) {
        return `${number.slice(0, -2) / baseFont}rem`
    })
    return source
}
