new Vue({
    el: '#app',
    mounted: function () {
        this.loadPeople();
    },
    data: {
        modalPerson: {},
        people: [],
        isEditMode: false,
        sortAscending: false,
        allToDelete: []
    },
    methods: {
        addClick: function () {
            this.isEditMode = false;
            this.modalPerson = {};
            $(".modal").modal();
        },
        savePerson: function () {
            $.post('/home/addperson', this.modalPerson, () => {
                $(".modal").modal('hide');
                this.loadPeople();
            });

        },

        loadPeople: function () {
            $.get('/home/getpeople', people => {
                this.people = people;
            });
        },

        editClick: function (person) {
            this.isEditMode = true;
            this.modalPerson = person;
            $(".modal").modal();
        },

        updatePerson: function () {
            $.post('/home/updateperson', this.modalPerson, () => {
                $(".modal").modal('hide');
                this.loadPeople();
            });
        },

        deleteClick: function (person) {
            $.post('/home/deleteperson', { personId: person.Id }, () => {
                this.loadPeople();
            });
        },

        sortPeople: function () {
            this.people.sort((p1, p2) => {
                if (this.sortAscending) {
                    var temp = p1;
                    p1 = p2;
                    p2 = temp;
                }

                return p1.Age - p2.Age;
            });
            this.sortAscending = !this.sortAscending;
        },

        deleteAll: function () {
            $.post('/home/deleteall', { personIds: this.allToDelete }, () => {
                this.loadPeople();
            });
        }
    }
})