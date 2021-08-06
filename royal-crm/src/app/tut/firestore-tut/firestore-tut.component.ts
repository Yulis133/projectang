import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  CollectionReference,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-firestore-tut',
  templateUrl: './firestore-tut.component.html',
  styleUrls: ['./firestore-tut.component.scss'],
})
export class FirestoreTutComponent implements OnInit {
  form = {
    idValue: '',
    object: '',
  };

  collectionReference: AngularFirestoreCollection<{ [key: string]: any }>;

  constructor(private afs: AngularFirestore) {
    this.collectionReference = this.afs.collection('test');
  }

  add() {
    this.collectionReference.add(JSON.parse(this.form.object));
  }
  delete() {
    this.collectionReference.doc(this.form.idValue).delete();
  }

  set() {
    this.collectionReference
      .doc(this.form.idValue)
      .set(JSON.parse(this.form.object));
  }

  update() {
    this.collectionReference
      .doc(this.form.idValue)
      .update(JSON.parse(this.form.object));
  }

  getResaults: Observable<any>;

  get() {
    this.getResaults = this.collectionReference.doc(this.form.idValue).get();
  }

  getAll() {
    this.getResaults = this.collectionReference.get();
  }

  valueChangesResaults: Observable<any>;
  valueChanges() {
    this.valueChangesResaults = this.collectionReference
      .doc(this.form.idValue)
      .snapshotChanges();
  }

  valueChangestAll() {
    this.valueChangesResaults = this.collectionReference
      .snapshotChanges()
      .pipe(map());
  }

  onSubmit() {}

  ngOnInit(): void {}
}
