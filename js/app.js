
$(function () {
    'use strict';

    var ENTER_KEY = 13;
    var ESCAPE_KEY = 27;

    var util = {
        initial_data: {
            theme: 'default',
            entries: []
        },
        formatTime: function (date) {
            var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var weekday = date.getDay();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            return hours + ':' + minutes + ', ' + weekdays[weekday] + ', ' + year + '/' + month + '/' + day;
        },
        store: function (namespace, data) {
            if (data === undefined) {
                var store = localStorage.getItem(namespace);
                return (store && JSON.parse(store)) || this.initial_data;
            } else {
                localStorage.setItem(namespace, JSON.stringify(data));
            }
        }
    };

    var app = {
        init: function () {
            this.data = util.store('jquery_diary');
            this.entriesTemplate = window.entries_template;
            this.bindEvents();
            this.setTheme(this.data.theme);
            this.render();
        },
        bindEvents: function () {
            $('#new_entry').on('keydown', this.preventDefault.bind(this));
            $('#new_entry').on('keyup', this.create.bind(this));
            $('#theme').on('change', this.selectTheme.bind(this));
            $('body').on('click', '#trash_can', this.delete.bind(this));
        },
        setTheme: function (theme) {
            this.data.theme = theme;
            util.store('jquery_diary', this.data);
            $('body').removeClass().addClass(theme);
            $('#theme').val(theme);
        },
        selectTheme: function (e) {
            var theme = $(e.target).val();
            this.setTheme(theme);
        },
        render: function () {
            util.store('jquery_diary', this.data);
            var entries = this.data.entries.sort(function(a, b) {
                return (a.created_at < b.created_at) ? 1 : -1;
            });
            $('#diary').html(this.entriesTemplate({entries: entries, formatTime: util.formatTime}));
            $('#new_entry').focus();
        },
        preventDefault: function (e) {
            if (e.which === ENTER_KEY && !e.shiftKey) {
                e.preventDefault();
            }
            return true;
        },
        create: function (e) {
            var $input = $(e.target);
            var content = $input.val().trim();

            if (e.which !== ENTER_KEY || e.shiftKey || !content) {
                return false;
            }

            this.data.entries.push({
                content: content,
                created_at: (new Date()).toJSON()
            });
            $input.val('');
            this.render();
        },
        delete: function (e) {
          console.log("test");
          var $id = $(e.target).attr('value');
          console.log("value = " + $id);

          for(var i=0;i<this.data.entries.length;i++){
            if(i == $id){
              console.log("got it");
              this.data.entries.splice(i,1);
            }
          }
          this.render();
        }
    };

    app.init();
});
