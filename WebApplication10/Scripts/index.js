new Vue({
    el: '#app',
    data: {
        message: '', 
        numberData: {
            numbers: [],
            numberToAdd: ''
        }
        
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        },

        addNumber: function() {
            this.numberData.numbers.push(Math.floor((Math.random() * 1000) + 1));
        },

        sortNumbers: function() {
            this.numberData.numbers.sort((i, j) => i - j);
        },

        addNumberFromTextbox: function() {
            this.numberData.numbers.push(this.numberData.numberToAdd);
            this.numberData.numberToAdd = '';
        }
    }
});