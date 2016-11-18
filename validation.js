/**
 * Created by lijiahao on 16/11/17.
 */
(function (window) {

    var validation = function () {
        if (!(this instanceof validation)) {
            return new validation();
        }
    };

    validation.prototype = {
        // 初始化
        init: function (option) {
            this.defaults = {
                success: function (name,value) {

                },
                error: function (name,value) {

                }
            };

            this.option = option;
            this.info = {};

            // 获取所有input框
            var input = document.getElementsByTagName('input');

            for (var i = 0; i < input.length; i++) {

                if (input[i].attributes['data-validation']) {

                    /**
                     * validation 匹配 验证
                     * type       要验证的类型
                     * name       要验证的名称
                     * value      input里的value
                     */
                    var validation = input[i].attributes['data-validation'].value;
                    var type = input[i].attributes['data-type'].value;
                    var name = input[i].attributes['data-name'].value;
                    var value = input[i].value;

                    // 判断是否符合规则
                    if( validation === 'validation' ){

                        switch (type) {
                            case 'number':
                                if (!this._validateNumber(value)) {
                                    this.info.value = false;
                                    this.info.name = name;
                                    return this.info
                                }
                                break;
                        }

                    }
                }

            }
            this.info.value = true;
            return this.info
        },

        // number
        _validateNumber: function (value) {
            return /^[0-9]*$/.test(value);
        }
    };

    window.validation = function (option) {
        var validate = new validation(option);
        return validate.init(option);
    }

})(window);
