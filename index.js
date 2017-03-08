module.exports = function (source,options) {
	console.log(this.options)
	source = source.replace(/([0-9]*\.[0-9]+|[0-9]+)px/g, function (number) {
		return number.slice(0, -2)
	})
	return source;
};
