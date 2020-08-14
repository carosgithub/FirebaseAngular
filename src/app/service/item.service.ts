import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';

import { Observable } from 'rxjs';

import { Item } from '../models/item';

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items$: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('items');
    this.items$ = this.itemsCollection.valueChanges();
  }

  getItems() {
    return this.items$;
  }
}
