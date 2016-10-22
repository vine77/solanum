import Ember from 'ember'

export default Ember.Route.extend({
  store: Ember.inject.service(),

  model() {
    return this.get('store').findAll('pomodoro')
  },

  actions: {
    add() {
      const newPomodoro = this.get('store').createRecord('pomodoro', {
        title: 'Create Pomodoro app'
      })
      return newPomodoro.save()
    },

    delete() {
      const pomodoros = this.get('store').peekAll('pomodoro')
      return pomodoros.get('lastObject').destroyRecord()
    }
  }
})
