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

  constructor(private afs: AngularFirestore) {}

  getItems() {
    return this.items$;
  }
}
