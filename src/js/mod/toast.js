
// let $ = require('jquery')
require('less/toast.less');

function toast(msg, time) {
    this.msg = msg;
    this.time = time || 1000;
    this.createToast()
    this.showToast()
}

toast.prototype = {
    createToast() {
        let tpl = `<div class='toast'>${this.msg}</div>`;
        this.$toast = $(tpl);
        $('body').append(this.$toast);
    },
    showToast() {
        this.$toast.fadeIn(this.time, () => {
            setTimeout(() => {
                this.$toast.fadeOut(this.time, () => {
                    this.$toast.remove()
                });
            }, this.dismissTime);
        })
    }
}

function Toast(msg, time) {
    return new toast(msg, time);
}
// window.Toast = Toast 可用于自主在控制台测试
module.exports.Toast = Toast;