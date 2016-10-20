import PouchDB from 'pouchdb'
import {Adapter} from 'ember-pouch'

const db = new PouchDB('solanum', {auto_compaction: true})

export default Adapter.extend({
  db: db
})
