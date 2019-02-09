let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    adMeeting: function (num) {
        this.meetings = this.meetings + num
    },

    meetDone: function (num=0) {
        this.meetDone = this.meetings - num
    },
    summary: function () {
        return `you have ${this.meetings - this.meetDone} meetings today!`
    }


}


myTodos.adMeeting(4)
myTodos.meetDone(2)
console.log(myTodos.summary());
