import Ember from 'ember'
import DS from 'ember-data'
import {Model} from 'ember-pouch'

export default Model.extend({
  title: DS.attr('string'),

  done: DS.attr('boolean', {
    defaultValue() { return false }
  }),

  startTime: DS.attr('date', {
    defaultValue() { return Date.now() }
  }),

  elapsedTime: Ember.computed(() => {
    return Date.now() - this.get('startTime')
  })

  // TODO: Make pomodoro pausable with cumulativeTime and lastStartTime
})
